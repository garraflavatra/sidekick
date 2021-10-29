import NavigationBar from './navigation-bar.svelte';

export default {
  title: 'Components/NavigationBar',
  component: NavigationBar,
}

export const Default = () => ({
  Component: NavigationBar,
  props: {
    items: [
      { key: 'a', label: 'about' },
      { key: 'space', label: 'pause game' }
    ]
  }
});
