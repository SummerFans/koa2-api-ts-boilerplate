import CONF from '../config';
import orm from './db';

export let ORM = orm.ORM;
export let ORM_TYPE = orm.ORM_TYPE;

// var portObject={
//   generateHash:generateHash,
//   generateToken:generateToken
// }

// export default Object.assign(portObject,orm)