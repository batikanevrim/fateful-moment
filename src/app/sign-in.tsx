import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { isValidEmail, isValidPassword } from "../auth/validation";
import { BackButton, CyanButton, Field, Hero, PhoneFrame } from "../components/auth/AuthFrame";

/** Figma: Sign in (1691:21712). */
export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const ready = email.length > 0 && password.length > 0;

  function onSignIn() {
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      setPasswordError("");
      return;
    }
    if (!isValidPassword(password)) {
      setEmailError("");
      setPasswordError("Your password is wrong. Please try again.");
      return;
    }
    router.replace("/home");
  }

  return (
    <PhoneFrame>
      <BackButton />
      <Hero title="Welcome to Fateful Moment" subtitle="Sign in with Email" />
      <Field
        top={355}
        value={email}
        onChangeText={(value) => {
          setEmail(value);
          setEmailError("");
        }}
        placeholder="Your email address"
        keyboardType="email-address"
        error={emailError}
      />
      <Field
        top={443}
        value={password}
        onChangeText={(value) => {
          setPassword(value);
          setPasswordError("");
        }}
        placeholder="Your password"
        secure
        error={passwordError}
      />
      <CyanButton top={547} label="Sign In" disabled={!ready} onPress={onSignIn} />
      <Pressable onPress={() => router.push("/reset-password")} style={styles.forgot}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </Pressable>
      <Text style={styles.footer}>
        No account yet?{" "}
        <Text style={styles.link} onPress={() => router.push("/sign-up")}>
          Sign up
        </Text>
      </Text>
    </PhoneFrame>
  );
}

const styles = StyleSheet.create({
  forgot: {
    position: "absolute",
    top: 643,
    left: 24,
    width: 327,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  forgotText: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
    color: "#00D3F3",
  },
  footer: {
    position: "absolute",
    top: 730,
    left: 24,
    width: 327,
    height: 24,
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
