import * as mongoose from 'mongoose'

import {User} from '../users/users.model'

export interface Products extends mongoose.Document {
  name: string,
  date_created: Date,
  date_modified: Date,
  rating: number,
  comments: string,
  file: string,
  images: string,
  price: string,
  print_options: _print_options[],
  printed_times: string,
  author_id: mongoose.Types.ObjectId | User,
  createdBy_id: mongoose.Types.ObjectId | User,
}

export interface _print_options extends mongoose.Document {
  material: string,
  printer_type: string,
  color: string,
  infill: string,
  velocity: string,
  layer_height: string,
}

const printerOptionsSchema = new mongoose.Schema({
  material: {
    type: String,
    required: true
  },
  printer_type: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  infill: {
    type: String,
    required: true
  },
  velocity: {
    type: String,
    required: true
  },
  layer_height: {
    type: String,
    required: true
  },
})

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 500,
    required: true
  },
  date_created: {
    type: Date,
    required: true
  },
  date_modified: {
    type: Date,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comments: {
    type: String,
    maxlength: 1000
  },
  file: {
    type: String,
    required: true
  },
  images: {
    type: String,
    required: true
  },
  price: {
    type: String
  },
  time_for_print: {
    type: String
  },
  print_options: {
    type: [printerOptionsSchema],
    required: false,
    default: []
  },
  printed_times: {
    type: Number
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


export const Products = mongoose.model<Products>('Products', productsSchema)
