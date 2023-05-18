import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  IconButton,
  Text,
  TextInput,
  TextInputProps,
} from '@skedle.me-ui/react'
import { Lock } from 'phosphor-react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Type your name',
    prefix: '',
    disabled: false,
    error: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    error: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Name</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithError: StoryObj<TextInputProps> = {
  args: {
    error: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'skedle.me/',
    placeholder: 'your-username',
  },
}

export const LeftButton: StoryObj<TextInputProps> = {
  args: {
    leftButton: (
      <IconButton variant={'tertiary'} size={'sm'}>
        <Lock weight="bold" />
      </IconButton>
    ),
  },
}

export const RightButton: StoryObj<TextInputProps> = {
  args: {
    rightButton: (
      <IconButton variant={'tertiary'} size={'sm'}>
        <Lock weight="bold" />
      </IconButton>
    ),
  },
}
