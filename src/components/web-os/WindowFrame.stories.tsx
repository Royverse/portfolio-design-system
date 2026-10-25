import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { WindowFrame } from './WindowFrame';

const meta: Meta<typeof WindowFrame> = {
  title: '03 - Retro WebOS/WindowFrame',
  component: WindowFrame,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    icon: { control: 'text' },
    isActive: { control: 'boolean' },
    width: { control: { type: 'range', min: 280, max: 700, step: 20 } },
    height: { control: { type: 'range', min: 180, max: 500, step: 20 } },
  },
  args: {
    title: 'Notepad - Project_Manifest.txt',
    icon: '📝',
    isActive: true,
    width: 460,
    height: 280,
  },
};

export default meta;
type Story = StoryObj<typeof WindowFrame>;

export const DefaultActiveWindow: Story = {};

export const InactiveState: Story = {
  args: {
    title: 'System Terminal - Background',
    icon: '📟',
    isActive: false,
  },
};
