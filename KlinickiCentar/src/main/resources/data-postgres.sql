insert into users (firstname, password, lastname, username, adress, city, country, phonenumber, uloga, enabled, last_password_reset_date) values ('Goranr', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Kuljanin', 'goku@gmail.com', 'DJ', 'Novi Sad', 'RS', '064', 'ADMIN_K_C', true, '2017-10-01 21:58:58.508-07');
insert into users (firstname, password, lastname, username, adress, city, country, phonenumber, uloga, enabled, last_password_reset_date) values ('Milos', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Majstorovic', 'milos@gmail.com', 'Kosovska 1', 'Novi Sad', 'RS', '0643344', 'User', true, '2017-10-01 21:58:58.508-07');
insert into users (firstname, password, lastname, username, adress, city, country, phonenumber, uloga, enabled, last_password_reset_date) values ('Ana', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Andric', 'ana@gmail.com', 'Koste R. 2', 'Novi Sad', 'RS', '0641234', 'PACIJENT', true, '2017-10-01 21:58:58.508-07');
insert into users (firstname, password, lastname, username, adress, city, country, phonenumber, uloga, enabled, last_password_reset_date) values ('Vesna', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Vesnaa', 'vesna@gmail.com', 'S. Bajica 4', 'Novi Sad', 'RS', '0644455', 'PACIJENT', true, '2017-10-01 21:58:58.508-07');
insert into users (firstname, password, lastname, username, adress, city, country, phonenumber, uloga, enabled, last_password_reset_date) values ('Marko', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Markovic', 'lekar', 'Milsevska 7', 'Novi Sad', 'RS', '0645566', 'LEKAR', true, '2017-10-01 21:58:58.508-07');
insert into users (firstname, password, lastname, username, adress, city, country, phonenumber, uloga, enabled, last_password_reset_date) values ('Uros', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Urosevic', 'uros@gmail.com', 'Micurinova 6', 'Ruma', 'RS', '0641122', 'PACIJENT', true, '2017-10-01 21:58:58.508-07');
insert into users (firstname, password, lastname, username, adress, city, country, phonenumber, uloga, enabled, last_password_reset_date) values ('Laza', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Lazic', 'laza@gmail.com', 'Cankareva 4', 'S. Mitrovica', 'RS', '0645566', 'PACIJENT', true, '2017-10-01 21:58:58.508-07');
insert into users (firstname, password, lastname, username, adress, city, country, phonenumber, uloga, enabled, last_password_reset_date) values ('Admin', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Klinike', 'adminklinike', 'Kopernikova 73', 'S. Mitrovica', 'RS', '0647744', 'ADMIN_K', true, '2017-10-01 21:58:58.508-07');
insert into users (firstname, password, lastname, username, adress, city, country, phonenumber, uloga, enabled, last_password_reset_date) values ('Nemanja', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Pavlovic', 'nemanja@gmail.com', 'Panonska 17', 'Novi Sad', 'RS', '0641287', 'LEKAR', true, '2017-10-01 21:58:58.508-07');

INSERT INTO AUTHORITY (name) VALUES ('ROLE_PACIJENT');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_ADMIN');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_ADMIN_KLINICKOG_CENTRA');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_LEKAR');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_USER');

INSERT INTO USER_AUTHORITY  (user_id, authority_id) VALUES (3, 1);
INSERT INTO USER_AUTHORITY  (user_id, authority_id) VALUES (1, 3);
INSERT INTO USER_AUTHORITY  (user_id, authority_id) VALUES (8, 2);
INSERT INTO USER_AUTHORITY  (user_id, authority_id) VALUES (5, 4);

insert into klinika (naziv, adresa, opis) values ('Euromedic', 'Bulervar Oslobodjenja 30', 'Na jednom mestu obezbedjena Vam je najkvalitetnija medicinska pomoc od strane vodecih specijalista i subspecijalista iz gotovo svih oblasti savremene medicine.');
insert into klinika (naziv, adresa, opis) values ('Sirius Medical', 'Ilije Ognjanovica 10', 'Nas strucni tim lekara, tehnicara i saradnika kao i celokupno osoblje ce vas srdacno docekati u prijatnom ambijentu “Sirius Medical” bolnice , biti vam uvek na usluzi i omoguciti najvisi nivo nege pacijenata.');


insert into lekar (specijalizacija, radnovreme, opis, slika, user_id, klinika_id) values ('Hirurg', '8:00-16:00', 'Vrhunski strucnjak, poznat po minimalno invazivnim operacijama stitaste zlezde, kao i parastitastih zlezda, sa brzim i lakim oporavkom.','../../../../../assets/lekari/lekar1.jpg',5 , 1);
insert into lekar (specijalizacija, radnovreme, opis, slika, user_id, klinika_id) values ('Kardiolog', '6:00-14:00', 'Svestrani i vrsni kardiolog, angazovan ne samo u Srbiji, vec i u regionu.','../../../../../assets/lekari/lekar2.jpg',9 , 1);


insert into sala (name,brojsale,klinika_id) values ('Ordinacija','1',1);
insert into sala (name,brojsale,klinika_id) values ('Laboratorija','2',1);
insert into sala (name,brojsale,klinika_id) values ('ORL','3',1);
insert into sala (name,brojsale,klinika_id) values ('Radiologija','4',1);

insert into cena (vrednost, opis, klinika_id) values (4000, 'Specialisticki pregled', 1);
insert into cena (vrednost, opis, klinika_id) values (3000, 'Kontrolni pregled', 1);
insert into cena (vrednost, opis, klinika_id) values (2500, 'Audiometrija', 1);
insert into cena (vrednost, opis, klinika_id) values (1000, 'Timpanometrija', 1);
insert into cena (vrednost, opis, klinika_id) values (6000, 'Ispitivanje sluha', 1);
insert into cena (vrednost, opis, klinika_id) values (1300, 'Sportski pregled', 2);

insert into adminklinike (user_id, klinika_id) values (8, 1);

insert into zdravstvenikarton (dioptrija, alergija, visina, tezina, krvna_grupa) values ('0.2', 'Nema', '170', '80', 'Nulta');
insert into zdravstvenikarton (dioptrija, alergija, visina, tezina, krvna_grupa) values ('0', 'Nema', '185', '70', 'Nulta');
insert into zdravstvenikarton (dioptrija, alergija, visina, tezina, krvna_grupa) values ('-0.3', 'Nema', '165', '85', 'Nulta'); 
insert into zdravstvenikarton (dioptrija, alergija, visina, tezina, krvna_grupa) values ('0', 'Nema', '155', '60', 'Nulta'); 

insert into pacijent (zdravstveni_karton_id, user_id) values (1, 3);
insert into pacijent (zdravstveni_karton_id, user_id) values (2, 4);
insert into pacijent (zdravstveni_karton_id, user_id) values (1, 6);
insert into pacijent (zdravstveni_karton_id, user_id) values (2, 7);

insert into dijagnoza(sifra, naziv, dijagnoza) values ('123', 'Dijagnoza 1', 'Opis Dijagnoza 1');
insert into dijagnoza(sifra, naziv, dijagnoza) values ('145', 'Dijagnoza 2', 'Opis Dijagnoza 2');

insert into lek(sifra, naziv, opis) values ('123321', 'Lek Naziv 1', 'Lek opis 1');
insert into lek(sifra, naziv, opis) values ('123322', 'Lek Naziv 2', 'Lek opis 2');
insert into lek(sifra, naziv, opis) values ('123323', 'Lek Naziv 3', 'Lek opis 3');

insert into zahtevzazakazivanje (datum, vreme, pacijent_id, lekar_id) values ('1.1.2020','13:00',1,1);

insert into termin (datum) values ('11.02.2020');
insert into termin (datum) values ('12.02.2020');
insert into termin (datum) values ('13.02.2020');
insert into termin (datum) values ('14.02.2020');
insert into termin (datum) values ('15.02.2020');
insert into termin (datum) values ('16.02.2020');

insert into pregled (trajanje, sala_id, cena, lekar_id, pacijent_id, klinika_id, termin_id) values ('1h', 1, 1500.00, 1, 1, 1, 1);
insert into pregled (trajanje, sala_id, cena, lekar_id, klinika_id, termin_id) values ('2h', 2, 2000.00, 1, 1, 1);
insert into pregled (trajanje, sala_id, cena, lekar_id, klinika_id, termin_id) values ('1.5h', 3, 150.00, 1, 1, 2);
insert into pregled (trajanje, sala_id, cena, lekar_id, klinika_id, termin_id) values ('0.5h', 4, 200.00, 1, 1, 3);
insert into pregled (trajanje, sala_id, cena, lekar_id, klinika_id, termin_id) values ('1.2h', 1, 300.00, 1, 1, 4);
insert into pregled (trajanje, sala_id, cena, lekar_id, klinika_id, termin_id) values ('0.2h', 2, 4000.00, 1, 1, 5);

insert into izvestaj (pregled_id, dijagnoza_id, zdravstveni_karton_id, terapija) values (1, 1, 1, 'Mirovanje');

insert into izvestaj_lek (izvestaj_id, lek_id) values (1, 1);
insert into izvestaj_lek (izvestaj_id, lek_id) values (1, 2);