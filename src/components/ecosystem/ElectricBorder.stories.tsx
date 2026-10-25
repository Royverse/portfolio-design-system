import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ElectricBorder } from './ElectricBorder';

const meta: Meta<typeof ElectricBorder> = {
  title: '01 - Ecosystem Shared/ElectricBorder',
  component: ElectricBorder,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: { control: 'color', description: 'Electric neon stroke color' },
    speed: { control: { type: 'range', min: 0.2, max: 4, step: 0.1 }, description: 'Circulating velocity' },
    borderRadius: { control: { type: 'range', min: 0, max: 32, step: 2 } },
    glowIntensity: { control: { type: 'range', min: 0, max: 2, step: 0.1 } },
  },
  args: {
    color: '#06B6D4',
    speed: 1.2,
    borderRadius: 16,
    glowIntensity: 1.0,
  },
};

export default meta;
type Story = StoryObj<typeof ElectricBorder>;

export const Default: Story = {
  render: (args) => (
    <ElectricBorder {...args}>
      <div
        style={{
          padding: '32px 48px',
          backgroundColor: '#0F172A',
          borderRadius: `${args.borderRadius}px`,
          textAlign: 'center',
        }}
      >
        <h3 style={{ margin: '0 0 8px', fontSize: '20px', color: '#F8FAFC' }}>
          Kinetic Electric Card
        </h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#94A3B8' }}>
          Real-time perimeter canvas discharge glow
        </p>
      </div>
    </ElectricBorder>
  ),
};

export const AmberAtelierGlow: Story = {
  args: {
    color: '#F97316',
    speed: 1.5,
    glowIntensity: 1.4,
  },
  render: (args) => (
    <ElectricBorder {...args}>
      <div
        style={{
          padding: '32px 48px',
          backgroundColor: '#12141C',
          borderRadius: `${args.borderRadius}px`,
          textAlign: 'center',
        }}
      >
        <h3 style={{ margin: '0 0 8px', fontSize: '20px', color: '#FEF3C7', fontFamily: "'Cinzel', serif" }}>
          Roy's Atelier Studio
        </h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#FBBF24' }}>
          Touchless MPE Spatial Synthesizer
        </p>
      </div>
    </ElectricBorder>
  ),
};
