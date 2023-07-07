import { useState, useRef } from 'react';
import { AppLayout } from './App-layout';

export const App = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const submitButtonRef = useRef(null);

	return (
		<AppLayout
			email={email}
			setEmail={setEmail}
			password={password}
			setPassword={setPassword}
			confirmPassword={confirmPassword}
			setConfirmPassword={setConfirmPassword}
			emailError={emailError}
			setEmailError={setEmailError}
			passwordError={passwordError}
			setPasswordError={setPasswordError}
			submitButtonRef = {submitButtonRef}
		/>
	);
};
