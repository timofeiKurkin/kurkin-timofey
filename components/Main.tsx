import {ContentItem} from "../styles/MainStyle";
import {FC} from "react";
import {mediaType} from "../types";

const Main: FC<{ props: mediaType }> = ({props}) => {
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