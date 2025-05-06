import bcrypt from 'bcryptjs'

//this is our sample user data to be used with the seeder file
const users = [{
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Helen Smith',
    email: 'helen@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Tom Dixon',
    email: 'tom@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users