import MyForm from "./MyForm"
import Image from "next/image"
import svg from '../data/svg.json'
import {
	Contacts,
	ContactsEmail,
	ContactsTitle,
	ContactsWrapper,
	MainContacts, SocialContactsItem,
	SocialContactsList
} from "../styles/MyContactsStyle";

const MyContacts = ({props}) => {

	return (
		<MainContacts>
			<ContactsWrapper {...props}>
				<div className='form-contacts'>
					<MyForm props={props}/>
				</div>
				<Contacts>
					<div className='contacts-contacts__wrapper'>
						<ContactsTitle {...props}>
							<h2 className='title with-line'>
								contacts
							</h2>
						</ContactsTitle>
						<ContactsEmail {...props}>
							<p className='text'>
								email: ydepression83@gmail.com
							</p>
						</ContactsEmail>
						<div className='social-contacts'>
							<SocialContactsList>
								{
									svg.main.map(({id, link, path, width, height}) => (
										<SocialContactsItem key={id} {...props}>
											<a href={link} target={"_blank"} rel="noreferrer">
												<Image src={path} width={width} height={height} alt={'social__item'}/>
											</a>
										</SocialContactsItem>
									))
								}
							</SocialContactsList>
						</div>
					</div>
				</Contacts>
			</ContactsWrapper>
		</MainContacts>
	);
};

export default MyContacts;