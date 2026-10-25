import type { Meta, StoryObj } from '@storybook/react';
import { TypographySpecimen } from './TypographySpecimen';

const meta: Meta<typeof TypographySpecimen> = {
  title: '00 - Design Tokens/Typography',
  component: TypographySpecimen,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof TypographySpecimen>;

export const TypeScaleAndPairings: Story = {};
