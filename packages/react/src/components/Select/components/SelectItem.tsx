import { ComponentProps, ReactNode } from 'react'
import {
  CustomText,
  SelectItem as SelectItemPrimitive,
  SelectItemText,
  SelectItemIndicator,
} from './styles'
import { Check } from 'phosphor-react'
import { theme } from '../../../styles'

export interface SelectItemProps
  extends ComponentProps<typeof SelectItemPrimitive> {
  text?: string
  children?: ReactNode
}

export function SelectItem({ text, children, ...props }: SelectItemProps) {
  return (
    <SelectItemPrimitive {...props}>
      <SelectItemText asChild>
        <span>
          {children}
          {text && <CustomText>{text}</CustomText>}
        </span>
      </SelectItemText>

      <SelectItemIndicator>
        <Check size={18} color={theme.colors.yellow500.value} />
      </SelectItemIndicator>
    </SelectItemPrimitive>
  )
}
