import {useEffect, useState} from "react";
import {validationsType} from "../types";


const UseValidation = (value: string, validations: validationsType) => {
	const [isEmpty, setEmpty] = useState<boolean>(true)
	const [minLength, setMinLength] = useState<boolean>(false)
	const [maxLength, setMaxLength] = useState<boolean>(false)
	const [emailError, setEmailError] = useState<boolean>(false)
	const [nameError, setNameError] = useState<boolean>(false)

	const [inputValid, setInputValid] = useState<boolean>(false)

	const [isEmptyError, setEmptyError] = useState<string>('')
	const [minLengthError, setMinLengthError] = useState<string>('')
	const [maxLengthError, setMaxLengthError] = useState<string>('')
	const [emailValidError, setEmailValidError] = useState<string>('')
	const [nameValidError, setNameValidError] = useState<string>('')

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'nameValid':
					const reName = /^([^0-9]*)$/
					if(!reName.test(String(value).toLowerCase())) {
						setNameError(true)
						setNameValidError('Name cloud not be retrieved')
					} else {
						setNameError(false)
						setNameValidError('')
					}
					break

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
		if (isEmpty || minLength || maxLength || emailError || nameError) { // и сюда
			setInputValid(false)
		} else {
			setInputValid(true)
		}
	}, [isEmpty, minLength, maxLength, emailError, nameError]) // все ошибки сюда

	return {
		isEmpty,
		minLength,
		maxLength,
		emailError,
		inputValid,
		nameError,

		minLengthError,
		maxLengthError,
		emailValidError,
		nameValidError,
		isEmptyError
	}
};

export default UseValidation;