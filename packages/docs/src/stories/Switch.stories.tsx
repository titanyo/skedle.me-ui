import type { StoryObj, Meta } from '@storybook/react'
import { Box, Switch, SwitchProps, Text } from '@skedle.me-ui/react'

export default {
  title: 'Form/Switch',
  component: Switch,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'rows',
            gap: '$2',
          }}
        >
          <Text size="sm">Accept</Text>
          {Story()}
          <Text size="sm">I do not accept</Text>
        </Box>
      )
    },
  ],
} as Meta<SwitchProps>

export const Default: StoryObj<SwitchProps> = {}
