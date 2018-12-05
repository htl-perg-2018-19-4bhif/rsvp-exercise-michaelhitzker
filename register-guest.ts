import { CREATED, BAD_REQUEST } from 'http-status-codes';
import { Request, Response } from 'express';
import { IGuest } from './data';

let guests: IGuest[] = [
  { id: 1, firstname: "Albert", lastname: "Einstein" }
];

export function registerGuest(req: Request, res: Response, guests: Collection<any>): void {
  if (!req.body.firstname || !req.body.lastname) {
    res.status(BAD_REQUEST).send('Missing mandatory member(s)');
  } else {
    let newGuestID = -1;
    if (req.body.id) {
      newGuestID = parseInt(req.body.id);
    } else {
      newGuestID = guests.count() + 1;
    }

    let email ="";
    if(req.body.email){
      email = req.body.email;
    }

    if (!newGuestID) {
      res.status(BAD_REQUEST).send('ID has to be a numeric value');
    } else if(guests.count() >= 10){
      res.status(BAD_REQUEST).send('Sorry, we can\'t invite more than 10 people :/ :/');
    }else{
        let newGuest = {id: newGuestID,firstName: req.body.firstname, lastName: req.body.lastname, email: email}
        newGuest = guests.insert(newGuest);
        res.status(CREATED).send(newGuest);
    }
  }
}