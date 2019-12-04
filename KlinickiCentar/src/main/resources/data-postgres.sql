insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('Goranr', '123', 'Kuljanin', 'goku@gmail.com', 'DJ', 'Novi Sad', 'RS', '064', 'ADMIN_K_C');
insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('ime', '456', 'Prezime', 'ime@gmail.com', 'adr', 'Novi Sad', 'RS', '064', 'User');
insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('Pacijent', '789', 'Prezime', 'pacijent@gmail.com', 'adr', 'Novi Sad', 'RS', '064', 'PACIJENT');
insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('Vesna', '456', 'Vesnaa', 'vesna@gmail.com', 'adr', 'Novi Sad', 'RS', '064', 'PACIJENT');
insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('Marko', '123', 'Markovic', 'lekar', 'adr', 'Novi Sad', 'RS', '064', 'LEKAR');

insert into pacijent (zdravstvenikarton, user_id) values ('NekiKarton', 3);
insert into pacijent (zdravstvenikarton, user_id) values ('NekiKarton', 4);

insert into klinika (naziv, adresa, opis) values ('Naziv1', 'Adresa1', 'Opis1');
insert into klinika (naziv, adresa, opis) values ('Naziv2', 'Adresa2', 'Opis2');
insert into termin (datum,klinika_id) values ('Datum1',1);

insert into lekar (name,klinika_id) values ('Ime1',1);


insert into cena (vrednost, opis, klinika_id) values (1, 'Opis1', 1);
insert into cena (vrednost, opis, klinika_id) values (100, 'Operacija', 1);
insert into cena (vrednost, opis, klinika_id) values (250, 'Klinika2', 2);

insert into sala (name,klinika_id) values ('Sala1',1);


