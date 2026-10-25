import type { Meta, StoryObj } from '@storybook/react';
import { ColorSwatchPicker } from './ColorSwatchPicker';

const meta: Meta<typeof ColorSwatchPicker> = {
  title: '02 - Spatial Audio & Vision/ColorSwatchPicker',
  component: ColorSwatchPicker,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    selectedColor: { control: 'color' },
    size: { control: { type: 'range', min: 24, max: 56, step: 4 } },
  },
  args: {
    selectedColor: '#7F77DD',
    size: 36,
  },
};

export default meta;
type Story = StoryObj<typeof ColorSwatchPicker>;

export const AirCanvasSwatches: Story = {};
