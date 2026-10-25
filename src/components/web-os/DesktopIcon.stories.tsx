import type { Meta, StoryObj } from '@storybook/react';
import { DesktopIcon } from './DesktopIcon';

const meta: Meta<typeof DesktopIcon> = {
  title: '03 - Retro WebOS/DesktopIcon',
  component: DesktopIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
    isSelected: { control: 'boolean' },
  },
  args: {
    label: 'Roy\'s Atelier',
    icon: '🎹',
    isSelected: false,
  },
};

export default meta;
type Story = StoryObj<typeof DesktopIcon>;

export const Default: Story = {};

export const SelectedIcon: Story = {
  args: {
    label: 'Notepad',
    icon: '📝',
    isSelected: true,
  },
};
