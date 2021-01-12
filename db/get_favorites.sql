/* 
 loads users favorites, ref to users(pp_users) id
 the column headers are displaying glbx_symbol, contract_months, tick, tick_value, tick_per_point, point_value
*/

SELECT * FROM pp_user_favorites WHERE user_id = $1;