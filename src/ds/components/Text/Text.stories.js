import Text from './Text';
import {colorOptions} from '../../utils/functions';

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      options: colorOptions(),
      control: {type: 'select'},
    },
    children: {
      name: 'content',
    },
    size: {
      if: {arg: 'type', eq: 'p'},
    },
  },
};

export default meta;

export const P = {
  name: 'Text',
  args: {
    children: 'Text Content',
    type: 'p',
    color: 'neutral.900',
    size: 'md',
  },
};
