/* 
allow user to add one future at a time to their favorites
  displaying glbx_symbol, contract_months, tick, tick_value, tick_per_point, point_value
*/

INSERT INTO pp_user_favorites (future, glbx_symbol, contract_months, tick, tick_value, tick_per_point, point_value, user_id)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8);