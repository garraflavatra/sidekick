import Kbd from './kbd.svelte';

export default {
  title: 'Components/Kbd',
  component: Kbd,
}

const Template = (args) => ({ Component: Kbd, props: args });

export const Default = Template.bind({});
Default.args = {
  key: 'a',
};
