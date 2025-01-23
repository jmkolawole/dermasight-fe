import {Button} from '..';
import {buttonVariants} from './Button.utils';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      name: 'content',
    },
    variant: {
      options: [...buttonVariants],
      control: {type: 'select'},
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {type: 'select'},
    },
  },
};

export default meta;

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Button',
    size: 'md',
    width: 'fit-content',
    radius: 8,
    disabled: false,
  },
};

export const Secondary = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
};

export const Danger = {
  args: {
    ...Primary.args,
    variant: 'danger',
  },
};

export const Success = {
  args: {
    ...Primary.args,
    variant: 'success',
  },
};

export const Warning = {
  args: {
    ...Primary.args,
    variant: 'warning',
  },
};

export const OutlinePrimary = {
  args: {
    ...Primary.args,
    variant: 'outline-primary',
  },
};

export const OutlineGray = {
  args: {
    ...Primary.args,
    variant: 'outline-gray',
  },
};
