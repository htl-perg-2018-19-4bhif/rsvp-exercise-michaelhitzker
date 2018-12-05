import {Request, Response} from 'express';
import { ACCEPTED } from 'http-status-codes';

export function getGuests(req: Request, res: Response, guests: Collection<any>): void {
    res.send(guests.find());
    //res.send(login+ " / " +password);
}