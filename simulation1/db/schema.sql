create table Shelfie(
    product_id serial primary key not null,
    name varchar(40) not null,
    price integer not null,
    image_url text not null
)