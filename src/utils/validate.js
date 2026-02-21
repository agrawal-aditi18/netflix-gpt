export const checkValidData = (email, password, name, mobileNo) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);


    if(!isEmailValid) return "Your Email Id is invalid!";
    if(!isPasswordValid) return "Your Password is invalid!";

        if (name !== undefined && mobileNo !== undefined) {

        const isFullNameValid =
          /^[a-zA-Z\s'-]{1,25}$/.test(name);

        const isMobileNumberValid =
          /^\+?[1-9]\d{1,14}$/.test(mobileNo);

        if (!isFullNameValid) return "Your Name is invalid!";
        if (!isMobileNumberValid) return "Your Mobile Number is invalid!";
    }

    return null;


}