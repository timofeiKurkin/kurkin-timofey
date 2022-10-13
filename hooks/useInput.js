import {useEffect, useState} from "react";
import useValidation from "./useValidation";
import useLocalStorage from "./useLocalStorage";


const UseInput = (initialValue, key, validations) => {
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