import {useState} from "react"
import useInput from "../hooks/useInput";
import {
	Error,
	Form,
	FormWrapper,
	InputForm,
	InputWrapper,
	Success,
	TextareaForm,
	TextError
} from "../styles/MyFormStyle";
import {Btn, BtnText} from "../styles/ButtonStyle";


const MyForm = ({props}) => {

	const name = useInput('', 'name', {isEmpty: true, minLength: 2, maxLength: 15})
	const email = useInput('', 'email', {isEmpty: true, minLength: 3, isValid: true})
	const message = useInput('', 'message', {isEmpty: false, maxLength: 200})

	const [submit, setSubmit] = useState(false)

	const clearLocalStorage = (e) => {
		localStorage.clear()
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const data = `
			Name: ${name.value},  
			Email: ${email.value},  
			Message: ${message.value}
		`

		const endpoint = `https://api.telegram.org/botTOKEN/sendMessage?chat_id=CHAT_ID&parse_mode=html&text=${data}`

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'charset=utf-8',
			},
		}

		const response = await fetch(endpoint, options)

		const result = await response.json()

		if (result.ok) {
			setSubmit(true)
		}

		setTimeout(() => {
			setSubmit(false)
		}, 4000)
	}

	return (
		<FormWrapper>
			<Form action="components/MyForm"
				  {...props}
				  onSubmit={handleSubmit}
			>
				<InputWrapper {...props}>
					<InputForm
						{...props}
						type="text"
						name="name"
						className={(name.isDirty && name.isEmpty) ? "text-error" : "text"}
						onBlur={e => name.onBlur(e)}
						onChange={e => name.onChange(e)}
						placeholder="your name"
						value={name.value}
					/>
					<Error {...props}>
						{(name.isEmpty && name.isDirty) &&
							<TextError {...props}>{name.isEmptyError}</TextError>}

						{(name.isEmpty && name.minLength && name.isDirty) &&
							<TextError {...props}>{name.minLengthError}</TextError>}

						{(name.maxLength) &&
							<TextError {...props}>{name.maxLengthError}</TextError>}
					</Error>

				</InputWrapper>

				<InputWrapper {...props}>
					<InputForm
						{...props}
						type="text"
						name="email"
						className={(email.isDirty && email.isEmpty) ? "text-error" : "text"}
						onBlur={e => email.onBlur(e)}
						onChange={e => email.onChange(e)}
						placeholder="your email"
						value={email.value}
					/>
					<Error {...props}>
						{(email.isEmpty && email.isDirty) &&
							<TextError {...props}>{email.isEmptyError}</TextError>}

						{(email.isEmpty && email.minLength && email.isDirty) &&
							<TextError {...props}>{email.minLengthError}</TextError>}

						{(email.maxLength) &&
							<TextError {...props}>{email.maxLengthError}</TextError>}

						{(email.emailError && email.isDirty) &&
							<TextError {...props}>{email.emailValidError}</TextError>}
					</Error>
				</InputWrapper>

				<InputWrapper {...props}>
					<TextareaForm
						{...props}
						name="message"
						id="1"
						className={(message.isDirty && message.isEmpty) ? "text-error" : "text"}
						onBlur={e => message.onBlur(e)}
						onChange={e => message.onChange(e)}
						placeholder="tell us about your project"
						value={message.value}
					></TextareaForm>
					<Error {...props}>
						{(message.maxLength) &&
							<div className='form-contacts__textError'>{message.maxLengthError}</div>}
					</Error>
				</InputWrapper>
				<Btn
					{...props}
					type='submit'
					disabled={!name.inputValid || !email.inputValid || !message.inputValid}
					onClick={() => clearLocalStorage()}
				>
					<BtnText {...props}>
						submit
					</BtnText>
				</Btn>
			</Form>

			{submit ?
				<Success {...props} primary>Thanks for send</Success>
				:
				<Success {...props}>Thanks for send</Success>
			}
		</FormWrapper>
	);
};

export default MyForm;