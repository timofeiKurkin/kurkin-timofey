import {useState, useEffect} from "react";

interface sizeType {
	width: number,
	height: number
}

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<sizeType>({
		width: undefined,
		height: undefined,
	})

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = () => {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				})
			};

			window.addEventListener("resize", handleResize)

			handleResize()

			return () => window.removeEventListener("resize", handleResize)
		}
	}, [])

	return windowSize
};

export default useWindowSize;