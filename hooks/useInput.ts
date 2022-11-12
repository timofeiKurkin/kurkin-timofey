import {useState} from "react";
import useValidation from "./useValidation";
import useLocalStorage from "./useLocalStorage";
import {validationsType} from "../types";


const UseInput = (initialValue: string, key: string, validations: validationsType) => {
	const [value, setValue] = useLocalStorage(key, initialValue)

	const [isDirty, setDirty] = useState(false)
	const formValid = useValidation(value, validations)


	const onChange = (e) => {
		setValue(e.target.value)
	}

	const onBlur = (e) => {
		setDirty(true)
	}

	return {
		value,
		onChange,
		onBlur,
		isDirty,
		...formValid
	}
};

export default UseInput;