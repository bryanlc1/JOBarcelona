import React from 'react';
import Card from '../components/Card';

export default {
  title: 'JOBx/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    title: 'Crew ',
    description: 'Lista de regalos para el grupo crew',
    tags:['Gastronomy','Cine','Desportes de riesgo','Libros']
  },
};
