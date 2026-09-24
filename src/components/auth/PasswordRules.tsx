import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { passwordRules } from "../../auth/validation";

export function PasswordRules({ value }: { value: string }) {
  return (
    <View style={styles.list}>
      {passwordRules(value).map((rule) => (
        <View key={rule.label} style={styles.row}>
          <Ionicons
            name={rule.met ? "checkmark-circle" : "ellipse-outline"}
            size={16}
            color={rule.met ? "#00D3F3" : "#90A1B9"}
          />
          <Text style={[styles.label, rule.met && styles.met]}>{rule.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    position: "absolute",
    top: 596,
    left: 24,
    width: 230,
    gap: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    height: 16,
  },
  label: {
    fontFamily: "Inter_400Regular",
    fontSize: 11,
    lineHeight: 16,
    color: "#90A1B9",
  },
  met: {
    color: "#FFFFFF",
  },
});
