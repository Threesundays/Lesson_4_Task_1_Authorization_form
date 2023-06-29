import { useState } from 'react';
import styles from './app.module.css';

const sendData = (formData) => {
    console.log(formData);
};

export const App = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
        sendData({ email, password });
	};

	return (
		<div className={styles.app}>
			<form onSubmit={onSubmit}>
				<input
					type="email"
					name="email"
					value={email}
					placeholder="Email"
					onChange={({ target }) => setEmail(target.value)}
				/>
				<input
					type="password"
					name="password"
					value={password}
					placeholder="Pasword"
					onChange={({ target }) => setPassword(target.value)}
				/>
				<input
					type="password"
					name="password"
					value={password}
					placeholder="Repeat your password"
					onChange={({ target }) => setPassword(target.value)}
				/>
			<button type="submit">Send</button> 
			</form>
		</div>
	);
};
