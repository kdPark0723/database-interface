const {
  DataAccessorContext, DataAccessorFactory, DataAccessor, Transation,
} = require('../dist/database-interface');

// eslint-disable-next-line import/prefer-default-export
export function run() {
  console.log(DataAccessor);
  console.log(DataAccessorContext);
  console.log(DataAccessorFactory);
  console.log(Transation);
}
