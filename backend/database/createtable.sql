CREATE TABLE employee
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
  CONSTRAINT newcheck CHECK (email like '%@%.%'),
  CONSTRAINT newPK PRIMARY KEY (empid)
)