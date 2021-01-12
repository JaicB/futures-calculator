/* 
allow user to update their full_name and password, based off of their id(email) on pp_users
*/

UPDATE pp_users SET full_name = $1 WHERE email_address = $2
RETURNING *;