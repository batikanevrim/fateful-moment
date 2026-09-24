import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { isValidEmail, isValidName, isValidPassword } from "../auth/validation";
import { BackButton, CyanButton, Field, Hero, PhoneFrame } from "../components/auth/AuthFrame";
import { PasswordRules } from "../components/auth/PasswordRules";

/** Figma: Create Account (1691:19498). */
export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);
  const ready = isValidName(name) && isValidEmail(email) && isValidPassword(password);

  return (
    <PhoneFrame height={passwordFocused ? 852 : 812}>
      <BackButton />
      <View style={styles.form}>
        <Hero title="Create your Fateful Moment Account" />
        <Field
        top={348}
        value={name}
        onChangeText={(value) => {
          setName(value);
          setNameError(value.length > 0 && !isValidName(value) ? "Enter at least 3 characters." : "");
        }}
        placeholder="Full Name"
        autoCapitalize="words"
        error={nameError}
      />
        <Field
        top={436}
        value={email}
        onChangeText={(value) => {
          setEmail(value);
          setEmailError(value.length > 0 && !isValidEmail(value) ? "Please enter a valid email address." : "");
        }}
        placeholder="Your email address"
        keyboardType="email-address"
        error={emailError}
      />
        <Field
        top={524}
        value={password}
        onChangeText={setPassword}
        placeholder="Your password"
        secure
        onFocus={() => setPasswordFocused(true)}
        onBlur={() => setPasswordFocused(false)}
      />
        {passwordFocused ? <PasswordRules value={password} /> : null}
        <CyanButton top={passwordFocused ? 720 : 628} label="Sign up" disabled={!ready} onPress={() => router.replace("/home")} />
      </View>
      <Text style={[styles.footer, passwordFocused && styles.footerLow]}>
        Already have an account?{" "}
        <Text style={styles.link} onPress={() => router.replace("/sign-in")}>
          Sign in
        </Text>
      </Text>
    </PhoneFrame>
  );
}

const styles = StyleSheet.create({
  form: {
    ...StyleSheet.absoluteFill,
  },
  footerLow: {
    top: 800,
  },
  footer: {
    position: "absolute",
    top: 730,
    left: 24,
    width: 327,
    textAlign: "center",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
    color: "#90A1B9",
  },
  link: {
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    lineHeight: 20,
    color: "#00D3F3",
    textDecorationLine: "underline",
  },
});
