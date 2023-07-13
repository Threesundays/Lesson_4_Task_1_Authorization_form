import { Button, RegistrationInput } from './components';
import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const onSubmit = (event) => {
		event.preventDefault();
		const { email, password } = formData;
		const submitData = { email, password };
		console.log(submitData);
	};

	return (
		<>
			<div className={styles.app}>
				<form onSubmit={onSubmit}>
					<RegistrationInput
						name="email"
						type="email"
						placeholder="Email"
						value={formData.email}
						onChange={(event) => setFormData({ ...formData, email: event.target.value })}
					/>
					<RegistrationInput
						name="password"
						type="password"
						placeholder="Password"
						value={formData.password}
						onChange={(event) => setFormData({ ...formData, password: event.target.value })}
					/>
					<RegistrationInput
						name="confirmPassword"
						type="password"
						placeholder="Confirm password"
						value={formData.confirmPassword}
						onChange={(event) => setFormData({ ...formData, confirmPassword: event.target.value })}
					/>
					<Button type="submit" text="Register" />
				</form>
			</div>
		</>
	);
};
