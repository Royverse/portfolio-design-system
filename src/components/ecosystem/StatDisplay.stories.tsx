import type { Meta, StoryObj } from '@storybook/react';
import { StatDisplay } from './StatDisplay';

const meta: Meta<typeof StatDisplay> = {
  title: '01 - Ecosystem Shared/StatDisplay',
  component: StatDisplay,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    unit: { control: 'text' },
    trend: { control: 'radio', options: ['up', 'down', 'neutral'] },
    delta: { control: 'text' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
  },
  args: {
    label: 'Synth Frequency',
    value: '440.0',
    unit: 'Hz',
    trend: 'up',
    delta: '+2.4%',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof StatDisplay>;

export const Default: Story = {};

export const FinancialTicker: Story = {
  args: {
    label: 'NVDA Sentiment Score',
    value: '84.2',
    unit: '/100',
    trend: 'up',
    delta: '+12.4%',
    size: 'lg',
  },
};

export const DeepUnderwaterSurvival: Story = {
  args: {
    label: 'Hull Pressure',
    value: '984.6',
    unit: 'kPa',
    trend: 'down',
    delta: '-1.8%',
    size: 'md',
  },
};
