import type { Meta, StoryObj } from '@storybook/react';
import { SoloMapToggle } from './SoloMapToggle';

const meta: Meta<typeof SoloMapToggle> = {
  title: '02 - Spatial Audio & Vision/SoloMapToggle',
  component: SoloMapToggle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    axisId: { control: 'text' },
    axisLabel: { control: 'text' },
    channel: { control: 'number' },
    ccNumber: { control: 'number' },
    isSoloed: { control: 'boolean' },
    value: { control: { type: 'range', min: 0, max: 127 } },
  },
  args: {
    axisId: 'RH_Y',
    axisLabel: 'Right Hand Y (Cutoff Sweep)',
    channel: 1,
    ccNumber: 74,
    isSoloed: false,
    value: 92,
  },
};

export default meta;
type Story = StoryObj<typeof SoloMapToggle>;

export const Default: Story = {};

export const ActiveSoloMode: Story = {
  args: {
    isSoloed: true,
    value: 120,
  },
};
