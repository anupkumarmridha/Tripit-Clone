export const validateFirstName = (firstName: string): string => {
    if (!firstName.trim()) return 'First name is required';
    if (firstName.length < 2) return 'First name must be at least 2 characters';
    return '';
  };
  
  export const validateLastName = (lastName: string): string => {
    if (!lastName.trim()) return 'Last name is required';
    if (lastName.length < 2) return 'Last name must be at least 2 characters';
    return '';
  };
  
  export const validateDOB = (dob: string): string => {
    if (!dob.trim()) return 'Date of birth is required';
    return '';
  };
  
  export const validateHomeCity = (homeCity: string): string => {
    if (!homeCity.trim()) return 'Home city is required';
    return '';
  };
  