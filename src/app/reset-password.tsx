import { router } from "expo-router";
import { useState } from "react";

import { isValidEmail } from "../auth/validation";
import { BackButton, CyanButton, Field, Hero, PhoneFrame } from "../components/auth/AuthFrame";

/** Figma: Reset Password (1691:21732). */
export default function ResetPasswordScreen() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function onSubmit() {
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    router.push({ pathname: "/check-email", params: { email: email.trim() } });
  }

  return (
    <PhoneFrame>
      <BackButton />
      <Hero title="Reset your password" subtitle="Enter your email to receive a reset link" />
      <Field
        top={355}
        value={email}
        onChangeText={(value) => {
          setEmail(value);
          setError("");
        }}
        placeholder="Your email address"
        keyboardType="email-address"
        leadingMail
        error={error}
      />
      <CyanButton top={435} label="Sign In" disabled={email.length === 0} onPress={onSubmit} />
    </PhoneFrame>
  );
}
