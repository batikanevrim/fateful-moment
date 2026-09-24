import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";

import { PlayFrame } from "../components/play/PlayChrome";
import { SceneVideo } from "../components/play/SceneVideo";

const backXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.353 4.35303C11.7104 3.9957 12.2896 3.9957 12.647 4.35303C13.0043 4.71036 13.0043 5.28964 12.647 5.64697L7.20898 11.085H19C19.5053 11.085 19.915 11.4947 19.915 12C19.915 12.5053 19.5053 12.915 19 12.915H7.20898L12.647 18.353C13.0043 18.7104 13.0043 19.2896 12.647 19.647C12.2896 20.0043 11.7104 20.0043 11.353 19.647L4.35303 12.647C3.9957 12.2896 3.9957 11.7104 4.35303 11.353L11.353 4.35303Z" fill="#E2E8F0"/></svg>`;

/** Figma: Video Page (1595:592). Fill scaleMode FILL; inner layer 811×392, clipped to 812×375. */
export default function VideoScreen() {
  const next = () => router.push("/choices");

  return (
    <PlayFrame
      background={<SceneVideo source={require("../../assets/videos/intro.mp4")} style={StyleSheet.absoluteFill} onEnd={next} />}
    >
      <Pressable accessibilityRole="button" accessibilityLabel="Continue" onPress={next} style={styles.hit} />
      <Pressable accessibilityRole="button" accessibilityLabel="Back" onPress={() => router.back()} style={styles.back}>
        <SvgXml xml={backXml} width={24} height={24} />
      </Pressable>
    </PlayFrame>
  );
}

const styles = StyleSheet.create({
  hit: {
    ...StyleSheet.absoluteFill,
  },
  back: {
    position: "absolute",
    left: 32,
    top: 10,
    width: 24,
    height: 24,
  },
});
