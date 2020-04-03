CREATE TABLE users
(
  empid SERIAL NOT NULL ,
  firstname VARCHAR(100) NOT NULL,
  middlename VARCHAR(100),
  lastname VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phoneno bigint NOT NULL,
  role integer,
  address VARCHAR(100) NOT NULL,
  CONSTRAINT employee_role_check CHECK (role IN ('0','1','2')),
  CONSTRAINT email_validation_check CHECK (email like '%@%.%'),
  CONSTRAINT user_pk PRIMARY KEY (empid),
  CONSTRAINT role_fk FOREIGN KEY (role) REFERENCES roles(role_key)
);



