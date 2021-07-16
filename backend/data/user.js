import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@g',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },
  {
    name: 'Bob',
    email: 'Bob@g',
    password: bcrypt.hashSync('123', 10),
  },
  {
    name: 'Luyi',
    email: 'Luyi123@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
