export default function validatePass(password) {
  let errors = [];

  const checkSpaces = (password) => {
    const spaceRegex = /\s/;
    return spaceRegex.test(password);
  };

  const checkSpecialChars = (password) => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharRegex.test(password);
  };

  const checkMinLength = (password) => {
    return password.length >= 7;
  };

  if (!checkMinLength(password)) {
    errors.push("❌ Must be at least 7 characters long");
  }

  if (checkSpaces(password)) {
    errors.push("❌ No spaces allowed");
  }

  if (checkSpecialChars(password)) {
    errors.push("❌ No special characters allowed");
  }

  return {
    errors,
    validatePassword: errors.length === 0,
  };
}
