import { StyleSheet, View } from "react-native";
import { SvgXml } from "react-native-svg";

const emailXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0005 6.99851L13.0305 12.6985C12.7218 12.8919 12.3649 12.9945 12.0005 12.9945C11.6362 12.9945 11.2793 12.8919 10.9705 12.6985L2.00054 6.99851M4.00054 3.99949H20.0005C21.1051 3.99949 22.0005 4.89492 22.0005 5.99949V17.9995C22.0005 19.1041 21.1051 19.9995 20.0005 19.9995H4.00054C2.89597 19.9995 2.00054 19.1041 2.00054 17.9995V5.99949C2.00054 4.89492 2.89597 3.99949 4.00054 3.99949Z" stroke="#00D3F3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const appleXml = `<svg width="17.9208" height="22.0002" viewBox="0 0 17.9208 22.0002" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.09976 6.32133C8.23076 6.32133 6.88601 5.33317 5.46976 5.368C3.59976 5.39275 1.8856 6.45242 0.922179 8.13083C-1.0184 11.4996 0.421679 16.4752 2.3146 19.2133C3.24318 20.5462 4.3386 22.0458 5.7906 21.9991C7.18393 21.9395 7.70643 21.0943 9.39768 21.0943C11.0761 21.0943 11.5518 21.9991 13.0277 21.9633C14.5283 21.9395 15.4807 20.6067 16.3973 19.261C17.457 17.7137 17.897 16.2131 17.9208 16.1306C17.8851 16.1187 15.004 15.0113 14.9692 11.6783C14.9453 8.89167 17.2425 7.55883 17.3498 7.49925C16.0398 5.58342 14.0287 5.36892 13.3256 5.32125C11.4923 5.17825 9.95685 6.32133 9.09976 6.32133ZM12.1963 3.51083C12.969 2.58317 13.4796 1.28608 13.3375 0C12.2311 0.0476667 10.8973 0.737917 10.0998 1.6665C9.38485 2.48783 8.76701 3.80967 8.93293 5.071C10.1594 5.16633 11.4217 4.44033 12.1953 3.51175" fill="white"/></svg>`;

const googleParts = [
  {
    inset: { top: "8.34%", right: "8.33%", bottom: "8.33%", left: "8.33%" },
    xml: `<svg width="18.3333" height="18.325" viewBox="0 0 18.3333 18.325" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.155 7.36803H17.4167V7.33001H9.16667V10.995H14.3472C13.5914 13.1285 11.5605 14.66 9.16667 14.66C6.12929 14.66 3.66667 12.1985 3.66667 9.16251C3.66667 6.12651 6.12929 3.665 9.16667 3.665C10.5687 3.665 11.8443 4.19368 12.8155 5.05725L15.4083 2.46563C13.7711 0.940531 11.5812 0 9.16667 0C4.10438 0 0 4.10251 0 9.16251C0 14.2225 4.10438 18.325 9.16667 18.325C14.229 18.325 18.3333 14.2225 18.3333 9.16251C18.3333 8.54816 18.2701 7.94847 18.155 7.36803Z" fill="#FFC107"/></svg>`,
  },
  {
    inset: { top: "8.34%", right: "21.63%", bottom: "59.35%", left: "13.13%" },
    xml: `<svg width="14.3513" height="7.10552" viewBox="0 0 14.3513 7.10552" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4.89782L3.01171 7.10552C3.82662 5.08886 5.80021 3.665 8.10975 3.665C9.51179 3.665 10.7873 4.19368 11.7585 5.05725L14.3513 2.46563C12.7142 0.940531 10.5243 0 8.10975 0C4.58883 0 1.53542 1.98689 0 4.89782Z" fill="#FF3D00"/></svg>`,
  },
  {
    inset: { top: "58.45%", right: "22.06%", bottom: "8.33%", left: "12.91%" },
    xml: `<svg width="14.3064" height="7.30527" viewBox="0 0 14.3064 7.30527" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.16063 7.30527C10.5284 7.30527 12.6798 6.39955 14.3064 4.92668L11.4693 2.52702C10.549 3.22383 9.405 3.64026 8.16063 3.64026C5.77638 3.64026 3.75192 2.12066 2.98925 0L0 2.30208C1.51708 5.26936 4.598 7.30527 8.16063 7.30527Z" fill="#4CAF50"/></svg>`,
  },
  {
    inset: { top: "41.67%", right: "8.33%", bottom: "19.11%", left: "50%" },
    xml: `<svg width="9.16667" height="8.62569" viewBox="0 0 9.16667 8.62569" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.98838 0.0380245H8.25V0H0V3.665H5.18054C4.81754 4.68983 4.158 5.57355 3.30733 6.21722L3.30871 6.2163L6.14579 8.61596C5.94504 8.7983 9.16667 6.41375 9.16667 1.8325C9.16667 1.21816 9.10342 0.618469 8.98838 0.0380245Z" fill="#1976D2"/></svg>`,
  },
] as const;

const backXml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.8333L4.16667 10L10 4.16667" stroke="#90A1B9" stroke-width="1.66591" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.8333 10H4.16667" stroke="#90A1B9" stroke-width="1.66591" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const checkXml = `<svg width="40" height="40" viewBox="0 0 39.9993 39.9993" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9997 36.666C29.2042 36.666 36.666 29.2042 36.666 19.9997C36.666 10.7951 29.2042 3.33328 19.9997 3.33328C10.7951 3.33328 3.33328 10.7951 3.33328 19.9997C3.33328 29.2042 10.7951 36.666 19.9997 36.666Z" stroke="#00D3F3" stroke-width="3.33328" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.9997 19.9997L18.333 23.3329L24.9996 16.6664" stroke="#00D3F3" stroke-width="3.33328" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export function BackIcon() {
  return <SvgXml xml={backXml} width={20} height={20} />;
}

export function CheckBadge() {
  return <SvgXml xml={checkXml} width={40} height={40} />;
}

export function EmailIcon({ size = 24 }: { size?: number }) {
  return <SvgXml xml={emailXml} width={size} height={size} />;
}

export function AppleIcon() {
  return (
    <View style={styles.box22}>
      <View style={styles.appleInset}>
        <SvgXml xml={appleXml} width="100%" height="100%" />
      </View>
    </View>
  );
}

export function GoogleIcon() {
  return (
    <View style={styles.box22}>
      {googleParts.map((part, index) => (
        <View key={index} style={[styles.part, part.inset]}>
          <SvgXml xml={part.xml} width="100%" height="100%" />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  box22: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  appleInset: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "9.27%",
    right: "9.27%",
  },
  part: {
    position: "absolute",
  },
});
