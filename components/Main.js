import {ContentItem} from "../styles/MainStyle";

const Main = ({props}) => {
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