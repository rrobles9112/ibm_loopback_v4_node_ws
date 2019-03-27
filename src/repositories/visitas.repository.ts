import {
  DefaultCrudRepository,
  HasOneRepositoryFactory,
  repository,
} from '@loopback/repository';
import {MunicipiosRepository} from './municipios.repository';
import {Visitas, Municipios} from '../models';
import {IbmDbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';

export class VisitasRepository extends DefaultCrudRepository<
  // @ts-ignore
  Visitas,
  typeof Visitas.prototype.ID_VISITAS
> {
  constructor(
    @inject('datasources.ibm_db') dataSource: IbmDbDataSource,
  ) {
    // @ts-ignore
    super(Visitas, dataSource);

  }





}
