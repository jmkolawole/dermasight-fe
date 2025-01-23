import {colorOptions} from '../..';
import Icon from './Icon';
import {iconList} from './Icon.utils';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      options: iconList,
      control: {type: 'select'},
    },
    color: {
      options: colorOptions(),
      control: {type: 'select'},
    },
    bg: {
      options: ['inherit', ...colorOptions()],
      control: {type: 'select'},
    },
  },
};

export default meta;

export const P = {
  name: 'Icon',
  args: {
    name: 'chevronDown',
    color: 'shades.100',
    size: 20,
    weight: 0,
    bg: 'inherit',
  },
};
