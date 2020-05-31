import {Server} from './server/server'
import {usersRouter} from './controllers/users/users.router'
import {productsRouter} from './controllers/products/products.router'
// import {reviewsRouter} from './controllers/reviews/reviews.router'
import {mainRouter} from './main.router'

const server = new Server()
server.bootstrap([
  usersRouter,
  productsRouter,
  mainRouter
]).then(server=>{
  console.log('Server is listening on:', server.application.address())
}).catch(error=>{
  console.log('Server failed to start')
  console.error(error)
  process.exit(1)
})
