ALTER TABLE users
ADD timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE users
ADD modifyon TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

create or replace function change_timestamp()
RETURNS TRIGGER AS
$$
begin
new.modifyon=CURRENT_TIMESTAMP;
return new;
end;
$$
LANGUAGE plpgsql;
CREATE trigger on_update
before update 
on users for each row 
EXECUTE PROCEDURE change_timestamp();
