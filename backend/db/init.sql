CREATE TABLE IF NOT EXISTS typing (
    t_primarytype text PRIMARY KEY,
    t_list int[]
);

CREATE TABLE IF NOT EXISTS ability (
    a_primaryability text PRIMARY KEY,
    a_list int[]
);

CREATE TABLE IF NOT EXISTS generation (
    g_generationname text PRIMARY KEY,
    g_list int[]
);

CREATE TABLE IF NOT EXISTS color (
    c_colorname text PRIMARY KEY,
    c_list int[]
);

CREATE TABLE IF NOT EXISTS pokemon (
    dexid int PRIMARY KEY,
    dexname text,
    dexhp int,
    dexattack int,
    dexdefense int,
    dexspecialattack int,
    dexspecialdefense int,
    dexspeed int,
    dexweight int,
    dexheight int,
    t_primarytype text REFERENCES typing(t_primarytype),
    a_primaryability text REFERENCES ability(a_primaryability),
    g_generationname text REFERENCES generation(g_generationname),
    c_colorname text REFERENCES color(c_colorname)
);

INSERT INTO typing (t_primarytype, t_list)
VALUES
('fire', '{4, 157, 219}'),
('water', '{54, 272}'),
('rock', '{95, 142}'),
('ground', '{105, 383}'),
('normal', '{133}'),
('psychic', '{196}'),
('dark', '{197}'),
('grass', '{275, 331}'),
('dragon', '{371}')
ON CONFLICT (t_primarytype) DO NOTHING;

INSERT INTO ability (a_primaryability, a_list)
VALUES
('blaze', '{4, 157}'),
('damp', '{54}'),
('rock-head', '{95, 105, 142, 371}'),
('run-away', '{133}'),
('synchronize', '{196, 197}'),
('magma-armor', '{219}'),
('swift-swim', '{272}'),
('chlorophyll', '{275}'),
('sand-veil', '{331}'),
('drought', '{383}')
ON CONFLICT (a_primaryability) DO NOTHING;

INSERT INTO generation (g_generationname, g_list)
VALUES
('generation-i', '{4, 54, 95, 105, 133, 142}'),
('generation-ii', '{157, 196, 197, 219}'),
('generation-iii', '{272, 275, 331, 371, 383}')
ON CONFLICT (g_generationname) DO NOTHING;

INSERT INTO color (c_colorname, c_list)
VALUES
('red', '{4, 219, 383}'),
('yellow', '{54, 157}'),
('gray', '{95}'),
('brown', '{105, 133, 275}'),
('purple', '{142, 196}'),
('black', '{197}'),
('green', '{272, 331}'),
('blue', '{371}')
ON CONFLICT (c_colorname) DO NOTHING;

INSERT INTO pokemon (dexid, dexname, dexhp, dexattack, dexdefense, dexspecialattack, dexspecialdefense, dexspeed, dexweight, dexheight, t_primarytype, a_primaryability, g_generationname, c_colorname)
VALUES 
(4, 'charmander', 39, 52, 43, 60, 50, 65, 85, 6, 'fire', 'blaze', 'generation-i', 'red'),
(54, 'psyduck', 50, 52, 48, 65, 50, 55, 196, 8, 'water', 'damp', 'generation-i', 'yellow'),
(95, 'onix', 35, 45, 160, 30, 45, 70, 2100, 88, 'rock', 'rock-head', 'generation-i', 'gray'),
(105, 'marowak', 60, 80, 110, 50, 80, 45, 450, 10, 'ground', 'rock-head', 'generation-i', 'brown'),
(133, 'eevee', 55, 55, 50, 45, 65, 55, 65, 3, 'normal', 'run-away', 'generation-i', 'brown'),
(142, 'aerodactyl', 80, 105, 65, 60, 75, 130, 590, 18, 'rock', 'rock-head', 'generation-i', 'purple'),
(157, 'typhlosion', 78, 85, 78, 109, 85, 100, 795, 17, 'fire', 'blaze', 'generation-ii', 'yellow'),
(196, 'espeon', 65, 65, 60, 130, 95, 110, 265, 9, 'psychic', 'synchronize', 'generation-ii', 'purple'),
(197, 'umbreon', 95, 65, 110, 60, 130, 65, 270, 10, 'dark', 'synchronize', 'generation-ii', 'black'),
(219, 'magcargo', 60, 50, 120, 90, 80, 30, 550, 8, 'fire', 'magma-armor', 'generation-ii', 'red'),
(272, 'ludicolo', 80, 70, 70, 90, 100, 70, 550, 15, 'water', 'swift-swim', 'generation-iii', 'green'),
(275, 'shiftry', 90, 100, 60, 90, 60, 80, 596, 13, 'grass', 'chlorophyll', 'generation-iii', 'brown'),
(331, 'cacnea', 50, 85, 40, 85, 40, 35, 513, 4, 'grass', 'sand-veil', 'generation-iii', 'green'),
(371, 'bagon', 45, 75, 60, 40, 30, 50, 421, 6, 'dragon', 'rock-head', 'generation-iii', 'blue'),
(383, 'groudon', 100, 150, 140, 100, 90, 90, 9500, 35, 'ground', 'drought', 'generation-iii', 'red')
ON CONFLICT (dexid) DO NOTHING;

