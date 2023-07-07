import type { StoryObj, Meta } from '@storybook/react'
import { Text, Popover, PopoverProps, Button } from '@skedle.me-ui/react'

export default {
  title: 'Data display/Popover',
  component: Popover,
  args: {
    size: 'md',
    side: 'right',
    sideOffset: 5,
    trigger: <Button full>Open popover</Button>,
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
        <div
          style={{
            display: 'flex',
            flex: '1',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'calc(100vh - 35px)',
          }}
        >
          <div>
            <Story />
          </div>
        </div>
      )
    },
  ],
} as Meta<PopoverProps>

export const Default: StoryObj<PopoverProps> = {}
