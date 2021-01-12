/* 
 loads a given market list with the corresponding futures
 market and future from futures_data
*/

SELECT * FROM pp_futures_data WHERE market = $1;