import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { CountryDetail } from '.';
import { SERVICE_TYPE } from '../../others/contexts/service';

export default {
  title: 'Example/CountryDetail',
  component: CountryDetail,
} as ComponentMeta<typeof CountryDetail>;

const Template: ComponentStory<typeof CountryDetail> = (args) => (
  <MemoryRouter>
    <CountryDetail {...args} />
  </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  country: {
    id: 'ua',
    name: 'Ukraine',
    services: [
      {
        id: 'internal',
        name: 'An internal link',
        type: SERVICE_TYPE.SUPPLIES,
        path: 'https://requests.ugtf.app',
      },
      {
        id: 'psyche',
        name: 'Internal chat link',
        type: SERVICE_TYPE.CHAT,
        path: '/foo',
      },
      {
        id: 'uk_external_1',
        name: 'Top trusted service 1',
        type: SERVICE_TYPE.EXTERNAL,
        path: '/',
      },
    ],
  },
};
