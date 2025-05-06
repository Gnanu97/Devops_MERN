import jwt from 'jsonwebtoken'

//setting up a jwt token generator for the user login function
const generateToken = (id) => {
  return jwt.sign({
    id
  }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

export default generateToken