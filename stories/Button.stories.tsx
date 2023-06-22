import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src/components/Button';

const meta: Meta = {
  title: 'Component/Buttons/Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {};
