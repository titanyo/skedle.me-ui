import type { StoryObj, Meta } from '@storybook/react'
import { IconButton, IconButtonProps } from '@skedle.me-ui/react'
import { Plus, Trash } from 'phosphor-react'

export default {
  title: 'Form/IconButton',
  component: IconButton,
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    children: <Plus weight="bold" />,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<IconButtonProps>

export const Primary: StoryObj<IconButtonProps> = {}

export const Secondary: StoryObj<IconButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<IconButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}

export const Danger: StoryObj<IconButtonProps> = {
  args: {
    variant: 'danger',
    children: <Trash weight="bold" />,
  },
}
