import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'srinu',
        email: 'srinu@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: ' bhagya lakshmi',
        email: 'bhagya@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users
