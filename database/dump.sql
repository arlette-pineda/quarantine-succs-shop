--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

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

ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
ALTER TABLE ONLY public."cartItems" DROP CONSTRAINT "cartItems_pkey";
ALTER TABLE public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE public."products_productId_seq";
DROP TABLE public.products;
DROP SEQUENCE public."orders_orderId_seq";
DROP TABLE public.orders;
DROP SEQUENCE public."carts_cartId_seq";
DROP TABLE public.carts;
DROP SEQUENCE public."cartItems_cartItemId_seq";
DROP TABLE public."cartItems";
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "firstName" text NOT NULL,
    "lastName" text NOT NULL,
    "addressLine1" text NOT NULL,
    "addressLine2" text,
    city text NOT NULL,
    state text NOT NULL,
    "zipCode" text NOT NULL,
    "creditCard" text NOT NULL,
    month text NOT NULL,
    year text NOT NULL,
    cvv text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
1	11	2	2595
2	14	2	2595
3	15	4	999
4	16	2	2595
5	17	3	2900
6	18	1	2999
7	19	5	9900
8	20	4	999
9	21	2	2595
10	22	6	830
11	23	1	2999
12	24	1	2999
13	25	6	830
14	26	2	2595
15	27	6	830
16	28	4	999
17	29	3	2900
18	30	3	2900
19	31	1	2999
20	32	2	2595
21	33	1	2999
22	34	3	2900
23	35	2	2595
24	36	3	2900
25	37	6	830
26	38	1	2999
27	39	2	2595
28	40	4	999
29	41	1	2999
30	42	2	2595
31	43	4	999
32	44	2	2595
33	45	1	2999
34	46	3	2900
35	47	2	2595
36	48	1	2999
37	49	5	9900
38	50	5	9900
39	51	4	999
40	52	6	830
41	53	1	2999
42	54	5	9900
43	55	4	999
44	56	2	2595
45	57	2	2595
46	58	1	2999
47	59	6	830
48	60	2	2595
49	61	1	2999
50	62	6	830
51	63	3	2900
52	64	6	830
53	65	5	9900
54	66	2	2595
55	67	2	2595
56	68	2	2595
57	69	5	9900
58	70	6	830
59	71	4	999
60	72	6	830
61	73	1	2999
62	74	6	830
63	75	4	999
64	76	3	2900
65	77	5	9900
66	78	6	830
67	79	1	2999
68	80	3	2900
69	81	6	830
70	82	6	830
71	83	3	2900
72	84	3	2900
73	85	4	999
74	86	2	2595
75	87	3	2900
76	88	1	2999
77	89	2	2595
78	90	2	2595
79	91	1	2999
80	92	1	2999
81	93	1	2999
82	94	1	2999
83	95	1	2999
84	96	1	2999
85	97	3	2900
86	98	2	2595
87	99	1	2999
88	100	1	2999
89	101	2	2595
90	102	2	2595
91	103	3	2900
92	104	2	2595
93	105	2	2595
94	106	1	2999
95	107	1	2999
96	108	2	2595
97	109	1	2999
98	110	3	2900
99	111	3	2900
100	112	3	2900
101	113	3	2900
102	114	3	2900
103	115	3	2900
104	116	1	2999
105	117	2	2595
106	118	6	830
107	119	2	2595
108	120	1	2999
109	121	2	2595
110	122	1	2999
111	123	2	2595
112	124	4	999
113	125	6	830
114	126	1	2999
115	127	4	999
116	128	5	9900
117	129	1	2999
118	130	6	830
119	131	2	699
120	132	2	699
121	133	6	599
122	134	2	699
123	135	3	799
124	136	6	599
125	137	5	899
126	138	3	799
127	139	5	899
128	140	3	799
129	141	6	599
130	142	3	799
131	143	2	699
132	144	2	699
133	145	2	699
134	146	3	799
135	147	6	599
136	148	6	599
137	149	3	799
138	150	1	699
139	151	2	699
140	152	2	699
141	153	2	699
142	154	3	799
143	155	3	799
144	156	5	899
145	157	5	899
146	158	5	899
147	159	5	899
148	160	5	899
149	161	5	899
150	162	5	899
151	163	2	699
152	164	2	699
153	165	2	699
154	166	2	699
155	167	2	699
156	168	2	699
157	169	2	699
158	170	2	699
159	171	2	699
160	172	2	699
161	173	2	699
162	174	2	699
163	175	2	699
164	176	2	699
165	177	2	699
166	178	2	699
167	179	2	699
168	180	2	699
169	181	2	699
170	182	2	699
171	183	2	699
172	184	2	699
173	185	2	699
174	186	2	699
175	187	2	699
176	188	2	699
177	189	2	699
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
135	2020-05-28 23:43:42.853913+00
136	2020-06-08 23:42:24.653909+00
137	2020-06-09 01:51:12.72101+00
138	2020-06-09 01:51:50.951887+00
139	2020-06-09 23:24:17.192121+00
140	2020-06-09 23:56:08.017107+00
141	2020-06-10 23:49:26.489187+00
142	2020-06-11 05:47:14.346589+00
143	2020-06-11 23:51:54.781732+00
144	2020-06-11 23:52:35.52269+00
145	2020-06-11 23:53:41.179135+00
146	2020-06-11 23:58:04.666846+00
147	2020-06-12 00:03:52.348065+00
148	2020-06-12 00:03:55.684858+00
149	2020-06-12 22:34:40.588112+00
150	2020-06-14 22:32:06.611198+00
151	2020-06-14 23:25:47.461085+00
152	2020-06-14 23:26:00.30882+00
153	2020-06-14 23:26:04.280375+00
154	2020-06-14 23:27:12.619906+00
155	2020-06-14 23:28:51.613731+00
156	2020-06-14 23:30:01.337+00
157	2020-06-14 23:30:07.086566+00
158	2020-06-14 23:30:10.443206+00
159	2020-06-14 23:30:12.290025+00
160	2020-06-14 23:30:13.822188+00
161	2020-06-14 23:30:16.312549+00
162	2020-06-14 23:30:18.587894+00
163	2020-06-14 23:33:14.488833+00
164	2020-06-14 23:33:49.020236+00
165	2020-06-14 23:36:36.686367+00
166	2020-06-14 23:37:20.461659+00
167	2020-06-14 23:40:51.858388+00
168	2020-06-14 23:44:59.451213+00
169	2020-06-14 23:45:33.857775+00
170	2020-06-14 23:47:20.618504+00
171	2020-06-14 23:47:34.659915+00
172	2020-06-14 23:48:51.551498+00
173	2020-06-14 23:49:15.06564+00
174	2020-06-14 23:50:05.126992+00
175	2020-06-14 23:50:32.604666+00
176	2020-06-14 23:51:11.042105+00
177	2020-06-14 23:52:40.391001+00
178	2020-06-14 23:52:43.111575+00
179	2020-06-14 23:53:23.028199+00
180	2020-06-14 23:54:13.621659+00
181	2020-06-14 23:54:16.084864+00
182	2020-06-14 23:55:08.376916+00
183	2020-06-14 23:59:36.637283+00
184	2020-06-14 23:59:39.345952+00
185	2020-06-14 23:59:41.240022+00
186	2020-06-14 23:59:45.298249+00
187	2020-06-15 22:00:19.442597+00
188	2020-06-15 22:00:24.132373+00
189	2020-06-15 22:00:26.076904+00
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", "firstName", "lastName", "addressLine1", "addressLine2", city, state, "zipCode", "creditCard", month, year, cvv, "createdAt") FROM stdin;
1	136	fghdfrg	fbghdrgte	fgret	ergter	fdgert	California	dfger	dfgher4	May	2024	dfgertg	2020-06-08 23:42:54.134696+00
2	137	fghjf	fghf	fghfg	gfhfg	fgbhfg	Arizona	fghbf	fghfhf	April	2024	fghfgthft	2020-06-09 01:51:34.440851+00
3	141	klj	jklj	jlh	jl,j	jlh	Arizona	jkljn	jlhj	March	2023	k;j	2020-06-10 23:50:05.419815+00
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
1	Pachyveria Haagei	699	/images/pachyveria-haagei.jpg	Tender succulent with rounded pastel green leaves.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
2	Graptoveria Bashful	899	/images/graptoveria-bashful.png	Thick chubby and minty green leaves that turn a bright translucent pink from direct sunlight and cool temperatures.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
3	Graptoveria Moonglow	599	/images/graptoveria-moonglow.jpg	Large thick greenish-ivory leaves and small upright orange-yellow flowers during bloom.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
4	Echeveria Gray Curl	899	/images/echeveria-gray-curl.jpg	Leaves are frilly-edged and blue-green.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
5	Moonstones Pachyphytum	1099	/images/moonstones-pachyphytum.png	Pinkish chubby pebble-like leaves covered with a thin layer of white powder. Highly sought after.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
6	Echeveria Raindrop	899	/images/echeveria-raindrop.jpg	Leaves have a single globular blue-green bump in the middle that develops with age.	These bumps, similar to a water droplet, are what give this unique plant its name.
7	Echeveria Agavoides	699	/images/echeveria-agoidas.jpg	Forms rosettes of triangular fleshy evergreen leaves in pale green with red margins.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
8	Echeveria Doris Taylor	799	/images/echeveria-doris-taylor.jpg	Known as Woolly Rose leaves are pale green with dense white hairs.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
9	Crinoline Ruffles	699	/images/crinoline-ruffles.png	Gorgeous green rosettes with ruffled pink along the edges.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 177, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 189, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 3, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

