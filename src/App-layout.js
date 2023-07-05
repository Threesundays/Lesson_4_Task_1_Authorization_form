import styles from './app.module.css';
import { onSubmit, validationOnBlurConfirmPassword, validationOnBlurEmail } from './utils';

export const AppLayout = ({
	email,
	password,
	emailError,
	confirmPassword,
	setEmail,
	setPassword,
	setConfirmPassword,
	setEmailError,
	passwordError,
	setPasswordError,
}) => {
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	const handleConfirmPasswordChange = (event) => {
		setConfirmPassword(event.target.value);
	};
	const handleConfirmPasswordBlur = () => {
		validationOnBlurConfirmPassword(password, confirmPassword, setPasswordError);
	};
	const handleEmailBlur = () => {
		validationOnBlurEmail(email, setEmailError);
	};

	return (
		<div className={styles.app}>
			<form onSubmit={(event) => onSubmit({ event, email, password })} noValidate>
				{emailError && <div className={styles.errorLabel}>{emailError}</div>}
				{passwordError && <div className={styles.errorLabel}>{passwordError}</div>}
				<input
					name="email"
					type="email"
					value={email}
					placeholder="Email"
					onChange={handleEmailChange}
					onBlur={handleEmailBlur}
				/>
				<input
					name="password"
					type="password"
					value={password}
					placeholder="Password"
					onChange={handlePasswordChange}
				/>
				<input
					name="confirmPassword"
					type="password"
					value={confirmPassword}
					placeholder="Confirm password"
					onChange={handleConfirmPasswordChange}
					onBlur={handleConfirmPasswordBlur}
				/>
				<button type="submit" disabled={!!emailError}>
					Send
				</button>
			</form>
		</div>
	);
};
