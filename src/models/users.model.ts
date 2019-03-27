import {Model, model, property} from '@loopback/repository';

@model({settings: {"strict":false}})
export class Users extends Model {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  ID: number;

  @property({
    type: 'string',
    required: true,
  })
  NOMBRE: string;

  @property({
    type: 'string',
    required: true,
  })
  ACTIVO: string;

  @property({
    type: 'string',
    required: true,
  })
  EMAIL: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}
