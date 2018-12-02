import { CREATED, BAD_REQUEST } from 'http-status-codes';
import { Request, Response } from 'express';
import { IGuest } from './data';

let guests: IGuest[] = [
  { id: 1, firstname: "Albert", lastname: "Einstein" }
];

export function registerGuest(req: Request, res: Response): void {
  if (!req.body.firstname || !req.body.lastname) {
    res.status(BAD_REQUEST).send('Missing mandatory member(s)');
  } else {
    let newGuestID = -1;
    if (req.body.id) {
      newGuestID = parseInt(req.body.id);
    } else {
      newGuestID = guests.length + 1;
    }

    let email ="";
    if(req.body.email){
      email = req.body.email;
    }

    if (!newGuestID) {
      res.status(BAD_REQUEST).send('ID has to be a numeric value');
    } else {
      const newGuest: IGuest = {
        id: newGuestID,
        firstname: req.body.firstname, lastname: req.body.lastname, email: email
      };
      guests.push(newGuest);
      res.status(CREATED).send(newGuest);
    }
  }
}