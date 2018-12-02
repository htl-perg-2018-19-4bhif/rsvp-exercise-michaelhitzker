import {Request, Response} from 'express';
import {NOT_FOUND, BAD_REQUEST} from 'http-status-codes';
import {party} from './data';

export function getParty(req: Request, res: Response): void {
  res.send(party);
}