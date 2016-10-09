import * as Sequelize from 'sequelize';
import CONF from '../config';

var sequelize = new Sequelize(CONF.PG_CONF.database,CONF.PG_CONF.user, CONF.PG_CONF.password, {
  host: CONF.PG_CONF.host,
  port:CONF.PG_CONF.port,
  dialect: 'postgres',

  pool: {
    max: CONF.PG_CONF.max,
    min: CONF.PG_CONF.min,
    idle: CONF.PG_CONF.idleTimeoutMillis
  },

  // SQLite only
  // storage: 'path/to/database.sqlite'
});

export default {
    ORM:sequelize,
    ORM_TYPE:Sequelize
}
