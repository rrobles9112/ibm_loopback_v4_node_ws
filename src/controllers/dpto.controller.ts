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
import {Dpto} from '../models';
import {DptoRepository} from '../repositories';

export class DptoController {
  constructor(
    @repository(DptoRepository)
    public dptoRepository : DptoRepository,
  ) {}

  /*@post('/dptos', {
    responses: {
      '200': {
        description: 'Dpto model instance',
        content: {'application/json': {schema: {'x-ts-type': Dpto}}},
      },
    },
  })
  async create(@requestBody() dpto: Dpto): Promise<Dpto> {
    return await this.dptoRepository.create(dpto);
  }*/

  @get('/dptos/count', {
    responses: {
      '200': {
        description: 'Dpto model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Dpto)) where?: Where,
  ): Promise<Count> {
    return await this.dptoRepository.count(where);
  }

  @get('/dptos', {
    responses: {
      '200': {
        description: 'Array of Dpto model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Dpto}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Dpto)) filter?: Filter,
  ): Promise<Dpto[]> {
    return await this.dptoRepository.find(filter);
  }

  @patch('/dptos', {
    responses: {
      '200': {
        description: 'Dpto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() dpto: Dpto,
    @param.query.object('where', getWhereSchemaFor(Dpto)) where?: Where,
  ): Promise<Count> {
    return await this.dptoRepository.updateAll(dpto, where);
  }

  @get('/dptos/{id}', {
    responses: {
      '200': {
        description: 'Dpto model instance',
        content: {'application/json': {schema: {'x-ts-type': Dpto}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Dpto> {
    return await this.dptoRepository.findById(id);
  }

  @patch('/dptos/{id}', {
    responses: {
      '204': {
        description: 'Dpto PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() dpto: Dpto,
  ): Promise<void> {
    await this.dptoRepository.updateById(id, dpto);
  }

  @put('/dptos/{id}', {
    responses: {
      '204': {
        description: 'Dpto PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() dpto: Dpto,
  ): Promise<void> {
    await this.dptoRepository.replaceById(id, dpto);
  }

  @del('/dptos/{id}', {
    responses: {
      '204': {
        description: 'Dpto DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.dptoRepository.deleteById(id);
  }
}
