export function validatePass(password) {
  let errors = [];

  const checkSpaces = (password) => {
    const spaceRegex = /\s/;
    return spaceRegex.test(password);
  };

  const checkMinLength = (password) => {
    return password.length >= 7;
  };

  const checkSpecialChars = (password) => {
    const specialCharRegex = /[^A-Za-z0-9]/;
    return specialCharRegex.test(password);
  };

  if (checkSpaces(password)) {
    errors.push('❌ No spaces allowed');
  }

  if (!checkMinLength(password)) {
    errors.push('❌ Must be at least 7 characters long');
  }

  if (!checkSpecialChars(password)) {
    errors.push('❌ Must have at least 1 special character');
  }

  return {
    errors,
    validatePassword: errors.length === 0,
  };
}
