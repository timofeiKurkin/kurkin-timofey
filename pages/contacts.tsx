import MyContacts from "../components/MyContacts";
import {NextPage} from "next";
import {mediaType} from "../types";

const Contacts: NextPage <{media: mediaType }> = ({media}) => {
	return (
		<MyContacts props={media}/>
	);
};

export default Contacts;