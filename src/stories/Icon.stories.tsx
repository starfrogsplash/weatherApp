import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '../components/Icon';

export default {
  title: 'Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'Icon display',
      },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const icon = Template.bind({});

const iconId = 803
const iconUrl = 'http://openweathermap.org/img/wn/04d@2x.png'

icon.args = { iconId, iconUrl };