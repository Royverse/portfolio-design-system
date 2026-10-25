import type { Meta, StoryObj } from '@storybook/react';
import { ProjectBadge } from './ProjectBadge';
import { ECOSYSTEM_PROJECTS } from '../../tokens/projects';

const meta: Meta<typeof ProjectBadge> = {
  title: '01 - Ecosystem Shared/ProjectBadge',
  component: ProjectBadge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    projectId: {
      control: 'select',
      options: Object.keys(ECOSYSTEM_PROJECTS),
      description: 'Project ID driving theme color, accent frame, and branding label',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Badge scaling dimensions',
    },
    showLabel: {
      control: 'boolean',
      description: 'Display project name and category text',
    },
    accentColorOverride: {
      control: 'color',
      description: 'Custom override for the border glow accent',
    },
    interactive: {
      control: 'boolean',
      description: 'Hover cursor and transition states',
    },
  },
  args: {
    projectId: 'portfolio-v1',
    size: 'md',
    showLabel: true,
    interactive: true,
  },
};

export default meta;
type Story = StoryObj<typeof ProjectBadge>;

export const Default: Story = {};

export const SmallIconOnly: Story = {
  args: {
    size: 'sm',
    showLabel: false,
  },
};

export const LargeStudioBadge: Story = {
  args: {
    projectId: 'roys-atelier-studio',
    size: 'lg',
    showLabel: true,
  },
};

export const FinancialTerminalBadge: Story = {
  args: {
    projectId: 'not-financial-advice',
    size: 'md',
    showLabel: true,
  },
};
