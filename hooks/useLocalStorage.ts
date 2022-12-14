import {useEffect, useState} from "react";

const UseLocalStorage = (key: string, initialValue: string) => {
	const getStorageValue = (key, initialValue) => {
		if(typeof window !== 'undefined') {
			const value = localStorage.getItem(key)
			const parse: string = JSON.parse(value)
			return parse || initialValue
		}
	}

	const [value, setValue] = useState(() => {
		return getStorageValue(key, initialValue)
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
};

export default UseLocalStorage;