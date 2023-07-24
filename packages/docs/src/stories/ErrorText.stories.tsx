import type { StoryObj, Meta } from '@storybook/react'
import { ErrorText, ErrorTextProps } from '@skedle.me-ui/react'

export default {
  title: 'Form/ErrorText',
  component: ErrorText,
  args: {
    children: 'The name field is required.',
    size: 'sm',
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ErrorTextProps>

export const Default: StoryObj<ErrorTextProps> = {}
