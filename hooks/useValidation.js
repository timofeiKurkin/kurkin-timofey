import {useEffect, useState} from "react";


const UseValidation = (value, validations) => {
	const [isEmpty, setEmpty] = useState(true)
	const [minLength, setMinLength] = useState(false)
	const [maxLength, setMaxLength] = useState(false)

	const [emailError, setEmailError] = useState(false)
	const [inputValid, setInputValid] = useState(false)

	const [isEmptyError, setEmptyError] = useState('')
	const [minLengthError, setMinLengthError] = useState('')
	const [maxLengthError, setMaxLengthError] = useState('')
	const [emailValidError, setEmailValidError] = useState('')


	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					if (value.length < validations[validation]) {
						setMinLength(true)
						setMinLengthError(`Minimum length - ${validations[validation]}`)
					} else {
						setMinLength(false)
						setMinLengthError('')
					}
					break

				case 'isEmpty':
					if (value) {
						setEmpty(false)
						setEmptyError('')
					} else {
						setEmpty(true)
						setEmptyError('The field cannot be empty')
					}
					break

				case 'maxLength':
					if (value.length > validations[validation]) {
						setMaxLength(true)
						setMaxLengthError(`Maximum length - ${validations[validation]}`)
					} else {
						setMaxLength(false)
						setMaxLengthError('')
					}
					break

				case 'isValid':
					const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					if (!re.test(String(value).toLowerCase())) {
						setEmailError(true)
						setEmailValidError('Invalid email address')
					} else {
						setEmailError(false)
						setEmailValidError('')
					}
					break
			}
		}
	}, [value])

	useEffect(() => {
		if (isEmpty || minLength || maxLength || emailError) { // и сюда
			setInputValid(false)
		} else {
			setInputValid(true)
		}
	}, [isEmpty, minLength, maxLength, emailError]) // все ошибки сюда

	return {
		isEmpty,
		minLength,
		maxLength,
		emailError,
		inputValid,

		minLengthError,
		maxLengthError,
		emailValidError,
		isEmptyError
	}
};

export default UseValidation;