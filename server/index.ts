import 'reflect-metadata';

import express from "express";
import {Request, Response} from "express";
import bodyParser from "body-parser";
import {createConnection} from "typeorm";
import next from "next";
import {Users} from "./entity/Users"
import {Results} from "./entity/Results"
import {Rooms} from "./entity/Rooms"

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
    .then(() => createConnection({
        "name": "santa-a-a",
        "type": "mysql",
        "host": "q2gen47hi68k1yrb.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
        "port": 3306,
        "username": "yo8kw7nz9nhrm5yr",
        "password": "r2qkwqm9u24rjqvo",
        "database": "i14hqjuugwjrxipn",
        "synchronize": true,
        "logging": false,
        "entities": [Users, Rooms, Results],
    }))
    .then(connection => {
        const userRepository = connection.getRepository(Users);
        const resRepository = connection.getRepository(Results);
        const roomsRepository = connection.getRepository(Rooms);

        // create and setup express app
        const server = express();
        server.use(bodyParser.json());

        // register routes

        server.get("/api/users", async function (_req: Request, res: Response) {
            const users = await userRepository.find();
            res.json(users);
        });
        server.get("/api/rooms", async function (_req: Request, res: Response) {
            const rooms = await roomsRepository.find();
            res.json(rooms);
        });
        server.get("/api/results", async function (_req: Request, res: Response) {
            const results = await resRepository.find();
            res.json(results);
        });

        server.all('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(process.env.PORT || 3000);
    }).catch(error => console.log(error));

