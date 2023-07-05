export const validationOnBlurConfirmPassword = (password, confirmPassword, setError) => {
	let newError = null;

	if (password !== confirmPassword) {
		newError = 'Введенный пароль не совпадает';
	}
	setError(newError);
};
