import {Model, model, property, hasOne, embedsOne} from '@loopback/repository';
import {Municipios} from './municipios.model';

@model({settings: {strict: false}, name: 'SF_VISITAS'})
export class Visitas extends Model {
  @property({
    type: 'number',
    id: true,
  })
  ID_VISITA?: number;

  @property({
    type: 'date',
  })
  FECDESPLAZA?: string;

  // @ts-ignore
  @hasOne(()=> Municipios, {keyTo:'CODIGO'})
  MUNICIPIO?: Municipios

  @property({
    type: 'string',
  })
  DPTO?: string;

  @property({
    type: 'string',
  })
  LATITUD?: string;

  @property({
    type: 'string',
  })
  LONGITUD?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Visitas>) {
    super(data);
  }

}
