import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

import { PlayFrame } from "../components/play/PlayChrome";

const backXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.353 4.35303C11.7104 3.9957 12.2896 3.9957 12.647 4.35303C13.0043 4.71036 13.0043 5.28964 12.647 5.64697L7.20898 11.085H19C19.5053 11.085 19.915 11.4947 19.915 12C19.915 12.5053 19.5053 12.915 19 12.915H7.20898L12.647 18.353C13.0043 18.7104 13.0043 19.2896 12.647 19.647C12.2896 20.0043 11.7104 20.0043 11.353 19.647L4.35303 12.647C3.9957 12.2896 3.9957 11.7104 4.35303 11.353L11.353 4.35303Z" fill="#E2E8F0"/></svg>`;

const scores = [
  { label: "Vision", value: 88 },
  { label: "Courage", value: 82 },
  { label: "Risk", value: 79 },
  { label: "Control", value: 55 },
  { label: "Empathy", value: 38 },
  { label: "Ethics", value: 31 },
];

const patterns = [
  "You are not afraid to take action under pressure. While others hesitate, you have already taken a step. This positions you as a natural leader in crisis moments.",
  "You prioritize long-term impact over short-term costs. You see the big picture — but this sometimes makes it difficult for you to see the people in front of you.",
  "When ethics conflict with interests, your tendency is clear: you choose the interest. This pattern repeated in 5 out of 8 scenarios. It works in the short term — but creates erosion of trust in the long term.",
];

