import styled from 'styled-components'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'sucess'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'blue',
  secondary: 'yellow',
  warning: 'orange',
  danger: 'red',
  sucess: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  margin: 8px;
  border-radius: 4px;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['green-500']};

  /* ${(props) => {
    return `background-color: ${buttonVariants[props.variant]}`
  }} */
`
