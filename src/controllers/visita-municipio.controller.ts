// Uncomment these imports to begin using these cool features!


import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Municipios, Visitas} from '../models';
import {MunicipiosRepository, VisitasRepository} from '../repositories';
import {repository, Filter, Where} from '@loopback/repository';
import {IbmDbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';


export class VisitaMunicipioController {
  constructor(
    @repository(MunicipiosRepository)
    public municipiosRepository: MunicipiosRepository,
    @repository(VisitasRepository)
    public visitasRepository: VisitasRepository,
    @inject('datasources.ibm_db') dataSource: IbmDbDataSource,
  ) {
  }

  @get('/visitas/municipio', {
    responses: {
      '200': {
        description: 'Array of Visitas with municipios included',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Visitas}},
          },
        },
      },
    }
  })
  async obtenerVisitaConMinicipio() {


    const allVisitas = await this.municipiosRepository.dataSource.execute("SELECT * FROM SF_DISPOSITIVOS",)
    console.log(allVisitas)
    return {
      "hello": allVisitas
    }

  }
}
