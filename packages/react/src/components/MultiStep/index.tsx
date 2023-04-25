import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
  stepLabel?: string
  ofLabel?: string
}

export function MultiStep({
  size,
  currentStep = 1,
  stepLabel = 'Step',
  ofLabel = 'of',
}: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        {stepLabel} {currentStep} {ofLabel} {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
