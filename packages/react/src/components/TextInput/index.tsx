import { ComponentProps, forwardRef, ElementRef, ReactNode } from 'react'
import {
  Input,
  LeftContainer,
  Prefix,
  RightContainer,
  TextInputContainer,
} from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  leftButton?: ReactNode
  rightButton?: ReactNode
  error?: boolean
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  (
    { prefix, leftButton, rightButton, error, ...props }: TextInputProps,
    ref,
  ) => {
    return (
      <TextInputContainer error={error}>
        {!!leftButton && <LeftContainer>{leftButton}</LeftContainer>}

        {!!prefix && <Prefix>{prefix}</Prefix>}

        <Input ref={ref} {...props} />

        {!!rightButton && <RightContainer>{rightButton}</RightContainer>}
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
