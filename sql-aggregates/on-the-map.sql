select "countries"."name" as "countryName",
        count("cities".*) as "totalCities"
  from "countries"
  join "cities" using ("countryId")
group by "countryName";
