

export const RegistrationInput = (props) => {
	return <input 
		name={props.name}
		type={props.type} 
		placeholder={props.placeholder}
		value={props.value}
		onChange={props.onChange}

	/>;
};
