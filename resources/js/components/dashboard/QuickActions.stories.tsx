import type { Meta, StoryObj } from '@storybook/react';
import QuickActions from './QuickActions';

const meta: Meta<typeof QuickActions> = {
  title: 'Dashboard/QuickActions',
  component: QuickActions,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof QuickActions>;

export const Default: Story = {
  render: () => <QuickActions />,
}; 