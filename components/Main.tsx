import {ContentItem} from "../styles/MainStyle";
import {FC} from "react";
import {useAppContext} from "../context/store";

const Main: FC = () => {
	const props = useAppContext()

	return (
		<main>
			<div>
				<ContentItem {...props}>i’m</ContentItem>
				<ContentItem {...props}>web-</ContentItem>
				<ContentItem {...props}>developer</ContentItem>
			</div>
		</main>
	);
};

export default Main;