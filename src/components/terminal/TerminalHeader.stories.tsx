import type { Meta, StoryObj } from '@storybook/react';
import { TerminalHeader } from './TerminalHeader';

const meta: Meta<typeof TerminalHeader> = {
  title: '04 - Financial Terminal/TerminalHeader',
  component: TerminalHeader,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    promptTitle: { control: 'text' },
    systemStatus: { control: 'text' },
    liveLatencyMs: { control: 'number' },
  },
  args: {
    promptTitle: 'NFA.TERMINAL v2.5',
    systemStatus: 'GEMINI-2.0 LIVE FEED',
    liveLatencyMs: 14.2,
  },
};

export default meta;
type Story = StoryObj<typeof TerminalHeader>;

export const Default: Story = {};
