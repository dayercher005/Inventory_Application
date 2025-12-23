#! /usr/bin/env node

import { Client } from 'pg'
import dotenv from 'dotenv'

dotenv.config();

const SQL = `
CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  price DECIMAL(10, 2),
  categories VARCHAR ( 255 )
);

INSERT INTO games (name, price, categories) 
VALUES
  ('Counter Strike 2', '0.00', 'Shooter'),
  ('Dota 2', '0.00', 'MOBA'),
  ('Arc Raiders', '54.00', 'Shooter'),
  ('Bongo Cat', '0.00', 'Idler'),
  ('Path of Exile 2', '40.44', 'RPG'),
  ('Marvel Rivals', '0.00', 'Shooter'),
  ('PUBG: BATTLEGROUNDS', '0.00', 'Shooter'),
  ('Warframe', '0.00', 'Shooter'),
  ('Rust', '20.00', 'Survival'),
  ('Tomb Raider', '2.39', 'Survival'),
  ('Shell Diver', '3.93', 'Idler'),
  ('MageQuit', '5.80', 'MOBA'),
  ('Hades', '6.60', 'RPG')
`;


async function DatabaseLoader(){
  console.log("Populating database via script");
  const client = new Client({
    connectionString: process.env.DATABASE
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done");
}

DatabaseLoader();

