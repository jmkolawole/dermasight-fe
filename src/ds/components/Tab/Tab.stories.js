import {Tab} from '../..';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
};

export default meta;

export const P = {
  name: 'Tab',
  args: {
    items: ['Test 1', 'Test 2', 'Test 3'],
    activeTab: 'Test 2',
    width: 132,
    height: 40,
  },
};
