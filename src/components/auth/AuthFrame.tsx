import type { ReactNode } from "react";
import { router } from "expo-router";
import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import { BackIcon, EmailIcon } from "../icons/FigmaIcons";

export function PhoneFrame({ children, height = 812 }: { children: ReactNode; height?: number }) {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.screen}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="interactive"
      automaticallyAdjustKeyboardInsets
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.frame, { height }]}>{children}</View>
    </ScrollView>
  );
}

export function Hero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <View style={styles.hero}>
      <Image source={require("../../../assets/figma/app-icon.png")} style={styles.logo} />
      <View style={styles.titles}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    </View>
  );
}

export function BackButton() {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel="Back" onPress={() => router.back()} style={styles.back}>
      <BackIcon />
    </Pressable>
  );
}

type FieldProps = {
  top: number;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  secure?: boolean;
  keyboardType?: "default" | "email-address";
  autoCapitalize?: "none" | "words";
  error?: string;
  leadingMail?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
};

export function Field({
  top,
  value,
  onChangeText,
  placeholder,
  secure,
  keyboardType = "default",
  autoCapitalize = "none",
  error,
  leadingMail,
  onFocus,
  onBlur,
}: FieldProps) {
  return (
    <View style={[styles.field, { top }, error ? styles.fieldError : null]}>
      {leadingMail && value.length === 0 ? <EmailIcon size={22} /> : null}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#62748E"
        secureTextEntry={secure}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        onFocus={onFocus}
        onBlur={onBlur}
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

export function CyanButton({
  top,
  label,
  disabled,
  onPress,
}: {
  top: number;
  label: string;
  disabled?: boolean;
  onPress?: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={[styles.cyan, { top }, disabled && styles.dimmed]}
    >
      <Text style={styles.cyanLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#020618",
  },
  screen: {
    flexGrow: 1,
    alignItems: "center",
  },
  frame: {
    width: 375,
    height: 812,
    maxWidth: "100%",
  },
  hero: {
    position: "absolute",
    top: 82,
    left: 24,
    width: 327,
    height: 248,
    alignItems: "center",
  },
  logo: {
    width: 148,
    height: 148,
    borderRadius: 74,
  },
  titles: {
    position: "absolute",
    top: 184,
    width: 327,
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    lineHeight: 25,
    color: "#FFFFFF",
    textAlign: "center",
    width: 327,
  },
  subtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#90A1B9",
    textAlign: "center",
  },
  back: {
    position: "absolute",
    left: 24,
    top: 64,
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderWidth: 0.75,
    borderColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  field: {
    position: "absolute",
    left: 24,
    width: 327,
    height: 56,
    borderRadius: 16,
    backgroundColor: "rgba(17,24,39,0.8)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  fieldError: {
    borderColor: "#FB2C36",
  },
  input: {
    flex: 1,
    height: 54,
    color: "#FFFFFF",
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    paddingVertical: 0,
    textAlignVertical: "center",
    ...Platform.select({
      android: { includeFontPadding: false },
      default: {},
    }),
  },
  error: {
    position: "absolute",
    top: 58,
    left: 4,
    color: "#FB2C36",
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    lineHeight: 16,
  },
  cyan: {
    position: "absolute",
    left: 24,
    width: 327,
    borderRadius: 16,
    backgroundColor: "rgba(0,211,243,0.14)",
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: "center",
  },
  dimmed: {
    opacity: 0.35,
  },
  cyanLabel: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    lineHeight: 24,
    color: "#00D3F3",
  },
});
