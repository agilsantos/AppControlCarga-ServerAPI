import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param,







  put,









  response
} from '@loopback/rest';
import {Carga} from '../models';
import {CargasRepository} from '../repositories';

export class CargasController {
  constructor(
    @repository(CargasRepository)
    public cargasRepository : CargasRepository,
  ) {}

  /*
  @post('/cargas')
  @response(200, {
    description: 'Carga model instance',
    content: {'application/json': {schema: getModelSchemaRef(Carga)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Carga, {
            title: 'NewCarga',

          }),
        },
      },
    })
    carga: Carga,
  ): Promise<Carga> {
    return this.cargasRepository.create(carga);
  }
  */

  @get('/cargas/count')
  @response(200, {
    description: 'Carga model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Carga) where?: Where<Carga>,
  ): Promise<Count> {
    return this.cargasRepository.count(where);
  }

  @get('/cargas')
  @response(200, {
    description: 'Array of Carga model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Carga, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Carga) filter?: Filter<Carga>,
  ): Promise<Carga[]> {
    return this.cargasRepository.find(filter);
    /*
    const cargas:Carga[] = await this.cargasRepository.find(filter);
    console.log(cargas);
    return cargas;
    */
  }

  /*
  @patch('/cargas')
  @response(200, {
    description: 'Carga PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Carga, {partial: true}),
        },
      },
    })
    carga: Carga,
    @param.where(Carga) where?: Where<Carga>,
  ): Promise<Count> {
    return this.cargasRepository.updateAll(carga, where);
  }
  */

  @get('/cargas/{id}')
  @response(200, {
    description: 'Carga model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Carga, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Carga, {exclude: 'where'}) filter?: FilterExcludingWhere<Carga>
  ): Promise<Carga> {
    return this.cargasRepository.findById(id, filter);
  }

  /*
  @patch('/cargas/{id}')
  @response(204, {
    description: 'Carga PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Carga, {partial: true}),
        },
      },
    })
    carga: Carga,
  ): Promise<void> {
    await this.cargasRepository.updateById(id, carga);
  }
  */
  /*
  @put('/cargas/{id}')
  @response(204, {
    description: 'Carga PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() carga: Carga,
  ): Promise<void> {
    await this.cargasRepository.replaceById(id, carga);
  }
  */

  @put('/cargas/{id}/carregar')
  @response(204, {
    description: 'Carga PUT success',
  })
  async carregar(
    @param.path.string('id') id: string
    //,@requestBody() carga: Carga,
  ): Promise<void> {
      const carga:Carga = await this.cargasRepository.findById(id);
      carga.carregado=true
      await this.cargasRepository.updateById(id, carga);
      //await this.cargasRepository.replaceById(id, carga);
  }

  @put('/cargas/{id}/recusar')
  @response(204, {
    description: 'Carga PUT success',
  })
  async recusar(
    @param.path.string('id') id: string,
    @param.query.string('reason') reason?: string
  ): Promise<void> {
      console.log(reason);
      const carga:Carga = await this.cargasRepository.findById(id);
      carga.recusado=true;
      carga.motivoRecusa=reason ? reason : "Não Indicada";
      await this.cargasRepository.updateById(id, carga);
  }

  /*
  @del('/cargas/{id}')
  @response(204, {
    description: 'Carga DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cargasRepository.deleteById(id);
  }
  */
}
