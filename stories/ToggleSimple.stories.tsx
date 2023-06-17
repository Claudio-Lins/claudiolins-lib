import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToggleSimple, ToggleSimpleProps } from '../src/ToggleSimple';

const meta: Meta = {
  title: 'Component/Form/Toggle/ToggleSimple',
  component: ToggleSimple,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ToggleSimpleProps> = args => <ToggleSimple {...args} />;

export const Default = Template.bind({});

Default.args = {};
