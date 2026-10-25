import type { Meta, StoryObj } from '@storybook/react';
import { ProPreviewBadge } from './ProPreviewBadge';

const meta: Meta<typeof ProPreviewBadge> = {
  title: '02 - Spatial Audio & Vision/ProPreviewBadge',
  component: ProPreviewBadge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    secondsLeft: { control: { type: 'range', min: 0, max: 60, step: 1 } },
    isPro: { control: 'boolean' },
  },
  args: {
    secondsLeft: 42,
    isPro: false,
  },
};

export default meta;
type Story = StoryObj<typeof ProPreviewBadge>;

export const ActivePreview: Story = {};

export const ExpiringSoon: Story = {
  args: {
    secondsLeft: 8,
  },
};

export const ProUnlockedBadge: Story = {
  args: {
    isPro: true,
  },
};
