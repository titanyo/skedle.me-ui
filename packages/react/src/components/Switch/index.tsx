import { ComponentProps } from 'react'
import { SwitchContainer, SwitchThumb } from './styles'

export interface SwitchProps extends ComponentProps<typeof SwitchThumb> {}

export function Switch(props: SwitchProps) {
  return (
    <SwitchContainer>
      <SwitchThumb {...props} />
    </SwitchContainer>
  )
}

Switch.displayName = 'Switch'
