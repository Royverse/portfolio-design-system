import type { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from './ProjectCard';
import { ECOSYSTEM_PROJECTS } from '../../tokens/projects';

const meta: Meta<typeof ProjectCard> = {
  title: '01 - Ecosystem Shared/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    projectId: {
      control: 'select',
      options: Object.keys(ECOSYSTEM_PROJECTS),
    },
    interactive: {
      control: 'boolean',
    },
  },
  args: {
    projectId: 'air-canvas',
    interactive: true,
  },
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const AirCanvas: Story = {
  args: {
    projectId: 'air-canvas',
  },
};

export const FinancialTerminal: Story = {
  args: {
    projectId: 'not-financial-advice',
  },
};

export const SpatialStudio: Story = {
  args: {
    projectId: 'roys-atelier-studio',
  },
};

export const RetroMidnightOS: Story = {
  args: {
    projectId: 'os-by-midnight',
  },
};
