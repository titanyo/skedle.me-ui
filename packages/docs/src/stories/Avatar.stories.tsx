import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@skedle.me-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/glasses_businessman_people_male_man_avatar_blonde-512.png',
    alt: 'Avatar',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
