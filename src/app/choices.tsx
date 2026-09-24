import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

import { PlayFrame } from "../components/play/PlayChrome";

const backXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.353 4.35303C11.7104 3.9957 12.2896 3.9957 12.647 4.35303C13.0043 4.71036 13.0043 5.28964 12.647 5.64697L7.20898 11.085H19C19.5053 11.085 19.915 11.4947 19.915 12C19.915 12.5053 19.5053 12.915 19 12.915H7.20898L12.647 18.353C13.0043 18.7104 13.0043 19.2896 12.647 19.647C12.2896 20.0043 11.7104 20.0043 11.353 19.647L4.35303 12.647C3.9957 12.2896 3.9957 11.7104 4.35303 11.353L11.353 4.35303Z" fill="#E2E8F0"/></svg>`;

const options = [
  { id: "quarantine", text: "Deniz Karantinası: Küba'yı kuşatıp Sovyet gemilerini engelleyerek gizli pazarlık yürütmek.", align: "left" as const },
  { id: "moscow", text: "Wait for Signal from Moscow", align: "center" as const },
  { id: "schedule", text: "Zaman Baskısına Uyum: Siyasi ve medya baskısı nedeniyle risklere rağmen belirlenen takvimde fırlatmayı başlat.", align: "left" as const },
  { id: "sonar-a", text: "Signal US Ships with Sonar", align: "center" as const },
  { id: "sonar-b", text: "Signal US Ships with Sonar", align: "center" as const },
];

/** Figma: Selected Option (1633:636) and Unselected Options (1635:975). */
export default function ChoicesScreen() {
  const [selected, setSelected] = useState<string | null>(null);

  function choose(id: string) {
    if (selected === id) {
      router.push(id === "moscow" ? "/outcome?scene=1" : "/outcome?scene=2");
      return;
    }
    setSelected(id);
  }

  return (
    <PlayFrame
      background={
        <>
          <Image
            source={selected ? require("../../assets/figma/play/choices-map.png") : require("../../assets/figma/play/choices-bg.png")}
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
          />
          <View style={styles.dim} />
        </>
      }
    >
      <Pressable accessibilityRole="button" accessibilityLabel="Back" onPress={() => router.back()} style={styles.back}>
        <SvgXml xml={backXml} width={24} height={24} />
      </Pressable>
      <View style={styles.grid}>
        <View style={styles.row}>
          {options.slice(0, 2).map((option) => (
            <Choice key={option.id} option={option} selected={selected === option.id} onPress={() => choose(option.id)} />
          ))}
        </View>
        <View style={styles.row}>
          {options.slice(2, 4).map((option) => (
            <Choice key={option.id} option={option} selected={selected === option.id} onPress={() => choose(option.id)} />
          ))}
        </View>
        <View style={styles.rowCenter}>
          <Choice option={options[4]} selected={selected === options[4].id} onPress={() => choose(options[4].id)} />
        </View>
      </View>
      {selected ? null : (
        <View style={styles.track}>
          <View style={styles.fill} />
        </View>
      )}
    </PlayFrame>
  );
}

function Choice({
  option,
  selected,
  onPress,
}: {
  option: (typeof options)[number];
  selected: boolean;
  onPress: () => void;
}) {
  const label = (
    <Text style={[styles.label, option.align === "center" && styles.centered]}>{option.text}</Text>
  );

  return (
    <View style={styles.slot}>
      {selected ? <View style={styles.badge}><Text style={styles.badgeLabel}>Your Choice</Text></View> : null}
      <Pressable accessibilityRole="button" onPress={onPress} style={[styles.card, selected && styles.cardSelected]}>
        {selected ? (
          <LinearGradient
            colors={["rgba(15,23,43,0.63)", "rgba(0,211,243,0.63)", "rgba(15,23,43,0.63)"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.selectedFill}
          >
            {label}
          </LinearGradient>
        ) : (
          label
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  dim: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.49)",
  },
  back: {
    position: "absolute",
    left: 24,
    top: 16,
    width: 24,
    height: 24,
    zIndex: 2,
  },
  grid: {
    position: "absolute",
    left: 66,
    top: 76,
    width: 702,
    gap: 12,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  slot: {
    width: 345,
  },
  card: {
    height: 66,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#F8FAFC",
    backgroundColor: "rgba(15,23,43,0.63)",
    paddingHorizontal: 17,
    justifyContent: "center",
    overflow: "hidden",
  },
  cardSelected: {
    borderWidth: 2,
    paddingHorizontal: 0,
    backgroundColor: "transparent",
  },
  selectedFill: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 18,
  },
  label: {
    fontFamily: "Inter_500Medium",
    fontSize: 12,
    lineHeight: 16,
    color: "#FFFFFF",
  },
  centered: {
    textAlign: "center",
  },
  badge: {
    position: "absolute",
    top: -16,
    alignSelf: "center",
    zIndex: 2,
    backgroundColor: "#FFD230",
    borderWidth: 1,
    borderColor: "#FFB900",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  badgeLabel: {
    fontFamily: "Inter_900Black",
    fontSize: 12,
    lineHeight: 16,
    color: "#FFFFFF",
  },
  track: {
    position: "absolute",
    left: 24,
    top: 345,
    width: 764,
    height: 6,
    borderRadius: 999,
    backgroundColor: "rgba(29,41,61,0.56)",
    overflow: "hidden",
  },
  fill: {
    width: 214,
    height: 6,
    borderRadius: 999,
    backgroundColor: "#FFD230",
  },
});
