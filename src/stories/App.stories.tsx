import { App } from '../App';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Widget } from '../components/Widget';

export default {
  title: 'App',
  component: App,
  subcomponents: { Widget },
  parameters: {
    docs: {
      description: {
        component: 'Weather App',
      },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App/>;

export const app = Template.bind({});
