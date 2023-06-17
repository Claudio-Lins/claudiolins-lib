import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InputFloatLabel, InputProps } from '../src/InputFloatLabel';

const meta: Meta = {
  title: 'Component/Form/Inputs/InputFloatLabel',
  component: InputFloatLabel,
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

const Template: Story<InputProps> = args => <InputFloatLabel {...args} />;

export const Default = Template.bind({});

Default.args = {};
