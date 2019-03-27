import {DefaultCrudRepository} from '@loopback/repository';
import {Users} from '../models';
import {IbmDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.ID
> {
  constructor(
    @inject('datasources.ibm_db') dataSource: IbmDbDataSource,
  ) {
    super(Users, dataSource);
  }
}
