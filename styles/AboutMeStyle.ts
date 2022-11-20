import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279} {
    grid-template-columns: minmax(310px, auto);
  }

  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: 474px minmax(200px, 735px);
    grid-column-gap: 70px;
  }

  @media ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    grid-template-columns: 474px minmax(200px, 750px);
    grid-column-gap: 120px;
  }
`

export const Content = styled.div`
  display: grid;
  
  @media ${props => props.media.phone375_639} {
	margin-top: 30px;
  }
  
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023} {
    grid-row-gap: 50px;
  }
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, minmax(1fr, auto));
    grid-row-gap: 50px;

    grid-template-areas:
            'about-me'
            'skills'
            'english'
            'education'
            'work';
  }

  @media ${props => props.media.pad768_1023} {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(4, minmax(1fr, auto));
    grid-column-gap: 50px;

    grid-template-areas:
                'about-me about-me'
                'skills skills'
                'english education'
                'work work';
  }

  @media ${props => props.media.desktop1024_1279} {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(3, minmax(1fr, auto));
    grid-column-gap: 60px;
    grid-row-gap: 55px;

    grid-template-areas:
                'about-me skills'
                'education english'
                'work work';
  }

  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, minmax(1fr, auto));
    grid-column-gap: 102px;
    grid-row-gap: 50px;

    grid-template-areas:
                'about-me about-me'
                'skills skills'
                'english education'
                'work work';
  }

  @media ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, minmax(1fr, auto));
    grid-template-areas:
                'about-me about-me'
                'skills skills'
                'english education'
                'work work';
    grid-column-gap: 102px;
    grid-row-gap: 40px;
  }
`

export const About = styled.div`grid-area: about-me;`

export const Skills = styled.div`grid-area: skills;`

export const English = styled.div`grid-area: english;`

export const Education = styled.div`grid-area: education;`

export const Work = styled.div`grid-area: work;`

export const EducationDescription = styled.div`margin-bottom: 7px;`

export const Title = styled.div`
  margin-bottom: 15px;
`

export const ImageAboutMe = styled.div`
  position: relative;
  width: 474px;
  height: 316px;
  
  @media ${props => props.media.phone375_639} {
	width: 326px;
	height: 235px;
  }
  
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023} {
	margin: 0 auto;
  }
  
  @media ${props => props.media.phone640_767}, ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439} {
    margin-bottom: 40px;
  }
`

export const Item = styled.li`
  display: grid;
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439}, ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    grid-template-columns: 120px 1fr;
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: 170px 1fr;
  }
`

export const SkillsList = styled.ul`
  display: grid;
  grid-template-rows: repeat(6, minmax(23px, auto));
  grid-row-gap: 10px;
`