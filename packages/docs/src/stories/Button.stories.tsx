import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@skedle.me-ui/react'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    full: false,
    disabled: false,
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
    full: {
      control: {
        type: 'boolean',
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
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Danger: StoryObj<ButtonProps> = {
  args: {
    variant: 'danger',
    children: 'Delete',
  },
}

export const Full: StoryObj<ButtonProps> = {
  args: {
    full: true,
  },
}

export const LeftIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <ArrowLeft weight="bold" />
        Back
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
}

export const RightIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next step
        <ArrowRight weight="bold" />
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
}
