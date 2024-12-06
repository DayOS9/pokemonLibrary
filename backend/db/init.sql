
DROP TABLE IF EXISTS pokemon;
DROP TABLE IF EXISTS color;
DROP TABLE IF EXISTS generation;
DROP TABLE IF EXISTS ability;
DROP TABLE IF EXISTS typing;
DROP TABLE IF EXISTS favorites;

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
    c_colorname text REFERENCES color(c_colorname),
    nickname text
);

CREATE TABLE IF NOT EXISTS favorites AS TABLE pokemon WITH NO DATA;

INSERT INTO typing (t_primarytype, t_list)
VALUES
('Normal', '{}'),
('Fire', '{}'),
('Water', '{}'),
('Electric', '{}'),
('Grass', '{}'),
('Ice', '{}'),
('Fighting', '{}'),
('Poison', '{}'),
('Ground', '{}'),
('Flying', '{}'),
('Psychic', '{}'),
('Bug', '{}'),
('Rock', '{}'),
('Ghost', '{}'),
('Dragon', '{}'),
('Dark', '{}'),
('Steel', '{}'),
('Fairy', '{}')
ON CONFLICT (t_primarytype) DO NOTHING;

INSERT INTO ability (a_primaryability, a_list)
VALUES
('Air-lock', '{}'),
('Arena-trap', '{}'),
('Battle-armor', '{}'),
('Blaze', '{}'),
('Cacophony', '{}'),
('Chlorophyll', '{}'),
('Clear-body', '{}'),
('Cloud-nine', '{}'),
('Color-change', '{}'),
('Compound-eyes', '{}'),
('Cursed-body', '{}'),
('Cute-charm', '{}'),
('Damp', '{}'),
('Drizzle', '{}'),
('Drought', '{}'),
('Early-bird', '{}'),
('Effect-spore', '{}'),
('Flame-body', '{}'),
('Flash-fire', '{}'),
('Forecast', '{}'),
('Guts', '{}'),
('Huge-power', '{}'),
('Hustle', '{}'),
('Hyper-cutter', '{}'),
('Illuminate', '{}'),
('Immunity', '{}'),
('Inner-focus', '{}'),
('Insomnia', '{}'),
('Intimidate', '{}'),
('Keen-eye', '{}'),
('Levitate', '{}'),
('Lightning-rod', '{}'),
('Limber', '{}'),
('Liquid-ooze', '{}'),
('Magma-armor', '{}'),
('Magnet-pull', '{}'),
('Marvel-scale', '{}'),
('Minus', '{}'),
('Natural-cure', '{}'),
('Oblivious', '{}'),
('Overgrow', '{}'),
('Own-tempo', '{}'),
('Pickup', '{}'),
('Plus', '{}'),
('Poison-point', '{}'),
('Pressure', '{}'),
('Pure-power', '{}'),
('Rain-dish', '{}'),
('Rock-head', '{}'),
('Rough-skin', '{}'),
('Run-away', '{}'),
('Sand-stream', '{}'),
('Sand-veil', '{}'),
('Serene-grace', '{}'),
('Shadow-tag', '{}'),
('Shed-skin', '{}'),
('Shell-armor', '{}'),
('Shield-dust', '{}'),
('Soundproof', '{}'),
('Speed-boost', '{}'),
('Static', '{}'),
('Stench', '{}'),
('Sticky-hold', '{}'),
('Sturdy', '{}'),
('Suction-cups', '{}'),
('Swarm', '{}'),
('Swift-swim', '{}'),
('Synchronize', '{}'),
('Thick-fat', '{}'),
('Torrent', '{}'),
('Trace', '{}'),
('Truant', '{}'),
('Vital-spirit', '{}'),
('Volt-absorb', '{}'),
('Water-absorb', '{}'),
('Water-veil', '{}'),
('White-smoke', '{}'),
('Wonder-guard', '{}')
ON CONFLICT (a_primaryability) DO NOTHING;

INSERT INTO generation (g_generationname, g_list)
VALUES
('I', '{}'),
('II', '{}'),
('III', '{}')
ON CONFLICT (g_generationname) DO NOTHING;

INSERT INTO color (c_colorname, c_list)
VALUES
('Red', '{}'),
('Blue', '{}'),
('Yellow', '{}'),
('Green', '{}'),
('Black', '{}'),
('Brown', '{}'),
('Purple', '{}'),
('Gray', '{}'),
('White', '{}'),
('Pink', '{}')
ON CONFLICT (c_colorname) DO NOTHING;

/*INSERT INTO pokemon (dexid, dexname, dexhp, dexattack, dexdefense, dexspecialattack, dexspecialdefense, dexspeed, dexweight, dexheight, t_primarytype, a_primaryability, g_generationname, c_colorname)
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
ON CONFLICT (dexid) DO NOTHING;*/

