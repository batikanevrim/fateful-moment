import type { ReactNode } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

import { SceneVideo } from "./SceneVideo";

const playXml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 2L13.3333 8L4 14V2Z" fill="#00D3F2" stroke="#00D3F2" stroke-width="1.16492" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const menuXml = `<svg width="14" height="14" viewBox="0 0 13.9791 13.9791" fill="none"><path d="M12.2317 8.73692V3.49477" stroke="#62748E" stroke-width="1.16492" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.7755 10.4843C11.1617 10.4843 11.5321 10.3309 11.8052 10.0578C12.0783 9.78472 12.2317 9.41434 12.2317 9.02815C12.2317 8.64195 12.0783 8.27157 11.8052 7.99849C11.5321 7.72541 11.1617 7.572 10.7755 7.572C10.3893 7.572 10.019 7.72541 9.74588 7.99849C9.47279 8.27157 9.31938 8.64195 9.31938 9.02815C9.31938 9.41434 9.47279 9.78472 9.74588 10.0578C10.019 10.3309 10.3893 10.4843 10.7755 10.4843Z" stroke="#62748E" stroke-width="1.16492" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.98953 6.98953H1.74738" stroke="#62748E" stroke-width="1.16492" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.31938 3.49477H1.74738" stroke="#62748E" stroke-width="1.16492" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.98953 10.4843H1.74738" stroke="#62748E" stroke-width="1.16492" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const alarmXml = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9.54248 6.5C9.54248 4.54353 7.95647 2.95752 6 2.95752C4.04353 2.95752 2.45752 4.54353 2.45752 6.5C2.45752 8.45647 4.04353 10.0425 6 10.0425C6.96774 10.0425 7.84452 9.65413 8.48389 9.02515C8.48739 9.02135 8.49073 9.01738 8.49438 9.01367C8.5001 9.00788 8.50627 9.00249 8.51221 8.99707C9.14883 8.35661 9.54248 7.47438 9.54248 6.5ZM5.54248 4.5C5.54248 4.24733 5.74733 4.04248 6 4.04248C6.25267 4.04248 6.45752 4.24733 6.45752 4.5V6.31055L7.32349 7.17651C7.50215 7.35518 7.50215 7.64482 7.32349 7.82349C7.14482 8.00215 6.85518 8.00215 6.67651 7.82349L5.67651 6.82349C5.59072 6.73769 5.54248 6.62134 5.54248 6.5V4.5ZM2.17651 1.17651C2.35518 0.997849 2.64482 0.997849 2.82349 1.17651C3.00215 1.35518 3.00215 1.64482 2.82349 1.82349L1.32349 3.32349C1.14482 3.50215 0.855178 3.50215 0.676514 3.32349C0.497849 3.14482 0.497849 2.85518 0.676514 2.67651L2.17651 1.17651ZM9.17651 1.17651C9.35518 0.997849 9.64482 0.997849 9.82349 1.17651L11.3235 2.67651C11.5022 2.85518 11.5022 3.14482 11.3235 3.32349C11.1448 3.50215 10.8552 3.50215 10.6765 3.32349L9.17651 1.82349C8.99785 1.64482 8.99785 1.35518 9.17651 1.17651ZM10.4575 6.5C10.4575 7.56899 10.081 8.54989 9.45361 9.31787L10.3215 10.1743C10.5013 10.3518 10.5032 10.6417 10.3257 10.8215C10.1482 11.0013 9.85827 11.0032 9.67847 10.8257L8.80542 9.96362C8.0393 10.5849 7.06325 10.9575 6 10.9575C4.94143 10.9575 3.96918 10.5883 3.20459 9.97192L2.31787 10.8291C2.13617 11.0046 1.84646 10.9995 1.6709 10.8179C1.4954 10.6362 1.50047 10.3465 1.68213 10.1709L2.5542 9.32788C1.92202 8.55846 1.54248 7.57355 1.54248 6.5C1.54248 4.03819 3.53819 2.04248 6 2.04248C8.46181 2.04248 10.4575 4.03819 10.4575 6.5Z" fill="#00D3F3"/></svg>`;
const prevTriangle = `<svg width="8" height="11" viewBox="0 0 7.83159 10.4843" fill="none"><path d="M7.24913 9.90184L0.582461 5.24215L7.24913 0.582463V9.90184Z" stroke="#62748E" stroke-width="1.16492" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const prevBar = `<svg width="2" height="10" viewBox="0 0 1.16492 9.31938" fill="none"><path d="M0.582461 8.73692V0.582461" stroke="#62748E" stroke-width="1.16492" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const nextTriangle = `<svg width="8" height="11" viewBox="0 0 7.83159 10.4843" fill="none"><path d="M0.582461 0.582463L7.24913 5.24215L0.582461 9.90184V0.582463Z" stroke="#62748E" stroke-width="1.16492" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const nextBar = `<svg width="2" height="10" viewBox="0 0 1.16492 9.31938" fill="none"><path d="M0.582461 0.582461V8.73692" stroke="#62748E" stroke-width="1.16492" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const scenariosXml = `<svg width="20" height="20" viewBox="0 0 19.9997 19.9997" fill="none"><path d="M13.5331 6.46655L12.0298 10.9756C11.948 11.2211 11.8101 11.4442 11.6272 11.6272C11.4442 11.8101 11.2211 11.948 10.9756 12.0298L6.46655 13.5331L7.96986 9.02401C8.05168 8.77853 8.18953 8.55547 8.3725 8.3725C8.55547 8.18953 8.77853 8.05168 9.02401 7.96986L13.5331 6.46655Z" stroke="#00D3F2" stroke-width="1.66664" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.99983 18.333C14.6021 18.333 18.333 14.6021 18.333 9.99983C18.333 5.39753 14.6021 1.66664 9.99983 1.66664C5.39753 1.66664 1.66664 5.39753 1.66664 9.99983C1.66664 14.6021 5.39753 18.333 9.99983 18.333Z" stroke="#00D3F2" stroke-width="1.66664" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const dnaXml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.66666 10.6667L7.66666 11.6667" stroke="#90A1B9" stroke-width="1.24208" stroke-linecap="round"/><path d="M9.33334 5.33333L8.33334 4.33333" stroke="#90A1B9" stroke-width="1.24208" stroke-linecap="round"/><path d="M9.99999 1.33332C8.80133 2.66532 8.32133 3.99666 8.12866 5.32866" stroke="#90A1B9" stroke-width="1.24208" stroke-linecap="round"/><path d="M11 7L11.6667 7.66667" stroke="#90A1B9" stroke-width="1.24208" stroke-linecap="round"/><path d="M11.3333 4L9.40599 2.07267" stroke="#90A1B9" stroke-width="1.24208" stroke-linecap="round"/><path d="M1.33333 9.99999C5.778 5.99999 10.222 9.99999 14.6667 5.99999" stroke="#90A1B9" stroke-width="1.24208" stroke-linecap="round"/><path d="M13.3333 5.99999L13.9273 6.59399" stroke="#90A1B9" stroke-width="1.24208" stroke-linecap="round"/><path d="M2.07267 9.40604L2.66667 10" stroke="#90A1B9" stroke-width="1.24208" stroke-linecap="round"/><path d="M4.33333 8.33332L5 8.99998" stroke="#90A1B9" stroke-width="1.24208" stroke-linecap="round"/><path d="M4.66667 12L6.594 13.9273" stroke="#90A1B9" stroke-width="1.24208" stroke-linecap="round"/><path d="M6 14.6667C7.19866 13.3347 7.67866 12.0033 7.87133 10.6713" stroke="#90A1B9" stroke-width="1.24208" stroke-linecap="round"/></svg>`;
const settingsXml = `<svg width="20" height="20" viewBox="0 0 19.9997 19.9997" fill="none"><path d="M10.1832 1.66664H9.8165C9.37448 1.66664 8.95056 1.84223 8.63801 2.15478C8.32545 2.46734 8.14986 2.89126 8.14986 3.33328V3.48327C8.14956 3.77554 8.07241 4.06259 7.92614 4.31562C7.77988 4.56866 7.56965 4.77878 7.31654 4.92491L6.95821 5.13324C6.70485 5.27952 6.41745 5.35653 6.12489 5.35653C5.83234 5.35653 5.54494 5.27952 5.29157 5.13324L5.16658 5.06658C4.78414 4.84597 4.32979 4.78612 3.90327 4.90017C3.47675 5.01422 3.11291 5.29285 2.89162 5.6749L2.70829 5.99156C2.48768 6.374 2.42783 6.82835 2.54188 7.25487C2.65593 7.68139 2.93456 8.04523 3.31661 8.26652L3.44161 8.34986C3.6935 8.49528 3.90295 8.70409 4.04914 8.95554C4.19533 9.20698 4.27317 9.49231 4.27493 9.78316V10.2082C4.27609 10.5018 4.19964 10.7906 4.0533 11.0452C3.90696 11.2999 3.69594 11.5113 3.44161 11.6581L3.31661 11.7331C2.93456 11.9544 2.65593 12.3183 2.54188 12.7448C2.42783 13.1713 2.48768 13.6257 2.70829 14.0081L2.89162 14.3248C3.11291 14.7068 3.47675 14.9854 3.90327 15.0995C4.32979 15.2135 4.78414 15.1537 5.16658 14.9331L5.29157 14.8664C5.54494 14.7201 5.83234 14.6431 6.12489 14.6431C6.41745 14.6431 6.70485 14.7201 6.95821 14.8664L7.31654 15.0747C7.56965 15.2209 7.77988 15.431 7.92614 15.684C8.07241 15.9371 8.14956 16.2241 8.14986 16.5164V16.6664C8.14986 17.1084 8.32545 17.5323 8.63801 17.8449C8.95056 18.1574 9.37448 18.333 9.8165 18.333H10.1832C10.6252 18.333 11.0491 18.1574 11.3616 17.8449C11.6742 17.5323 11.8498 17.1084 11.8498 16.6664V16.5164C11.8501 16.2241 11.9272 15.9371 12.0735 15.684C12.2198 15.431 12.43 15.2209 12.6831 15.0747L13.0414 14.8664C13.2948 14.7201 13.5822 14.6431 13.8748 14.6431C14.1673 14.6431 14.4547 14.7201 14.7081 14.8664L14.8331 14.9331C15.2155 15.1537 15.6699 15.2135 16.0964 15.0995C16.5229 14.9854 16.8867 14.7068 17.108 14.3248L17.2914 13.9998C17.512 13.6173 17.5718 13.163 17.4578 12.7364C17.3437 12.3099 17.0651 11.9461 16.683 11.7248L16.558 11.6581C16.3037 11.5113 16.0927 11.2999 15.9464 11.0452C15.8 10.7906 15.7236 10.5018 15.7247 10.2082V9.7915C15.7236 9.49782 15.8 9.20905 15.9464 8.95442C16.0927 8.6998 16.3037 8.48836 16.558 8.34152L16.683 8.26652C17.0651 8.04523 17.3437 7.68139 17.4578 7.25487C17.5718 6.82835 17.512 6.374 17.2914 5.99156L17.108 5.6749C16.8867 5.29285 16.5229 5.01422 16.0964 4.90017C15.6699 4.78612 15.2155 4.84597 14.8331 5.06658L14.7081 5.13324C14.4547 5.27952 14.1673 5.35653 13.8748 5.35653C13.5822 5.35653 13.2948 5.27952 13.0414 5.13324L12.6831 4.92491C12.43 4.77878 12.2198 4.56866 12.0735 4.31562C11.9272 4.06259 11.8501 3.77554 11.8498 3.48327V3.33328C11.8498 2.89126 11.6742 2.46734 11.3616 2.15478C11.0491 1.84223 10.6252 1.66664 10.1832 1.66664Z" stroke="#90A1B9" stroke-width="1.66664" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.99983 12.4998C11.3805 12.4998 12.4998 11.3805 12.4998 9.99983C12.4998 8.61914 11.3805 7.49987 9.99983 7.49987C8.61914 7.49987 7.49987 8.61914 7.49987 9.99983C7.49987 11.3805 8.61914 12.4998 9.99983 12.4998Z" stroke="#90A1B9" stroke-width="1.66664" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function SkipBack() {
  return (
    <View style={styles.skip}>
      <View style={styles.prevBar}>
        <SvgXml xml={prevBar} width={2} height={10} />
      </View>
      <View style={styles.prevTriangle}>
        <SvgXml xml={prevTriangle} width={8} height={11} />
      </View>
    </View>
  );
}

function SkipForward() {
  return (
    <View style={styles.skip}>
      <View style={styles.nextTriangle}>
        <SvgXml xml={nextTriangle} width={8} height={11} />
      </View>
      <View style={styles.nextBar}>
        <SvgXml xml={nextBar} width={2} height={10} />
      </View>
    </View>
  );
}

export function PlayFrame({ children, background }: { children: ReactNode; background?: ReactNode }) {
  return (
    <View style={styles.screen}>
      {background ? <View style={styles.bleed} pointerEvents="none">{background}</View> : null}
      <View style={[styles.frame, background ? styles.frameClear : null]}>{children}</View>
    </View>
  );
}

export function MusicBar({ onMenu }: { onMenu: () => void }) {
  return (
    <>
      <View style={styles.navBar} />
      <View style={styles.player}>
        <SkipBack />
        <View style={styles.play}>
          <SvgXml xml={playXml} width={16} height={16} />
        </View>
        <SkipForward />
        <View>
          <Text style={styles.standby}>Standby</Text>
          <Text style={styles.track}>This is the FateF...</Text>
        </View>
        <Pressable accessibilityRole="button" accessibilityLabel="Menu" onPress={onMenu} style={styles.menuHit}>
          <SvgXml xml={menuXml} width={14} height={14} />
        </Pressable>
      </View>
    </>
  );
}

export function SideMenu({
  active,
  onScenarios,
  onDna,
}: {
  active: "scenarios" | "dna";
  onScenarios: () => void;
  onDna: () => void;
}) {
  return (
    <View style={styles.menu}>
      <View style={styles.menuList}>
        <Pressable accessibilityRole="button" onPress={onScenarios} style={[styles.link, styles.linkOn]}>
          <SvgXml xml={scenariosXml} width={20} height={20} />
          <Text style={styles.linkOnLabel}>Scenarios</Text>
          <View style={styles.dot} />
        </Pressable>
        <Pressable accessibilityRole="button" onPress={onDna} style={[styles.link, styles.linkOff]}>
          <View style={styles.dnaBox}>
            <SvgXml xml={dnaXml} width={16} height={16} />
          </View>
          <Text style={[styles.linkOffLabel, active === "dna" && styles.linkOnLabel]}>DNA</Text>
        </Pressable>
        <View style={[styles.link, styles.linkOff]}>
          <SvgXml xml={settingsXml} width={20} height={20} />
          <Text style={styles.linkOffLabel}>Settings</Text>
        </View>
      </View>
    </View>
  );
}

export type Scenario = {
  minutes: string;
  title: string;
  body: string;
  enabled?: boolean;
};

export function ScenarioRow({
  scenarios,
  onStart,
}: {
  scenarios: Scenario[];
  onStart: (scenario: Scenario) => void;
}) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cards} contentContainerStyle={styles.cardsContent}>
      {scenarios.map((scenario, index) => (
        <View key={`${scenario.title}-${index}`} style={[styles.card, !scenario.enabled && styles.dimmed]}>
          {scenario.enabled ? (
            <SceneVideo source={require("../../../assets/videos/card.mp4")} style={styles.cardImage} loop />
          ) : (
            <Image source={require("../../../assets/videos/card-poster.jpg")} style={styles.cardImage} />
          )}
          <View style={styles.cardText}>
            <View style={styles.duration}>
              <SvgXml xml={alarmXml} width={12} height={12} />
              <Text style={styles.minutes}>{scenario.minutes}</Text>
            </View>
            <Text style={styles.cardTitle}>{scenario.title}</Text>
            <View style={styles.cardBodyWrap}>
              <Text style={styles.cardBody}>{scenario.body}</Text>
              <Pressable
                accessibilityRole="button"
                disabled={!scenario.enabled}
                onPress={() => onStart(scenario)}
                style={styles.start}
              >
                <Text style={styles.startLabel}>Start</Text>
              </Pressable>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#020618",
    alignItems: "center",
    justifyContent: "center",
  },
  bleed: {
    ...StyleSheet.absoluteFill,
  },
  frame: {
    width: 812,
    height: 375,
    backgroundColor: "#020618",
    overflow: "hidden",
  },
  frameClear: {
    backgroundColor: "transparent",
  },
  navBar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 812,
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: "#314158",
    backgroundColor: "#020618",
  },
  player: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 17,
    paddingVertical: 7,
    backgroundColor: "rgba(15,23,43,0.8)",
    borderWidth: 1,
    borderColor: "rgba(49,65,88,0.5)",
    borderTopLeftRadius: 999,
    borderBottomLeftRadius: 999,
    borderRightWidth: 0,
  },
  skip: {
    width: 16,
    height: 16,
  },
  prevBar: { position: "absolute", left: 3.3, top: 3.3 },
  prevTriangle: { position: "absolute", left: 6, top: 2.7 },
  nextTriangle: { position: "absolute", left: 3.3, top: 2.7 },
  nextBar: { position: "absolute", left: 12.7, top: 3.3 },
  play: {
    width: 32,
    height: 32,
    borderRadius: 999,
    backgroundColor: "rgba(0,184,219,0.1)",
    borderWidth: 1,
    borderColor: "rgba(0,184,219,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  standby: {
    fontFamily: "Menlo",
    fontSize: 9,
    lineHeight: 13.5,
    letterSpacing: 0.9,
    color: "rgba(0,211,243,0.8)",
    textTransform: "uppercase",
    opacity: 0.62,
  },
  track: {
    fontFamily: "Inter_700Bold",
    fontSize: 10,
    lineHeight: 15,
    color: "#F1F5F9",
    textTransform: "uppercase",
  },
  menuHit: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 256,
    height: 375,
    backgroundColor: "rgba(2,6,24,0.95)",
    borderLeftWidth: 0.76,
    borderLeftColor: "#1D293D",
    zIndex: 3,
  },
  menuList: {
    position: "absolute",
    top: 103,
    left: 24,
    width: 208,
    gap: 16,
  },
  link: {
    height: 46,
    borderRadius: 14,
    borderWidth: 0.76,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 12,
    gap: 16,
  },
  linkOn: {
    backgroundColor: "rgba(0,184,219,0.1)",
    borderColor: "rgba(0,184,219,0.3)",
  },
  linkOff: {
    backgroundColor: "rgba(15,23,43,0.4)",
    borderColor: "rgba(29,41,61,0.5)",
  },
  linkOnLabel: {
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.5,
    color: "#00D3F3",
    textTransform: "uppercase",
  },
  linkOffLabel: {
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.5,
    color: "#90A1B9",
    textTransform: "uppercase",
  },
  dot: {
    position: "absolute",
    right: 14,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#00D3F3",
  },
  dnaBox: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  cards: {
    position: "absolute",
    top: 151,
    left: 66,
    right: 0,
    height: 176,
  },
  cardsContent: {
    gap: 16,
    paddingRight: 24,
  },
  card: {
    width: 220,
    height: 176,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#1D293D",
    overflow: "hidden",
  },
  dimmed: {
    opacity: 0.35,
  },
  cardImage: {
    ...StyleSheet.absoluteFill,
    width: 220,
    height: 176,
  },
  cardText: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 160,
    paddingHorizontal: 12,
    paddingTop: 12,
    gap: 4,
  },
  duration: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  minutes: {
    fontFamily: "Menlo",
    fontWeight: "700",
    fontSize: 8,
    lineHeight: 11,
    color: "#00D3F3",
  },
  cardTitle: {
    fontFamily: "Inter_900Black_Italic",
    fontSize: 12,
    lineHeight: 16,
    color: "#F8FAFC",
    textTransform: "capitalize",
  },
  cardBodyWrap: {
    height: 100,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  cardBody: {
    alignSelf: "stretch",
    height: 64,
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    lineHeight: 16,
    color: "#E2E8F0",
    textTransform: "capitalize",
  },
  start: {
    backgroundColor: "rgba(0,211,243,0.14)",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  startLabel: {
    fontFamily: "Inter_700Bold",
    fontSize: 12,
    lineHeight: 16,
    color: "#00D3F3",
  },
});
