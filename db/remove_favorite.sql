/* 
  removes future and corresponding information, using id passed from user_favorites
*/

DELETE FROM pp_user_favorites WHERE id = $1;