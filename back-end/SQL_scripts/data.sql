--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: booking_data; Type: TABLE DATA; Schema: users; Owner: postgres
--



--
-- Data for Name: vehicle_types; Type: TABLE DATA; Schema: vehicle; Owner: postgres
--

INSERT INTO vehicle.vehicle_types VALUES (1, 'hatchback', 4);
INSERT INTO vehicle.vehicle_types VALUES (2, 'sedan', 4);
INSERT INTO vehicle.vehicle_types VALUES (3, 'suv', 4);
INSERT INTO vehicle.vehicle_types VALUES (4, 'cruiser', 2);
INSERT INTO vehicle.vehicle_types VALUES (5, 'sports', 2);


--
-- Data for Name: vehicle_models; Type: TABLE DATA; Schema: vehicle; Owner: postgres
--

INSERT INTO vehicle.vehicle_models VALUES (1, 'Maruti swift', 1);
INSERT INTO vehicle.vehicle_models VALUES (2, 'Tata Tiago', 1);
INSERT INTO vehicle.vehicle_models VALUES (3, 'Honda City', 2);
INSERT INTO vehicle.vehicle_models VALUES (4, 'Homda Amaze', 2);
INSERT INTO vehicle.vehicle_models VALUES (5, 'Tata Nexon', 3);
INSERT INTO vehicle.vehicle_models VALUES (6, 'Mahindra Thar', 3);
INSERT INTO vehicle.vehicle_models VALUES (7, 'TVS Ronin', 4);
INSERT INTO vehicle.vehicle_models VALUES (8, 'Royal Enfield', 4);
INSERT INTO vehicle.vehicle_models VALUES (9, 'Yamaha R15', 5);
INSERT INTO vehicle.vehicle_models VALUES (10, 'Kawasaki Ninja 300', 5);


--
-- Name: booking_data_id_seq; Type: SEQUENCE SET; Schema: users; Owner: postgres
--

SELECT pg_catalog.setval('users.booking_data_id_seq', 1, false);


--
-- Name: vehicle_models_id_seq; Type: SEQUENCE SET; Schema: vehicle; Owner: postgres
--

SELECT pg_catalog.setval('vehicle.vehicle_models_id_seq', 10, true);


--
-- Name: vehicle_types_id_seq; Type: SEQUENCE SET; Schema: vehicle; Owner: postgres
--

SELECT pg_catalog.setval('vehicle.vehicle_types_id_seq', 5, true);


--
-- PostgreSQL database dump complete
--

