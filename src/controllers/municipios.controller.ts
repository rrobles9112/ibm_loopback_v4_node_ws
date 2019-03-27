import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
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
import {Municipios} from '../models';
import {MunicipiosRepository} from '../repositories';

export class MunicipiosController {
  constructor(
    @repository(MunicipiosRepository)
    public municipiosRepository : MunicipiosRepository,
  ) {}

  @post('/municipios', {
    responses: {
      '200': {
        description: 'Municipios model instance',
        content: {'application/json': {schema: {'x-ts-type': Municipios}}},
      },
    },
  })
  async create(@requestBody() municipios: Municipios): Promise<Municipios> {
    return await this.municipiosRepository.create(municipios);
  }

  @get('/municipios/count', {
    responses: {
      '200': {
        description: 'Municipios model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Municipios)) where?: Where,
  ): Promise<Count> {
    return await this.municipiosRepository.count(where);
  }

  @get('/municipios', {
    responses: {
      '200': {
        description: 'Array of Municipios model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Municipios}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Municipios)) filter?: Filter,
  ): Promise<Municipios[]> {
    return await this.municipiosRepository.find(filter);
  }

  @patch('/municipios', {
    responses: {
      '200': {
        description: 'Municipios PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() municipios: Municipios,
    @param.query.object('where', getWhereSchemaFor(Municipios)) where?: Where,
  ): Promise<Count> {
    return await this.municipiosRepository.updateAll(municipios, where);
  }

  @get('/municipios/{id}', {
    responses: {
      '200': {
        description: 'Municipios model instance',
        content: {'application/json': {schema: {'x-ts-type': Municipios}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Municipios> {
    return await this.municipiosRepository.findById(id);
  }

  @patch('/municipios/{id}', {
    responses: {
      '204': {
        description: 'Municipios PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() municipios: Municipios,
  ): Promise<void> {
    await this.municipiosRepository.updateById(id, municipios);
  }

  @put('/municipios/{id}', {
    responses: {
      '204': {
        description: 'Municipios PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() municipios: Municipios,
  ): Promise<void> {
    await this.municipiosRepository.replaceById(id, municipios);
  }

  @del('/municipios/{id}', {
    responses: {
      '204': {
        description: 'Municipios DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.municipiosRepository.deleteById(id);
  }
}
