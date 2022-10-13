import styled from 'styled-components'

export const Btn = styled.button `
  padding: 14px 62px;
  border: 1px solid ${props => props.color.$light_grey};
  border-radius: 29px;
  background: none;
  cursor: pointer;
`

export const BtnText = styled.span `
  line-height: 100%;
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.color.$white};
`