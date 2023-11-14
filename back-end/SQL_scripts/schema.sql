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
-- Name: users; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA users;


ALTER SCHEMA users OWNER TO postgres;

--
-- Name: vehicle; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA vehicle;


ALTER SCHEMA vehicle OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: booking_data; Type: TABLE; Schema: users; Owner: postgres
--

CREATE TABLE users.booking_data (
    id integer NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    model_id integer NOT NULL,
    from_date timestamp without time zone,
    to_date timestamp without time zone,
    booking_time timestamp with time zone DEFAULT timezone('UTC'::text, now())
);


ALTER TABLE users.booking_data OWNER TO postgres;

--
-- Name: booking_data_id_seq; Type: SEQUENCE; Schema: users; Owner: postgres
--

CREATE SEQUENCE users.booking_data_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users.booking_data_id_seq OWNER TO postgres;

--
-- Name: booking_data_id_seq; Type: SEQUENCE OWNED BY; Schema: users; Owner: postgres
--

ALTER SEQUENCE users.booking_data_id_seq OWNED BY users.booking_data.id;


--
-- Name: vehicle_models; Type: TABLE; Schema: vehicle; Owner: postgres
--

CREATE TABLE vehicle.vehicle_models (
    id integer NOT NULL,
    vehicle_model text,
    vehicle_type_id integer
);


ALTER TABLE vehicle.vehicle_models OWNER TO postgres;

--
-- Name: vehicle_models_id_seq; Type: SEQUENCE; Schema: vehicle; Owner: postgres
--

CREATE SEQUENCE vehicle.vehicle_models_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE vehicle.vehicle_models_id_seq OWNER TO postgres;

--
-- Name: vehicle_models_id_seq; Type: SEQUENCE OWNED BY; Schema: vehicle; Owner: postgres
--

ALTER SEQUENCE vehicle.vehicle_models_id_seq OWNED BY vehicle.vehicle_models.id;


--
-- Name: vehicle_types; Type: TABLE; Schema: vehicle; Owner: postgres
--

CREATE TABLE vehicle.vehicle_types (
    id integer NOT NULL,
    vehicle_type text NOT NULL,
    wheels integer NOT NULL
);


ALTER TABLE vehicle.vehicle_types OWNER TO postgres;

--
-- Name: vehicle_types_id_seq; Type: SEQUENCE; Schema: vehicle; Owner: postgres
--

CREATE SEQUENCE vehicle.vehicle_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE vehicle.vehicle_types_id_seq OWNER TO postgres;

--
-- Name: vehicle_types_id_seq; Type: SEQUENCE OWNED BY; Schema: vehicle; Owner: postgres
--

ALTER SEQUENCE vehicle.vehicle_types_id_seq OWNED BY vehicle.vehicle_types.id;


--
-- Name: booking_data id; Type: DEFAULT; Schema: users; Owner: postgres
--

ALTER TABLE ONLY users.booking_data ALTER COLUMN id SET DEFAULT nextval('users.booking_data_id_seq'::regclass);


--
-- Name: vehicle_models id; Type: DEFAULT; Schema: vehicle; Owner: postgres
--

ALTER TABLE ONLY vehicle.vehicle_models ALTER COLUMN id SET DEFAULT nextval('vehicle.vehicle_models_id_seq'::regclass);


--
-- Name: vehicle_types id; Type: DEFAULT; Schema: vehicle; Owner: postgres
--

ALTER TABLE ONLY vehicle.vehicle_types ALTER COLUMN id SET DEFAULT nextval('vehicle.vehicle_types_id_seq'::regclass);


--
-- Name: booking_data booking_data_pkey; Type: CONSTRAINT; Schema: users; Owner: postgres
--

ALTER TABLE ONLY users.booking_data
    ADD CONSTRAINT booking_data_pkey PRIMARY KEY (id);


--
-- Name: vehicle_models vehicle_models_pkey; Type: CONSTRAINT; Schema: vehicle; Owner: postgres
--

ALTER TABLE ONLY vehicle.vehicle_models
    ADD CONSTRAINT vehicle_models_pkey PRIMARY KEY (id);


--
-- Name: vehicle_types vehicle_types_pkey; Type: CONSTRAINT; Schema: vehicle; Owner: postgres
--

ALTER TABLE ONLY vehicle.vehicle_types
    ADD CONSTRAINT vehicle_types_pkey PRIMARY KEY (id);


--
-- Name: booking_data booking_data_model_id_fkey; Type: FK CONSTRAINT; Schema: users; Owner: postgres
--

ALTER TABLE ONLY users.booking_data
    ADD CONSTRAINT booking_data_model_id_fkey FOREIGN KEY (model_id) REFERENCES vehicle.vehicle_models(id) NOT VALID;


--
-- Name: vehicle_models vehicle_models_vehicle_type_id_fkey; Type: FK CONSTRAINT; Schema: vehicle; Owner: postgres
--

ALTER TABLE ONLY vehicle.vehicle_models
    ADD CONSTRAINT vehicle_models_vehicle_type_id_fkey FOREIGN KEY (vehicle_type_id) REFERENCES vehicle.vehicle_types(id);


--
-- PostgreSQL database dump complete
--

