import {Avatar} from '..';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['image', 'text'],
      control: {type: 'select'},
    },
  },
};

export default meta;

export const P = {
  name: 'Avatar',
  args: {
    type: 'image',
    value: 'https://i.pravatar.cc/300?u=ironman@avengers.com',
    size: 40,
    radius: 100,
    disabled: false
  },
};
