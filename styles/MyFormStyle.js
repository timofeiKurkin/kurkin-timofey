import styled from 'styled-components'

export const FormWrapper = styled.div `        
  max-width: 100%;
`

export const Form = styled.form `
  width: 100%;
  color: ${props => props.color.$grey};
`

export const InputForm = styled.input`
  padding-left: 15px;
  padding-bottom: 6px;
  width: 100%;
  display: block;
  background: none;
  border: none;
  overflow: hidden;
  border-bottom: 1px solid ${props => props.color.$light_grey};

  color: ${props => props.color.$white};

  resize: none;

  &:active, &:hover, &:focus {
    outline: 0;
    outline-offset: 0;
  }

  @media ${props => props.media.phone375_639}, 
  		 ${props => props.media.phone640_767} {
    margin-bottom: 30px;
  }
  @media ${props => props.media.desktop1280_1439}, 
  		 ${props => props.media.desktop1440_1919}, 
  		 ${props => props.media.desktop1920} {
    margin-right: 30px;
  }
  @media ${props => props.media.phone375_639} {
    max-width: 350px;
  }
  @media ${props => props.media.phone640_767} {
    max-width: 480px;
  }
  @media ${props => props.media.pad768_1023} {
    max-width: 650px;
    margin-bottom: 55px;
  }
  @media ${props => props.media.desktop1024_1279} {
    max-width: 480px;
    margin-right: 20px;
    margin-bottom: 40px;
  }
  @media ${props => props.media.desktop1280_1439} {
    max-width: 390px;
    margin-bottom: 35px;
  }
  @media ${props => props.media.desktop1440_1919}, 
  		 ${props => props.media.desktop1920} {
    max-width: 500px;
    margin-bottom: 35px;
  }
`
export const TextareaForm = styled.textarea`
  padding-left: 15px;
  padding-bottom: 95px;
  width: 100%;
  display: block;
  background: none;
  border: none;
  overflow: hidden;
  border-bottom: 1px solid ${props => props.color.$light_grey};

  color: ${props => props.color.$white};

  resize: none;

  &:active, &:hover, &:focus {
    outline: 0;
    outline-offset: 0;
  }

  @media ${props => props.media.phone375_639}, 
  		 ${props => props.media.phone640_767} {
    margin-bottom: 40px;
  }
  @media ${props => props.media.desktop1280_1439}, 
  		 ${props => props.media.desktop1440_1919}, 
  		 ${props => props.media.desktop1920} {
    margin-right: 30px;
  }
  @media ${props => props.media.phone375_639} {
    max-width: 350px;
  }
  @media ${props => props.media.phone640_767} {
    max-width: 480px;
  }
  @media ${props => props.media.pad768_1023} {
    max-width: 650px;
    margin-bottom: 55px;
  }
  @media ${props => props.media.desktop1024_1279} {
    max-width: 480px;
    margin-right: 20px;
    margin-bottom: 30px;
  }
  @media ${props => props.media.desktop1280_1439} {
    max-width: 390px;
    margin-bottom: 35px;
  }
  @media ${props => props.media.desktop1440_1919}, 
  		 ${props => props.media.desktop1920} {
    max-width: 500px;
    margin-bottom: 35px;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  @media ${props => props.media.phone375_639}, 
  		 ${props => props.media.phone640_767}, 
  		 ${props => props.media.pad768_1023} {
    flex-direction: column-reverse;
  }
  @media ${props => props.media.desktop1024_1279}, 
  		 ${props => props.media.desktop1280_1439}, 
  		 ${props => props.media.desktop1440_1919}, 
  		 ${props => props.media.desktop1920} {
    flex-direction: row;
  }
`

export const Error = styled.div`
  transition: all .3s ease;
  @media ${props => props.media.phone375_639}, 
  		 ${props => props.media.phone640_767}, 
  		 ${props => props.media.pad768_1023}, 
  		 ${props => props.media.desktop1024_1279}, 
  		 ${props => props.media.desktop1280_1439}, 
  		 ${props => props.media.desktop1440_1919}, 
  		 ${props => props.media.desktop1920} {
    margin-bottom: 16px;
    margin-left: 10px;
  }
  @media ${props => props.media.pad768_1023}, 
  		 ${props => props.media.desktop1024_1279}, 
  		 ${props => props.media.desktop1280_1439}, 
  		 ${props => props.media.desktop1440_1919}, 
  		 ${props => props.media.desktop1920} {
    display: flex;
  }
  @media ${props => props.media.desktop1280_1439}, 
  		 ${props => props.media.desktop1440_1919}, 
  		 ${props => props.media.desktop1920} {
    padding-top: 14px;
  }
`

export const TextError = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.color.$text_error};
  
  @media ${props => props.media.phone375_639}, 
  		 ${props => props.media.phone640_767} {
    margin-bottom: 6px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media ${props => props.media.pad768_1023}, 
  		 ${props => props.media.desktop1280_1439}, 
  		 ${props => props.media.desktop1440_1919},
  		 ${props => props.media.desktop1920} {
    margin-right: 25px;
    &:last-child {
      margin-right: 0;
    }
  }
  @media ${props => props.media.desktop1024_1279} {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
`

export const Success = styled.div`
  font-weight: 500;
  color: ${props => props.color.$green};
  margin: 20px 0 0 5px;
  transition: opacity .5s ease;
  opacity: ${props => props.primary ? 1 : 0};
`