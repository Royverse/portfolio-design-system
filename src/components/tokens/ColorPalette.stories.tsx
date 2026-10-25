import type { Meta, StoryObj } from '@storybook/react';
import { ColorPalette } from './ColorPalette';

const meta: Meta<typeof ColorPalette> = {
  title: '00 - Design Tokens/Colors',
  component: ColorPalette,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Design tokens defining the primary theme colors, accent highlights, surface materials, and glow treatments across all 14 projects in the Roy Mootsana ecosystem.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const AllProjectPalettes: Story = {};
