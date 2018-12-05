import * as express from 'express';
import * as basicAuth from 'express-basic-auth';
import * as loki from 'lokijs';
import {getParty} from './get-party';
import {registerGuest} from './register-guest';
import {getGuests} from './get-guests';
import { CREATED, BAD_REQUEST } from 'http-status-codes';
import { IGuest } from './data';

const db = new loki(__dirname + '/db.dat', {autosave: true, autoload: true, autoloadCallback : loadHandler});

const server = express();
const  auth = basicAuth({
  users: { 'admin': 'supersecret' }
});



function loadHandler() {
  // if database did not exist it will be empty so I will intitialize here
  let guests = db.getCollection('guests');
  if (!guests) {
    console.log("not there");
    guests = db.addCollection('guests');
  }

  server.use(express.json());
  server.get('/party', getParty);


  server.post('/register', (req, res) =>{
    registerGuest(req,res,guests);
  });

  server.get('/guests', auth, (req, res) =>{
    getGuests(req,res,guests);
  });

  const port = 8081;
  server.listen(port, function() {
    console.log(`API is listening on port ${port}`);
  });
}