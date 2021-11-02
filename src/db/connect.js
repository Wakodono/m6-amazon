/**
 *
 * this package is a driver that allows us to connect our node js to postgresql
 */

 import pg from "pg";

 /**
  *
  *  pool is where we keep idle connections
  *
  *  idle : connection is not in use, authenticated but waiting to be used
  *
  *  with pool we don't need a handshake in every database query
  *
  * ref : https://node-postgres.com/features/pooling
  */
 
 const pool = new pg.Pool();

 // question would const { Pool } = pool work in the same way??
 
 export default pool;