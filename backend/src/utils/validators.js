export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validatePassword = (password) =>
  /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,16}$/.test(password);

export const validateName = (name) => name.length >= 20 && name.length <= 60;
