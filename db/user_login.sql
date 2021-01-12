/* 
 logs user in using email_address and password from pp_users
*/

SELECT * FROM pp_users WHERE email_address = $1;