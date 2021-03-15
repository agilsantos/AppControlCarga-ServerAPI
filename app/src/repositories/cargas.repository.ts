import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Carga, CargaRelations} from '../models';

export class CargasRepository extends DefaultCrudRepository<
  Carga,
  typeof Carga.prototype.Stamp,
  CargaRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Carga, dataSource);
  }
}
