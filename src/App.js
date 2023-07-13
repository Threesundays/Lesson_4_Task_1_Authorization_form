import { Button, Input } from './components';
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
				<form className={styles.form} onSubmit={onSubmit}>
					<div className={styles.formField}>
						<label className={styles.label}>Enter your email</label>
						<Input
							name="email"
							type="email"
							placeholder="Email"
							value={formData.email}
							onChange={({ target }) => setFormData({ ...formData, email: target.value })}
						/>
					</div>

					<div className={styles.formField}>
						<label className={styles.label}>Enter your password</label>
						<Input
							name="password"
							type="password"
							placeholder="Password"
							value={formData.password}
							onChange={({ target }) => setFormData({ ...formData, password: target.value })}
						/>
					</div>

					<div className={styles.formField}>
						<label className={styles.label}>Confirm your password</label>
						<Input
							name="confirmPassword"
							type="password"
							placeholder="Confirm password"
							value={formData.confirmPassword}
							onChange={({ target }) => setFormData({ ...formData, confirmPassword: target.value })}
						/>
					</div>
					<Button type="submit" text="Register" />
				</form>
			</div>
		</>
	);
};
