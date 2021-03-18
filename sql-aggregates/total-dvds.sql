select count("inventory".*) as "totalFilms"
  from  "films"
  join "inventory" using ("filmId");
