import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '../components/Icon';
import { Widget } from '../components/Widget';

export default {
  title: 'Widget',
  component: Widget,
  subcomponents: { Icon },
  parameters: {
    docs: {
      description: {
        component: 'Weather display',
      },
    },
  },
} as ComponentMeta<typeof Widget>;

const Template: ComponentStory<typeof Widget> = args => <Widget {...args} />;

export const widget = Template.bind({});

const sys = {
  sunrise: 167317236,
};
const main = {
  humidity: 70,
  temp: 20,
};
const weather = [
  {
    description: 'partly cloudy',
    icon: `04d`,
  },
];
const wind = {
  speed: 16,
};

const data = {
  sys,
  main,
  weather,
  wind,
};

widget.args = { data };
