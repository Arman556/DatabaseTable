CREATE TABLE customer(
    customer_id serial NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    website VARCHAR(100) NOT NULL,
    address VARCHAR(100) NOT NULL,
    CONSTRAINT customer_pk PRIMARY KEY (customer_id)
);