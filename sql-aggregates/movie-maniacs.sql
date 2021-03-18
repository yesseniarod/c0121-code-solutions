select "firstName",
        "lastName",
        sum("payments"."amount") as "totalCost"
  from "customers"
  join "payments" using ("customerId")
  group by "customerId"
  order by "totalCost" desc;
