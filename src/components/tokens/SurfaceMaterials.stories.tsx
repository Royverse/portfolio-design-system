import type { Meta, StoryObj } from '@storybook/react';
import { SurfaceMaterials } from './SurfaceMaterials';

const meta: Meta<typeof SurfaceMaterials> = {
  title: '00 - Design Tokens/Surfaces',
  component: SurfaceMaterials,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof SurfaceMaterials>;

export const FiveEcosystemSurfaces: Story = {};
