import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { selectUIAppearance, getMeasure } from '../../global/helpers'

interface Props extends EnhancedWithTheme {
  size?: Measure
  shape?: Shape
  outline?: boolean
}

const getBorderRadius = (shape: Shape) => {
  switch (shape) {
    case 'pill':
      return '100rem'
    case 'squared':
      return '0rem'
    case 'rounded':
      return '0.5rem'
    default:
      return '0rem'
  }
}

const getFontSize = (measure: Measure) =>
  getMeasure(measure, ['0.8rem', '1rem', '1.25rem', '1.50rem'])

const getPadding = (measure: Measure) =>
  getMeasure(measure, [
    '0.375rem 1.4rem 0.375rem 1.4rem',
    '0.45rem 1.8rem 0.45rem 1.8rem',
    '0.65rem 2.2rem 0.65rem 2.2rem',
    '0.80rem 2.6rem 0.80rem 2.6rem',
  ])

const StyledButton = styled.button<Props>`
  background-color: ${props =>
    props.outline
      ? 'transparent'
      : selectUIAppearance(props.theme, props.appearance, 'light')};
  color: ${props => selectUIAppearance(props.theme, props.appearance, 'dark')};
  font-size: ${props => getFontSize(props.size!)};
  padding: ${props => getPadding(props.size!)};
  border-radius: ${props => getBorderRadius(props.shape!)};
  border: ${props =>
    `0.1rem solid ${selectUIAppearance(
      props.theme,
      props.appearance,
      props.outline ? 'basic' : 'light'
    )}`};

  font-weight: 500;
  line-height: 1.3;
  margin: 10px;
  display: relative;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  white-space: nowrap;
  justify-content: center;
  align-items: center;

  transition: all 150ms linear;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :hover {
    transition: all 150ms linear;
    opacity: 0.85;
  }

  :active {
    transition: all 150ms linear;
    opacity: 0.75;
  }

  :focus {
    outline: none;
  }
`

const Button: FunctionComponent<Props> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

Button.defaultProps = {
  appearance: 'default',
  size: 'md',
  shape: 'rounded',
  outline: false,
}

export default Button
