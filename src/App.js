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
						onChange={({ target }) => setFormData({ ...formData, email: target.value })}
					/>
					<RegistrationInput
						name="password"
						type="password"
						placeholder="Password"
						value={formData.password}
						onChange={({ target }) => setFormData({ ...formData, password: target.value })}
					/>
					<RegistrationInput
						name="confirmPassword"
						type="password"
						placeholder="Confirm password"
						value={formData.confirmPassword}
						onChange={({ target }) => setFormData({ ...formData, confirmPassword: target.value })}
					/>
					<Button type="submit" text="Register" />
				</form>
			</div>
		</>
	);
};
