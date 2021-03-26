import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Carga, CargaRelations} from '../models';

export class CargaRepository extends DefaultCrudRepository<
  Carga,
  typeof Carga.prototype.Stamp,
  CargaRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Carga, dataSource);
  }
  /*
  find(filter?: Filter<Carga> | undefined, options?: AnyObject | undefined): Promise<(Carga & CargaRelations)[]>{
    this.dataSource.execute("select bistamp as Stamp, '' as a,'' as b from bi where ndos=");
    this.
  }
  */
  /*
  findById()
  UpdateByID()
  */
}
