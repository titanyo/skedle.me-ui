import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Select,
  SelectProps,
  SelectItem,
  Text,
  TextInput,
} from '@skedle.me-ui/react'

export default {
  title: 'Form/Select',
  component: Select,
  args: {
    placeholder: 'Select a country...',
    variant: 'default',
    disabled: false,
    error: false,
    children: (
      <>
        <SelectItem value="+55" text="🇧🇷 Brazil (+55)" />
        <SelectItem value="+1" text="🇺🇸 United States (+1)" />
        <SelectItem value="+33" text="🇫🇷 France (+33)" />
        <SelectItem value="+49" text="🇩🇪 Germany (+49)" />
        <SelectItem value="+81" text="🇯🇵 Japan (+81)" />
        <SelectItem value="+7" text="🇷🇺 Russia (+7)" />
        <SelectItem value="+86" text="🇨🇳 China (+86)" />
        <SelectItem value="+39" text="🇮🇹 Italy (+39)" />
        <SelectItem value="+34" text="🇪🇸 Spain (+34)" />
        <SelectItem value="+52" text="🇲🇽 Mexico (+52)" />
      </>
    ),
  },
  argTypes: {
    variant: {
      options: ['default', 'embedded'],
      control: {
        type: 'inline-radio',
      },
    },
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
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story, params) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Country</Text>
          {params.args.variant === 'default' ? (
            Story()
          ) : (
            <TextInput leftButton={Story()} />
          )}
        </Box>
      )
    },
  ],
} as Meta<SelectProps>

export const Default: StoryObj<SelectProps> = {}

export const Disabled: StoryObj<SelectProps> = {
  args: {
    disabled: true,
  },
}

export const WithError: StoryObj<SelectProps> = {
  args: {
    error: true,
  },
}

export const Embedded: StoryObj<SelectProps> = {
  args: {
    variant: 'embedded',
  },
}
