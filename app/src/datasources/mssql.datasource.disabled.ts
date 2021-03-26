import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mssql',
  connector: 'mssql',
  url: 'mssql://saags:agil@prag01@ema.cpragosa.local/_MaisRitmo26',
  host: 'ema.cpragosa.local',
  port: 1433,
  user: 'saags',
  password: 'agil@prag01',
  database: '_MaisRitmo26',
  "options": {
    "enableArithAbort": true
    }
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MssqlDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mssql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mssql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
