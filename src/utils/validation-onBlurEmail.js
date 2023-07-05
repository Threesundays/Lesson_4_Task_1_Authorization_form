import { emailRegex } from '../constants';

export const validationOnBlurEmail = (email, setEmailError) => {
	let newError = null;

	if (!emailRegex.test(email)) {
		newError = 'Некорректный формат email';
	}
	setEmailError(newError);
};
