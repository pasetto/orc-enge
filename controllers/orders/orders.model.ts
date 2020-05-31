import * as mongoose from 'mongoose'

import {User} from '../users/users.model'
import {_print_options, Products} from '../products/products.model'

export interface Orders extends mongoose.Document {
  cart: [Products], 
  status: string, 
  date_created: Date, 
  date_modified: Date, 
  comments: string, 
  subtotal: string,   
  author_id: mongoose.Types.ObjectId | User,
  createdBy_id: mongoose.Types.ObjectId | User,
}

const ordersSchema = new mongoose.Schema({
  cart: {
    type: [Products],
    required: false,
    default: []
  },
  status: {
    type: String
  },
  date_created: {
    type: Date,
    required: true
  },
  date_modified: {
    type: Date,
    required: true
  },
  comments: {
    type: String,
    maxlength: 1000
  },
  subtotal: {
    type: String
  },
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdBy_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})


export const Orders = mongoose.model<Orders>('Orders', ordersSchema)
