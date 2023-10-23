import { v4 as newId } from 'uuid';

const productsData = [
  {
    id: newId(),
    name: 'Bugatti Chiron',
    year: 2022,
    price: 2400000,
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Bugatti_Chiron_1.jpg'
  },
  {
    id: newId(),
    name: 'Bugatti Veyron 16.4 Grand Sport',
    year: 2015,
    price: 1740000,
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/2015-03-03_Geneva_Motor_Show_4073.JPG'
  },
  {
    id: newId(),
    name: 'Bugatti Legend "Meo Costantini"',
    year: 2013,
    price: 2009000,
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/2014_Bugatti_Veyron_Grand_Sport_Vitesse.jpg'
  },
  {
    id: newId(),
    name: 'Bugatti Legend "Rembrandt Bugatti"',
    year: 2014,
    price: 2180000,
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Salon_de_l%27auto_de_Gen%C3%A8ve_2014_-_20140305_-_Bugatti_Veyron_Grand_Sport_Vitesse_Rembrandt_Bugatti_3.jpg'
  },
  {
    id: newId(),
    name: 'Bugatti Vision Gran Turismo',
    year: 2015,
    price: 2280000,
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Festival_automobile_international_2016_-_Bugatti_Vision_Gran_Turismo_-_002.jpg'
  }
];

export default productsData;
