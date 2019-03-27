import { DefaultCrudRepository } from '@loopback/repository';
import { Municipios } from '../models';
import { IbmDbDataSource } from '../datasources';
import { inject } from '@loopback/core';

// @ts-ignore
export class MunicipiosRepository extends DefaultCrudRepository<Municipios, typeof Municipios.prototype.ID> {
  constructor(
    @inject('datasources.ibm_db') dataSource: IbmDbDataSource,
  ) {
    // @ts-ignore
    super(Municipios, dataSource);
  }
}
