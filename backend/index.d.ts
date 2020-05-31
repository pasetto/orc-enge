import {User} from './controllers/users/users.model'

declare module 'restify' {
  export interface Request {
    authenticated: User
  }
}
