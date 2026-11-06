function checkPassword(password) {
    return (
        password.length > 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^A-Za-z0-9\s]/.test(password) &&
        !/\s/.test(password)
    );
}

console.log(checkPassword("Hello123!"));
console.log(checkPassword("hello123"));