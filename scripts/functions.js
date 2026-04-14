function getRandomInt(min, max) {
    const min = Math.ceil(min);
    const max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const inputStatuses = {
    correct: 0,
    emptyInput: -1,
    passwordTooShort: -2,
};

function valiateInput(inputValue) {
    const inputSafe = inputValue.trim();

    if (inputSafe === '') {
        return inputErrors.emptyInput;
    } else if (inputSafe.length < 8) {
        return inputErrors.passwordTooShort;
    } else {
        return inputErrors.correct;
    }
};