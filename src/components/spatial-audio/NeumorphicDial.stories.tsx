import type { Meta, StoryObj } from '@storybook/react';
import { NeumorphicDial } from './NeumorphicDial';

const meta: Meta<typeof NeumorphicDial> = {
  title: '02 - Spatial Audio & Vision/NeumorphicDial',
  component: NeumorphicDial,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    value: { control: { type: 'range', min: 0, max: 100 } },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    unit: { control: 'text' },
    color: { control: 'color' },
    size: { control: { type: 'range', min: 80, max: 200, step: 10 } },
  },
  args: {
    label: 'Oscillator Resonance',
    value: 65,
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
    color: '#F97316',
    size: 130,
  },
};

export default meta;
type Story = StoryObj<typeof NeumorphicDial>;

export const Default: Story = {};

export const GlassRodFriction: Story = {
  args: {
    label: 'Cristal Baschet Friction',
    value: 82,
    color: '#D97706',
    unit: 'μ',
  },
};

export const MPEBrightnessCutoff: Story = {
  args: {
    label: 'MPE Brightness (CC 74)',
    value: 94,
    color: '#3B82F6',
    unit: 'lvl',
  },
};
