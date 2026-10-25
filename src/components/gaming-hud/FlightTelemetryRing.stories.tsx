import type { Meta, StoryObj } from '@storybook/react';
import { FlightTelemetryRing } from './FlightTelemetryRing';

const meta: Meta<typeof FlightTelemetryRing> = {
  title: '05 - Gaming & Survival HUD/FlightTelemetryRing',
  component: FlightTelemetryRing,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    speedMach: { control: { type: 'range', min: 0.5, max: 5.0, step: 0.1 } },
    altitudeMeters: { control: { type: 'range', min: 100, max: 10000, step: 100 } },
    boostActive: { control: 'boolean' },
    ringsCleared: { control: 'number' },
  },
  args: {
    speedMach: 2.8,
    altitudeMeters: 2400,
    boostActive: true,
    ringsCleared: 19,
  },
};

export default meta;
type Story = StoryObj<typeof FlightTelemetryRing>;

export const SupersonicFlight: Story = {};

export const GlidingDescent: Story = {
  args: {
    speedMach: 0.9,
    altitudeMeters: 450,
    boostActive: false,
    ringsCleared: 32,
  },
};
