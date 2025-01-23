import TextInput from './TextInput';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};

export default meta;

export const P = {
  name: 'TextInput',
  args: {
    type: 'text',
    label: 'Input Label',
    size: 'md',
    width: 'fit',
    placeholder: 'This is a placeholder',
    radius: 4,
    disabled: false,
    required: false,
    search: false,
    removeBtSpace: false,
  },
};
