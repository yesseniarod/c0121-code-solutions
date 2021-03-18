select "categories"."name" as "categoryName",
        count("films".*) as "totalMovies"
  from "categories"
  join "filmCategory" using ("categoryId")
  join "films" using ("filmId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "actorId" = 178
  group by "categoryName";
