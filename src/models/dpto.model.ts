import {Model, model, property} from '@loopback/repository';

@model({settings: {"strict":false},name:'DPTO'})
export class Dpto extends Model {
  @property({
    type: 'string',
    id: true,
  })
  CODIGO?: string;

  @property({
    type: 'string',
    required: true,
  })
  NOMBRE: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // @ts-ignore
  [prop: string]: any;

  constructor(data?: Partial<Dpto>) {
    super(data);
  }
}
