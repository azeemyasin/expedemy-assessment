import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './ButtonVariants'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  args: {
    label: '',
    variant: 'primary',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
}
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { variant: 'primary', label: 'Enroll' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', label: 'Add to Wishlist', iconSrc: '/icons/heart.svg' },
}

export const Google: Story = {
  args: { variant: 'google', label: 'Sign up with Google', iconSrc: '/icons/google.svg' },
}

export const Microsoft: Story = {
  args: { variant: 'microsoft', label: 'Sign up with Microsoft', iconSrc: '/icons/microsoft.svg' },
}

export const Instructor: Story = {
  args: { variant: 'instructor', label: 'Become an Instructor' },
}

export const Cart: Story = {
  args: { variant: 'cart', label: 'Cart', cartBadge: 1 },
}

export const ArrowIcon: Story = {
  args: { variant: 'icon', iconSrc: '/icons/arrow-right.svg', 'aria-label': 'Continue' } as any,
}
