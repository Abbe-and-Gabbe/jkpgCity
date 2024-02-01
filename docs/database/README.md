# Database

This project uses version `11.2.2` of MARIADB and is run using a docker container.

## Tables

The current tables in the project are:

### STORES

| name | datatype |
|--|--|
| id | INTEGER |
| name | TEXT NOT NULL |
| url | TEXT |
| district | TEXT |