import {Request, Response} from 'express';
import { CREATED, BAD_REQUEST } from 'http-status-codes';
//import {guests} from './data';

export function getGuests(req: Request, res: Response): void {
    console.log(req.headers);
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = new Buffer(b64auth, 'base64').toString().split(':');
    console.log(login+ " " +password);
    res.status(CREATED).send("test");
    //res.send(login+ " / " +password);
}