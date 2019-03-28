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
import {Visitas} from '../models';
import {VisitasRepository} from '../repositories';

export class VisitasController {
  constructor(
    @repository(VisitasRepository)
    public visitasRepository : VisitasRepository,
  ) {}

  /*@post('/visitas', {
    responses: {
      '200': {
        description: 'Visitas model instance',
        content: {'application/json': {schema: {'x-ts-type': Visitas}}},
      },
    },
  })
  async create(@requestBody() visitas: Visitas): Promise<Visitas> {
    return await this.visitasRepository.create(visitas);
  }*/

  @get('/visitas/count', {
    responses: {
      '200': {
        description: 'Visitas model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Visitas)) where?: Where,
  ): Promise<Count> {
    return await this.visitasRepository.count(where);
  }



  @get('/visitas', {
    responses: {
      '200': {
        description: 'Array of Visitas model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Visitas}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Visitas)) filter?: Filter,
  ): Promise<Visitas[]> {
    return await this.visitasRepository.find(filter);
  }

  @get('/visitas/{ID_VISITA}', {
    responses: {
      '200': {
        description: 'Visitas model instance',
        content: {'application/json': {schema: {'x-ts-type': Visitas}}},
      },
    },
  })
  async findById(@param.path.string('ID_VISITA') ID_VISITA: string): Promise<Visitas> {
    return await this.visitasRepository.findById(ID_VISITA);
  }


/*
  @patch('/visitas', {
    responses: {
      '200': {
        description: 'Visitas PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() visitas: Visitas,
    @param.query.object('where', getWhereSchemaFor(Visitas)) where?: Where,
  ): Promise<Count> {
    return await this.visitasRepository.updateAll(visitas, where);
  }



  @patch('/visitas/{id}', {
    responses: {
      '204': {
        description: 'Visitas PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() visitas: Visitas,
  ): Promise<void> {
    await this.visitasRepository.updateById(id, visitas);
  }

  @put('/visitas/{id}', {
    responses: {
      '204': {
        description: 'Visitas PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() visitas: Visitas,
  ): Promise<void> {
    await this.visitasRepository.replaceById(id, visitas);
  }

  @del('/visitas/{id}', {
    responses: {
      '204': {
        description: 'Visitas DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.visitasRepository.deleteById(id);
  }*/


}
