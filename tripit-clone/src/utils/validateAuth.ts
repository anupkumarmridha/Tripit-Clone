export const validateEmail = (email: string) => {
    if (!email) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Invalid email address';
    return '';
  };
  
  export const validatePassword = (password: string) => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters long';
    return '';
  };
  
  export const validateCity = (homeCity: string) => {
    if (!homeCity) return 'Please select a home city';
    return '';
  };
  