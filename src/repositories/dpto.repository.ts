import {DefaultCrudRepository} from '@loopback/repository';
import {Dpto} from '../models';
import {IbmDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DptoRepository extends DefaultCrudRepository<
  Dpto,
  typeof Dpto.prototype.CODIGO
> {
  constructor(
    @inject('datasources.ibm_db') dataSource: IbmDbDataSource,
  ) {
    super(Dpto, dataSource);
  }
}
