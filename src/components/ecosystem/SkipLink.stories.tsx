import type { Meta, StoryObj } from '@storybook/react';
import { SkipLink } from './SkipLink';

const meta: Meta<typeof SkipLink> = {
  title: '01 - Ecosystem Shared/SkipLink',
  component: SkipLink,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    href: { control: 'text' },
    color: { control: 'color' },
  },
  args: {
    label: 'Skip to main content',
    href: '#main-content',
    color: '#06B6D4',
  },
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {};
