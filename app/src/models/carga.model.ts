import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Carga extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  Stamp: string;

  @property({
    type: 'string',
    required: true,
  })
  matricula: string;

  @property({
    type: 'string',
    required: true,
  })
  produto: string;

  @property({
    type: 'string',
    required: true,
  })
  ref: string;

  @property({
    type: 'string',
    required: true,
  })
  unidade: string;

  @property({
    type: 'string',
    required: true,
  })
  cliente: string;

  @property({
    type: 'number',
    required: true,
  })
  clienteNo: number;

  @property({
    type: 'number',
    default: 0,
  })
  qtt?: number;

  @property({
    type: 'number',
    default: 0,
  })
  qttDisponivel?: number;

  @property({
    type: 'string',
  })
  icon?: string;

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })

  carregado:boolean;
  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  recusado:boolean;

  @property({
    type: 'string',
  })
  motivoRecusa?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Carga>) {
    super(data);
  }
}

export interface CargaRelations {
  // describe navigational properties here
}

export type CargaWithRelations = Carga & CargaRelations;
