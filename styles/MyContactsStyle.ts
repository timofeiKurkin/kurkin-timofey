import styled from 'styled-components'

export const MainContacts = styled.main`
  height: 100%;
`

export const ContactsWrapper = styled.div`
  display: grid;
  @media ${props => props.media.phone375_639}, 
  		 ${props => props.media.phone640_767}, 
  		 ${props => props.media.pad768_1023}, 
  		 ${props => props.media.desktop1024_1279}, 
  		 ${props => props.media.desktop1280_1439}, 
  		 ${props => props.media.desktop1440_1919}, 
  		 ${props => props.media.desktop1920} {
    grid-template-rows: minmax(320px, auto) minmax(130px, auto);
  }
  @media ${props => props.media.phone375_639} {
    grid-template-columns: minmax(320px, 350px);
    grid-row-gap: 120px;
  }
  @media ${props => props.media.phone640_767} {
    grid-template-columns: minmax(320px, 480px);
    grid-row-gap: 120px;
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(320px, 650px);
    grid-row-gap: 160px;
  }
  @media ${props => props.media.desktop1024_1279}, 
  		 ${props => props.media.desktop1280_1439} {
    grid-template-columns: minmax(320px, auto);
    grid-row-gap: 120px;
  }
  @media ${props => props.media.desktop1440_1919}, 
  		 ${props => props.media.desktop1920} {
    grid-template-columns: minmax(500px, auto);
    grid-row-gap: 110px;
  }
`

export const Contacts = styled.div `
  align-self: flex-end;
`

export const ContactsTitle = styled.div `
  color: ${props => props.color.$light_grey};
  margin-bottom: 25px;
`

export const ContactsEmail = styled.div `
  color: ${props => props.color.$white};
  margin-bottom: 34px;
`

export const SocialContactsList = styled.div `
  display: flex;
  max-width: 240px;
  justify-content: space-between;
`

export const SocialContactsItem = styled.div `
  &:hover {
    color: ${props => props.color.$light_grey};
  }
`