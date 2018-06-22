create table Shelfie(
    product_id serial primary key not null,
    name varchar(25) not null,
    price integer not null,
    image_url text not null
)