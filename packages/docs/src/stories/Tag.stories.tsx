import type { StoryObj, Meta } from '@storybook/react'
import { Tag, TagProps } from '@skedle.me-ui/react'

export default {
  title: 'Data display/Tag',
  component: Tag,
  args: {
    children: 'LABEL',
    size: 'md',
    disabled: false,
  },
  argTypes: {
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
  },
} as Meta<TagProps>

export const Default: StoryObj<TagProps> = {}

export const Disabled: StoryObj<TagProps> = {
  args: {
    disabled: true,
  },
}
