CREATE table roles(
    role_name VARCHAR(100) NOT NULL,
    role_key serial NOT NULL,
    discription VARCHAR(300),
    CONSTRAINT roles_pk PRIMARY KEY (role_key)
);