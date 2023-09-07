import { ComponentProps, ReactNode } from 'react'
import {
  SelectContainer,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectScrollUpButton,
  SelectViewport,
  // ScrollAreaContainer,
  // ScrollAreaViewport,
  // ScrollAreaScrollbar,
  // ScrollAreaThumb,
} from './styles'
import { CaretDown, CaretUp } from 'phosphor-react'
import { theme } from '../../styles'

export interface SelectProps extends ComponentProps<typeof SelectContainer> {
  variant?: 'default' | 'embedded'
  placeholder: string
  error?: boolean
  children: ReactNode
}

export function Select({
  variant,
  placeholder,
  error,
  children,
  ...props
}: SelectProps) {
  return (
    <SelectContainer {...props}>
      <SelectTrigger variant={variant} error={error}>
        <SelectValue placeholder={placeholder} />
        <SelectIcon>
          <CaretDown
            size={variant === 'default' ? 20 : 15}
            color={theme.colors.gray400.value}
          />
        </SelectIcon>
      </SelectTrigger>

      <SelectPortal>
        <SelectContent
          side="bottom"
          position="popper"
          sideOffset={8}
          variant={variant}
        >
          <SelectScrollUpButton variant={variant}>
            <CaretUp
              size={variant === 'default' ? 20 : 15}
              color={theme.colors.gray400.value}
            />
          </SelectScrollUpButton>

          <SelectViewport>{children}</SelectViewport>

          {/* TODO: Se for colocar scroll futuramente, usar:
          <ScrollAreaContainer type="auto">
            <SelectScrollUpButton>
              <CaretUp size={20} color={theme.colors.gray400.value} />
            </SelectScrollUpButton>

            <SelectViewport asChild>
              <ScrollAreaViewport>{children}</ScrollAreaViewport>
            </SelectViewport>

            <ScrollAreaScrollbar orientation="vertical">
              <ScrollAreaThumb />
            </ScrollAreaScrollbar>
          </ScrollAreaContainer> */}
        </SelectContent>
      </SelectPortal>
    </SelectContainer>
  )
}

Select.displayName = 'Select'
