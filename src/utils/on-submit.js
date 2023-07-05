import { sendFormData } from './send-form-data';

export const onSubmit = ({ event, email, password }) => {
	event.preventDefault();
	sendFormData({ email, password });
};
