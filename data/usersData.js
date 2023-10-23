import { v4 as newId } from 'uuid';

const usersData = [
  {
    id: newId(),
    email: 'qwe123@gmail.com',
    password: '$2a$10$5I.sz3EVz7sgqp2euaoL4OEqHQ0LAF0IWQj8NPQIfqlYUV3ECJsvS' // P@ssw0rd
  },
  {
    id: newId(),
    email: 'qwe1@gmail.com',
    password: '$2a$10$GmB6ix1l41GFJ7njILMyluRjshHD9ZPjBj55Vs.l1hgQyXD47MAXO' // S3cur1t@
  },
  {
    id: newId(),
    email: 'qwe1@gmail.com',
    password: '$2a$10$GmB6ix1l41GFJ7njILMyluRjshHD9ZPjBj55Vs.l1hgQyXD47MAXO' // S3cur1t@
  }
];

export default usersData;
