import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './ibm-db.datasource.json';

export class IbmDbDataSource extends juggler.DataSource {
  static dataSourceName = 'ibm_db';

  constructor(
    @inject('datasources.config.ibm_db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