/** Figma: DNA (1653:311), 812×375. */
export default function DnaScreen() {
  return (
    <PlayFrame>
      <Pressable accessibilityRole="button" accessibilityLabel="Back" onPress={() => router.back()} style={styles.back}>
        <SvgXml xml={backXml} width={24} height={24} />
      </Pressable>
      <Text style={styles.heading}>Karar DNAsı</Text>
      <View style={styles.columns}>
        <View style={styles.column}>
          <View style={styles.profile}>
            <View style={styles.avatar}>
              <Image source={require("../../assets/figma/play/dna-portrait.png")} style={styles.avatarImage} />
            </View>
            <View style={styles.profileCopy}>
              <Text style={styles.archetype}>brave visionary</Text>
              <Text style={styles.quote}>
                {
                  '"You see the big picture and walk towards it - no matter the cost. Ethics sometimes take a back seat, but few surpass you in the courage to take action."'
                }
              </Text>
            </View>
          </View>
          <View style={styles.matrix}>
            <Text style={styles.matrixTitle}>Psychological Matrix</Text>
            <View style={styles.matrixBody}>
              <Image source={require("../../assets/figma/play/radar.png")} style={styles.radar} />
              <View style={styles.scoreGrid}>
                {scores.map((score) => (
                  <View key={score.label} style={styles.score}>
                    <View style={styles.scoreTop}>
                      <Text style={styles.scoreValue}>{score.value}</Text>
                    </View>
                    <Text style={styles.scoreLabel}>{score.label}</Text>
                    <View style={styles.bar}>
                      <View style={[styles.barFill, { width: `${score.value}%` }]} />
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.patterns}>
            <Text style={styles.kicker}>Pattern Detection</Text>
            {patterns.map((text, index) => (
              <View key={text} style={styles.pattern}>
                <Text style={styles.patternIndex}>0{index + 1}</Text>
                <Text style={styles.patternText}>{text}</Text>
              </View>
            ))}
          </View>
          <View style={styles.blind}>
            <Text style={styles.blindKicker}>Blind Spot - Ethics</Text>
            <Text style={styles.blindQuestion}>How much will you pay to win?</Text>
            <Text style={styles.blindBody}>
              Your vision and courage are strong — but your ethics score is your lowest dimension. While reaching big goals, you often overlook how those around you feel and what they sacrifice. Your leadership capacity is high, but the mark you leave is not always positive.
            </Text>
          </View>
        </View>
      </View>
    </PlayFrame>
  );
}

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    left: 24,
    top: 8,
    width: 24,
    height: 24,
    zIndex: 2,
  },
  heading: {
    position: "absolute",
    left: 66,
    top: 33,
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    lineHeight: 20,
    color: "#E2E8F0",
  },
  columns: {
    position: "absolute",
    left: 66,
    top: 77,
    width: 727,
    flexDirection: "row",
    gap: 16,
  },
  column: {
    flex: 1,
    gap: 16,
  },
  profile: {
    height: 82,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#1D293D",
    backgroundColor: "rgba(15,23,43,0.4)",
    padding: 9,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(0,184,219,0.2)",
    backgroundColor: "#020618",
    overflow: "hidden",
  },
  avatarImage: {
    position: "absolute",
    width: "173%",
    height: "173%",
    left: "-36.5%",
    top: "-16%",
  },
  profileCopy: {
    flex: 1,
    gap: 8,
  },
  archetype: {
    fontFamily: "Inter_900Black_Italic",
    fontSize: 16,
    lineHeight: 24,
    color: "#F1F5F9",
    textTransform: "uppercase",
  },
  quote: {
    borderLeftWidth: 1,
    borderLeftColor: "rgba(0,184,219,0.4)",
    paddingLeft: 5,
    fontFamily: "Inter_400Regular",
    fontSize: 8,
    lineHeight: 11,
    color: "#90A1B9",
  },
  matrix: {
    height: 174,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#1D293D",
    backgroundColor: "rgba(15,23,43,0.6)",
    padding: 8,
    gap: 4,
  },
  matrixTitle: {
    fontFamily: "Menlo",
    fontSize: 8,
    lineHeight: 11,
    color: "#E2E8F0",
    textTransform: "uppercase",
  },
  matrixBody: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  radar: {
    width: 149,
    height: 113,
  },
  scoreGrid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  score: {
    width: "47%",
    height: 37,
    borderRadius: 7,
    borderWidth: 0.3,
    borderColor: "#1D293D",
    backgroundColor: "rgba(2,6,24,0.6)",
    paddingHorizontal: 7,
    paddingVertical: 6,
    justifyContent: "space-between",
  },
  scoreTop: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  scoreValue: {
    fontFamily: "Inter_900Black_Italic",
    fontSize: 8,
    lineHeight: 10,
    color: "#00D3F3",
  },
  scoreLabel: {
    fontFamily: "Menlo",
    fontSize: 6,
    letterSpacing: 0.4,
    color: "#62748E",
    textTransform: "uppercase",
  },
  bar: {
    height: 2,
    borderRadius: 999,
    backgroundColor: "#1D293D",
    overflow: "hidden",
  },
  barFill: {
    height: 2,
    backgroundColor: "#00B8DB",
  },
  patterns: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#1D293D",
    backgroundColor: "rgba(15,23,43,0.4)",
    padding: 9,
    gap: 8,
  },
  kicker: {
    fontFamily: "Menlo",
    fontSize: 8,
    lineHeight: 11,
    color: "#90A1B9",
    textTransform: "uppercase",
  },
  pattern: {
    flexDirection: "row",
    gap: 4,
  },
  patternIndex: {
    fontFamily: "Menlo",
    fontWeight: "700",
    fontSize: 10,
    lineHeight: 15,
    color: "#00B8DB",
  },
  patternText: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 8,
    lineHeight: 11,
    color: "#62748E",
  },
  blind: {
    height: 123,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(251,44,54,0.2)",
    backgroundColor: "rgba(251,44,54,0.05)",
    padding: 9,
    gap: 8,
  },
  blindKicker: {
    fontFamily: "Menlo",
    fontSize: 8,
    lineHeight: 11,
    color: "#FB2C36",
    textTransform: "uppercase",
  },
  blindQuestion: {
    fontFamily: "Inter_400Regular",
    fontSize: 8,
    lineHeight: 11,
    color: "#FFFFFF",
  },
  blindBody: {
    fontFamily: "Inter_400Regular",
    fontSize: 8,
    lineHeight: 11,
    color: "#90A1B9",
  },
});
