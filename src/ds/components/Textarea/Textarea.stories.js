import Textarea from './Textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;

export const P = {
  name: 'Textarea',
  args: {
    label: 'Textarea Label',
    size: 'md',
    width: 'fit',
    placeholder: 'This is a placeholder',
    radius: 4,
    disabled: false,
    required: false,
  },
};
