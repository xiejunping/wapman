import Cloud from 'cloud/index';
import {error} from 'common/js/toast';

let db;

Cloud('wx').then((module) => {
  wx = module;
}, name => {
  error(name + ERR_MODULE);
});

export function open(database) {
  return new Promise((resolve, reject) => {
    db.openDatabase({
      name: database
    }, (ret, err) => {
      if (ret.status) {
        resolve(database);
      } else {
        error(err.msg);
      }
    });
  });
}

export function openSync(database) {
  return db.openDatabaseSync({
    name: database
  });
}

export function close(database) {
  return db.closeDatabaseSync({
    name: database
  });
}

export function executeSql(database, sql) {
  return db.executeSqlSync({
    name: database,
    sql: sql
  });
}
