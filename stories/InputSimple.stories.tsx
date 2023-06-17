import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InputSimple, InputSimpleProps } from '../src/InputSimple';

const meta: Meta = {
  title: 'Component/Form/Inputs/InputSimple',
  component: InputSimple,
  // argTypes: {
  //   children: {
  //     control: {
  //       type: 'text',
  //     },
  //   },
  // },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<InputSimpleProps> = args => <InputSimple {...args} />;

export const Default = Template.bind({});

Default.args = {};
