import styled from 'styled-components'

export const ContentItem = styled.div `
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: ${props => props.color.$white};

  &:last-child {
    margin: 0;
  }

  @media ${props => props.media.phone375_639} {
    font-size: 48px;
    margin-bottom: 8px;
    line-height: 110%;
  }
  @media ${props => props.media.phone640_767} {
    font-size: 89px;
    margin-bottom: 0;
    line-height: 110%;
  }
  @media ${props => props.media.pad768_1023}, 
	${props => props.media.desktop1024_1279}, 
	${props => props.media.desktop1280_1439},
    ${props => props.media.desktop1440_1919}
  {
    font-size: 100px;
    margin-bottom: 0;
    line-height: 120%;
  }
  
  @media ${props => props.media.desktop1920} {
    font-size: 120px;
    line-height: 130%;
  }
`