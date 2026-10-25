import type { Meta, StoryObj } from '@storybook/react';
import { TrackingCameraDock } from './TrackingCameraDock';

const meta: Meta<typeof TrackingCameraDock> = {
  title: '02 - Spatial Audio & Vision/TrackingCameraDock',
  component: TrackingCameraDock,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    status: { control: 'radio', options: ['tracking', 'calibrating', 'idle', 'error'] },
    fps: { control: { type: 'range', min: 15, max: 120, step: 5 } },
    label: { control: 'text' },
    showSkeleton: { control: 'boolean' },
  },
  args: {
    status: 'tracking',
    fps: 60,
    label: 'MediaPipe 1-Euro Kinematics',
    showSkeleton: true,
  },
};

export default meta;
type Story = StoryObj<typeof TrackingCameraDock>;

export const Active60fpsTracking: Story = {};

export const CalibratingState: Story = {
  args: {
    status: 'calibrating',
    label: 'Calibrating Camera Depth...',
  },
};
