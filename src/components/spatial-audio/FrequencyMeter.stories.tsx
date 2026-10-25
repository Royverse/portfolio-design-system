import type { Meta, StoryObj } from '@storybook/react';
import { FrequencyMeter } from './FrequencyMeter';

const meta: Meta<typeof FrequencyMeter> = {
  title: '02 - Spatial Audio & Vision/FrequencyMeter',
  component: FrequencyMeter,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    activeFrequencyHz: { control: { type: 'range', min: 65, max: 2000, step: 10 } },
    noteName: { control: 'text' },
    barCount: { control: { type: 'range', min: 8, max: 32, step: 2 } },
    color: { control: 'color' },
    isSimulated: { control: 'boolean' },
  },
  args: {
    label: 'Acoustic Field Spectrum',
    activeFrequencyHz: 440.0,
    noteName: 'A4',
    barCount: 20,
    color: '#F97316',
    isSimulated: true,
  },
};

export default meta;
type Story = StoryObj<typeof FrequencyMeter>;

export const Default: Story = {};

export const LowBassSub: Story = {
  args: {
    label: 'Ondes Martenot Deep Sub',
    activeFrequencyHz: 65.4,
    noteName: 'C2',
    color: '#D97706',
  },
};
