/* 
  updates future and corresponding information, using id passed from user_favorites
*/

UPDATE pp_user_favorites
SET notes = $2
WHERE id = $1;