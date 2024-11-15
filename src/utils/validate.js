export const checkValidateData = (email, password) => {
    
    const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    // Regex for password validation (at least 8 characters, one letter and one number)
    const validatePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    
    if (!validateEmail) return "Email is not valid";
    if (!validatePassword) return "Password is not valid";
    return null;
};
