import { useEventListener } from "expo";
import { useFocusEffect } from "expo-router";
import { useVideoPlayer, VideoView, type VideoPlayer, type VideoSource } from "expo-video";
import { useCallback, useRef } from "react";
import { Platform, type StyleProp, type ViewStyle } from "react-native";

function pauseIfAlive(player: VideoPlayer) {
  try {
    if (player.playing) player.pause();
  } catch {
    // Native player is already released when this view unmounts during navigation.
  }
}

export function SceneVideo({
  source,
  style,
  loop = false,
  onEnd,
}: {
  source: VideoSource;
  style: StyleProp<ViewStyle>;
  loop?: boolean;
  onEnd?: () => void;
}) {
  const player = useVideoPlayer(source, (p) => {
    p.loop = loop;
    p.muted = true;
    p.audioMixingMode = "mixWithOthers";
  });

  // Stacked screens stay mounted; pausing on blur keeps a hidden screen from firing onEnd.
  useFocusEffect(
    useCallback(() => {
      player.play();
      return () => pauseIfAlive(player);
    }, [player]),
  );

  const ended = useRef(false);
  useEventListener(player, "playToEnd", () => {
    if (ended.current || !onEnd) return;
    ended.current = true;
    onEnd();
  });

  return (
    <VideoView
      player={player}
      style={style}
      contentFit="cover"
      contentPosition={{ dx: 0, dy: 0 }}
      nativeControls={false}
      allowsPictureInPicture={false}
      pointerEvents="none"
      // Cards overlap inside a horizontal ScrollView; SurfaceView ignores clipping on Android.
      surfaceType={Platform.OS === "android" ? "textureView" : undefined}
    />
  );
}
