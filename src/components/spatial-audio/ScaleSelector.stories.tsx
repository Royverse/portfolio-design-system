import type { Meta, StoryObj } from '@storybook/react';
import { ScaleSelector } from './ScaleSelector';

const meta: Meta<typeof ScaleSelector> = {
  title: '02 - Spatial Audio & Vision/ScaleSelector',
  component: ScaleSelector,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    selectedScale: { control: 'text' },
    isProUnlocked: { control: 'boolean' },
  },
  args: {
    selectedScale: 'dorian',
    isProUnlocked: true,
  },
};

export default meta;
type Story = StoryObj<typeof ScaleSelector>;

export const ProUnlocked: Story = {};

export const FreeTierLocked: Story = {
  args: {
    isProUnlocked: false,
    selectedScale: 'chromatic',
  },
};
