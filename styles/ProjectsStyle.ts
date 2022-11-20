import styled from 'styled-components'

export const ProjectsWrapper = styled.main`
  display: grid;
  @media ${props => props.media.phone375_639}, 
  		 ${props => props.media.phone640_767}, 
  		 ${props => props.media.pad768_1023}, 
  		 ${props => props.media.desktop1024_1279} {
    justify-content: center;
  }
  @media ${props => props.media.desktop1280_1439}, 
  		 ${props => props.media.desktop1440_1919}, 
  		 ${props => props.media.desktop1920} {
    justify-content: start;
  }
  @media ${props => props.media.phone375_639} {
    grid-template-columns: minmax(325px, 550px);
    grid-template-rows: repeat(3, minmax(200px, 270px));
    grid-row-gap: 40px;
  }
  @media ${props => props.media.phone640_767} {
    grid-template-columns: minmax(325px, 570px);
    grid-template-rows: repeat(3, minmax(200px, 270px));
    grid-row-gap: 40px;
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(325px, 580px);
    grid-template-rows: repeat(3, minmax(200px, 270px));
    grid-row-gap: 50px;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-template-columns: minmax(325px, 620px);
    grid-template-rows: repeat(3, minmax(200px, 270px));
    grid-row-gap: 50px;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, minmax(200px, 270px));
    grid-column-gap: 40px;
    grid-row-gap: 52px;
  }
  @media ${props => props.media.desktop1440_1919}, 
  		 ${props => props.media.desktop1920} {
    grid-template-columns: repeat(2, minmax(350px, 580px));
    grid-template-rows: repeat(2, minmax(200px, 270px));
    grid-column-gap: 158px;
    grid-row-gap: 74px;
  }
`

export const ProjectWrapper = styled.div`
  @media ${props => props.media.phone375_639}, 
  		 ${props => props.media.phone640_767}, 
  		 ${props => props.media.pad768_1023}, 
  		 ${props => props.media.desktop1024_1279}, 
  		 ${props => props.media.desktop1280_1439}, 
  		 ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  @media ${props => props.media.phone375_639} {
    padding: 30px 20px;
  }
  @media ${props => props.media.phone640_767}, 
  		 ${props => props.media.pad768_1023}, 
  		 ${props => props.media.desktop1024_1279} {
    padding: 30px;
  }
  @media ${props => props.media.desktop1280_1439}, 
  		 ${props => props.media.desktop1440_1919}, 
  		 ${props => props.media.desktop1920} {
    padding: 34px 132px 25px 22px;
  }
`

export const Project = styled.div `
  border: 1px solid ${props => props.color.$grey};
  border-radius: 11px;
`

export const ProjectTitle = styled.div `
  color: ${props => props.color.$light_grey};
  margin-bottom: 30px;
`

export const ProjectDescription = styled.div `
  color: ${props => props.color.$white};
  margin-bottom: 10px;
`

export const ProjectRepo = styled.div `
  height: 100%;
  display: flex;
  align-items: flex-end;
`

export const ProjectRepoWrapper = styled.a `
  color: ${props => props.color.$grey};
  transition: color ease-in .5s;
  cursor: pointer;

  &:hover {
    color: ${props => props.color.$light_grey};
  }

  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${props => props.color.$grey};
    bottom: 0;
    left: 0;
  }
`

export const ArrowSize = styled.p `
  display: inline-block;
  width: 17px;
  height: 18px;
  margin-left: 17px;
  fill: ${props => props.color.$white};
`