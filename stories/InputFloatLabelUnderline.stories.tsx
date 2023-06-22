import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  InputFloatLabelUnderline,
  InputFloatLabelUnderlineProps,
} from '../src/components/InputFloatLabelUnderline';

const meta: Meta = {
  title: 'Component/Form/Inputs/InputFloatLabelUnderline',
  component: InputFloatLabelUnderline,
  argTypes: {
    // children: {
    //   control: {
    //     type: 'text',
    //   },
    // },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<InputFloatLabelUnderlineProps> = args => (
  <InputFloatLabelUnderline {...args} />
);

export const Default = Template.bind({});

Default.args = {};
