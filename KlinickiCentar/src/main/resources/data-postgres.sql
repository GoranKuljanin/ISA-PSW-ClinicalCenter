insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('Goranr', '123', 'Kuljanin', 'goku@gmail.com', 'DJ', 'NS', 'RS', '064', 'ADMIN_K_C');
insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('Ime', '456', 'Prezime', 'ime@gmail.com', 'adr', 'NS', 'RS', '064', 'User');
insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('Pacijent', '789', 'Prezime', 'pacijent@gmail.com', 'adr', 'NS', 'RS', '064', 'PACIJENT');

insert into pacijent (zdravstvenikarton, user_id) values ('NekiKarton', 3);

insert into termin (datum) values ('Datum1');

insert into lekar (name) values ('Ime1');

insert into cena (vrednost, opis) values (1, 'Opis1');

insert into sala (name) values ('Sala1');

insert into klinika (naziv, adresa, opis) values ('Naziv1', 'Adresa1', 'Opis1');
