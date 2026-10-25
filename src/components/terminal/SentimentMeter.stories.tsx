import type { Meta, StoryObj } from '@storybook/react';
import { SentimentMeter } from './SentimentMeter';

const meta: Meta<typeof SentimentMeter> = {
  title: '04 - Financial Terminal/SentimentMeter',
  component: SentimentMeter,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    score: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    ticker: { control: 'text' },
    sentimentText: { control: 'text' },
    narrativeSummary: { control: 'text' },
  },
  args: {
    score: 82,
    ticker: 'NVDA',
    sentimentText: 'BULLISH',
    narrativeSummary: 'Institutional flow and AI server buildout accelerating into Q4.',
  },
};

export default meta;
type Story = StoryObj<typeof SentimentMeter>;

export const BullishBreakout: Story = {};

export const NeutralCaution: Story = {
  args: {
    score: 48,
    ticker: 'SPY',
    sentimentText: 'NEUTRAL',
    narrativeSummary: 'Fed rate path ambiguity keeping options volatility elevated.',
  },
};

export const BearishSelloff: Story = {
  args: {
    score: 22,
    ticker: 'INTC',
    sentimentText: 'BEARISH',
    narrativeSummary: 'Foundry gross margin contraction driving persistent short interest.',
  },
};
