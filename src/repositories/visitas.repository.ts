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
    @repository.getter('MunicipiosRepository')
    getMunicipiosRepository: Getter<MunicipiosRepository>,
  ) {
    // @ts-ignore
    super(Visitas, dataSource);

    this.createHasOneRepositoryFactoryFor(
      // @ts-ignore
      'MUNICIPIO', getMunicipiosRepository,
    );
  }
}
