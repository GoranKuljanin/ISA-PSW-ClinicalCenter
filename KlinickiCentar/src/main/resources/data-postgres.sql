insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('Goranr', '12345678', 'Kuljanin', 'goku@gmail.com', 'DJ', 'Novi Sad', 'RS', '064', 'ADMIN_K_C');
insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('Milos', '12345678', 'Majstorovic', 'milos@gmail.com', 'Kosovska 1', 'Novi Sad', 'RS', '0643344', 'User');
insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('Ana', '12345678', 'Andric', 'ana@gmail.com', 'Koste R. 2', 'Novi Sad', 'RS', '0641234', 'PACIJENT');
insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('Vesna', '12345678', 'Vesnaa', 'vesna@gmail.com', 'S. Bajica 4', 'Novi Sad', 'RS', '0644455', 'PACIJENT');
insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('Marko', '1', 'Markovic', 'lekar', 'Milsevska 7', 'Novi Sad', 'RS', '0645566', 'LEKAR');
insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('Uros', '12345678', 'Urosevic', 'uros@gmail.com', 'Micurinova 6', 'Ruma', 'RS', '0641122', 'PACIJENT');
insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('Laza', '12345678', 'Lazic', 'laza@gmail.com', 'Cankareva 4', 'S. Mitrovica', 'RS', '0645566', 'PACIJENT');
insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('Admin', '1', 'Klinike', 'adminklinike', 'Kopernikova 73', 'S. Mitrovica', 'RS', '0647744', 'ADMIN_K');
insert into users (username, password, lastname, email, adress, city, country, phonenumber, uloga) values ('Nemanja', '12345678', 'Pavlovic', 'nemanja@gmail.com', 'Panonska 17', 'Novi Sad', 'RS', '0641287', 'LEKAR');

insert into klinika (naziv, adresa, opis) values ('Euromedic', 'Bulervar Oslobodjenja 30', 'Na jednom mestu obezbedjena Vam je najkvalitetnija medicinska pomoc od strane vodecih specijalista i subspecijalista iz gotovo svih oblasti savremene medicine.');
insert into klinika (naziv, adresa, opis) values ('Sirius Medical', 'Ilije Ognjanovica 10', 'Nas strucni tim lekara, tehnicara i saradnika kao i celokupno osoblje ce vas srdacno docekati u prijatnom ambijentu “Sirius Medical” bolnice , biti vam uvek na usluzi i omoguciti najvisi nivo nege pacijenata.');


insert into lekar (specijalizacija, radnovreme, opis, slika, user_id, klinika_id) values ('Hirurg', '8:00-16:00', 'Vrhunski strucnjak, poznat po minimalno invazivnim operacijama stitaste zlezde, kao i parastitastih zlezda, sa brzim i lakim oporavkom.','../../../../../assets/lekari/lekar1.jpg',5 , 1);
insert into lekar (specijalizacija, radnovreme, opis, slika, user_id, klinika_id) values ('Kardiolog', '6:00-14:00', 'Svestrani i vrsni kardiolog, angazovan ne samo u Srbiji, vec i u regionu.','../../../../../assets/lekari/lekar2.jpg',9 , 1);


insert into sala (name,klinika_id) values ('Ordinacija',1);
insert into sala (name,klinika_id) values ('Laboratorija',1);
insert into sala (name,klinika_id) values ('ORL',1);
insert into sala (name,klinika_id) values ('Radiologija',1);

insert into cena (vrednost, opis, klinika_id) values (4000, 'Specialisticki pregled', 1);
insert into cena (vrednost, opis, klinika_id) values (3000, 'Kontrolni pregled', 1);
insert into cena (vrednost, opis, klinika_id) values (2500, 'Audiometrija', 1);
insert into cena (vrednost, opis, klinika_id) values (1000, 'Timpanometrija', 1);
insert into cena (vrednost, opis, klinika_id) values (6000, 'Ispitivanje sluha', 1);
insert into cena (vrednost, opis, klinika_id) values (1300, 'Sportski pregled', 2);

insert into adminklinike (user_id, klinika_id) values (8, 1);


insert into zdravstvenikarton (dijagnoza, terapija) values ('Pacijent je hospitalizovan zbog preloma vrata butne kosti. U anamnezi navodi da
je pre sest meseci lecen od upale pluca i da ima duodenalni ulkus.', 'Mirovanje, antibiotici.');
insert into zdravstvenikarton (dijagnoza, terapija) values ('Pacijent je ujutro imao jaku bol u grudima zbog cega je bio primljen u bolnicu. EKG
i analiza enzima su potvrdili da pacijent ima infarkt miokarda', 'Kiseonicna terapija');

insert into pacijent (zdravstveni_karton_id, user_id) values (1, 3);
insert into pacijent (zdravstveni_karton_id, user_id) values (2, 4);
insert into pacijent (zdravstveni_karton_id, user_id) values (1, 6);
insert into pacijent (zdravstveni_karton_id, user_id) values (2, 7);

insert into zahtevzazakazivanje (datum, vreme, pacijent_id, lekar_id) values ('1.1.2020','13:00',1,1);

insert into termin (datum,klinika_id) values ('Datum1',1);

insert into pregled (datum, trajanje, sala_id, cena, lekar_id, pacijent_id, zdravstveni_karton_id, dijagnoza, terapija) values ('25.12.2019', '1h', 1, 1500.00, 1, 1, 1, 'Pacijent je primljen zbog epileptickog napada koji se pojavio prvi put i nije
prethodno lecen.', 'Mirovanje');
insert into pregled (datum, trajanje, sala_id, cena, lekar_id) values ('14.12.2019', '11h', 1, 1500.00, 1);

