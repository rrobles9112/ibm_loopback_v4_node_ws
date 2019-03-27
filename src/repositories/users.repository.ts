import {DefaultCrudRepository} from '@loopback/repository';
// @ts-ignore
import {Users} from '../models';
import {IbmDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

// @ts-ignore
export class UsersRepository extends DefaultCrudRepository<Users, typeof Users.prototype.ID> {
  constructor(
    @inject('datasources.ibm_db') dataSource: IbmDbDataSource,
  ) {
    // @ts-ignore
    super(Users, dataSource);
  }
}
