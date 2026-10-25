import type { Meta, StoryObj } from '@storybook/react';
import { SurvivalGauge } from './SurvivalGauge';

const meta: Meta<typeof SurvivalGauge> = {
  title: '05 - Gaming & Survival HUD/SurvivalGauge',
  component: SurvivalGauge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    unit: { control: 'text' },
    criticalThreshold: { control: 'number' },
    color: { control: 'color' },
  },
  args: {
    label: 'OXYGEN RESERVES',
    value: 68,
    unit: '%',
    criticalThreshold: 25,
    color: '#38BDF8',
  },
};

export default meta;
type Story = StoryObj<typeof SurvivalGauge>;

export const NormalState: Story = {};

export const CriticalWarning: Story = {
  args: {
    label: 'OXYGEN RESERVES',
    value: 14,
    criticalThreshold: 25,
    color: '#38BDF8',
  },
};

export const HullIntegrity: Story = {
  args: {
    label: 'HULL INTEGRITY',
    value: 94,
    unit: '%',
    color: '#10B981',
  },
};
