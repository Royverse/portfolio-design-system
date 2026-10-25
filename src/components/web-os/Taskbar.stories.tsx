import type { Meta, StoryObj } from '@storybook/react';
import { Taskbar } from './Taskbar';

const meta: Meta<typeof Taskbar> = {
  title: '03 - Retro WebOS/Taskbar',
  component: Taskbar,
  parameters: {
    layout: 'bottom',
  },
};

export default meta;
type Story = StoryObj<typeof Taskbar>;

export const Default: Story = {};
