import type { Meta, StoryObj } from '@storybook/react';
import { StemRecordButton } from './StemRecordButton';

const meta: Meta<typeof StemRecordButton> = {
  title: '02 - Spatial Audio & Vision/StemRecordButton',
  component: StemRecordButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isRecording: { control: 'boolean' },
    formatLabel: { control: 'text' },
  },
  args: {
    isRecording: false,
    formatLabel: '32-Bit Float WAV + MIDI',
  },
};

export default meta;
type Story = StoryObj<typeof StemRecordButton>;

export const IdleState: Story = {};

export const ActiveRecording: Story = {
  args: {
    isRecording: true,
  },
};
