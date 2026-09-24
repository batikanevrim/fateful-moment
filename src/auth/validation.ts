const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function letterCount(value: string) {
  return value.replace(/[^A-Za-z]/g, "").length;
}

export function isValidName(value: string) {
  return letterCount(value.trim()) >= 3;
}

export function isValidEmail(value: string) {
  return EMAIL.test(value.trim());
}

export function passwordRules(value: string) {
  return [
    { label: "Must be at least 8 characters long", met: value.length >= 8 },
    { label: "Must contain at least 1 uppercase letter", met: /[A-Z]/.test(value) },
    { label: "Must contain at least 1 lowercase letter", met: /[a-z]/.test(value) },
    { label: "Must contain at least 1 digit", met: /\d/.test(value) },
  ];
}

export function isValidPassword(value: string) {
  return passwordRules(value).every((rule) => rule.met);
}
