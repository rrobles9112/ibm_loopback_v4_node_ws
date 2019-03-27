import {Model, model, property, belongsTo} from '@loopback/repository';
import {Visitas} from './visitas.model';

@model({settings: {strict: false}, name: 'MUNICIPIOS'})
export class Municipios extends Model {
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


  // @ts-ignore
  @belongsTo(() => Visitas,{keyFrom:'MUNICIPIO'})
  CODIGO: number;


  @property({
    type: 'string',
    required: true,
  })
  ID_DPTO: string;

  @property({
    type: 'string',
    required: true,
  })
  NOMBRE_DPTO: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Municipios>) {
    super(data);
  }
}
