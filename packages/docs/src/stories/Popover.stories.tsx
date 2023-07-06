import type { StoryObj, Meta } from '@storybook/react'
import {
  Text,
  PopoverContainer,
  PopoverContent,
  PopoverContentProps,
  PopoverTrigger,
  Button,
} from '@skedle.me-ui/react'

export default {
  title: 'Surfaces/Popover',
  component: PopoverContent,
  args: {
    size: 'md',
    side: 'right',
    sideOffset: 5,
    children: <Text>Popover content</Text>,
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
    side: {
      options: ['top', 'bottom', 'right', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
    sideOffset: {
      options: [5, 10, 15, 20, 25, 30],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <PopoverContainer>
          <PopoverTrigger>
            <Button>Open popover</Button>
          </PopoverTrigger>

          <Story />
        </PopoverContainer>
      )
    },
  ],
} as Meta<PopoverContentProps>

export const Default: StoryObj<PopoverContentProps> = {}
