/* 
  User is able to create account with full_name, email_address, and password
*/

INSERT INTO pp_users (full_name, email_address, password)
VALUES ($1, $2, $3)
RETURNING *;