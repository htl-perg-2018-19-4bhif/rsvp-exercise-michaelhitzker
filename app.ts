import * as express from 'express';
import * as basicAuth from 'express-basic-auth';
import {getParty} from './get-party';
import {registerGuest} from './register-guest';
import {getGuests} from './get-guests';

var server = express();
server.use(express.json());
server.get('/party', getParty);
server.use(basicAuth({
  users: { 'admin': 'supersecret' }
}))

server.post('/register', registerGuest);

server.get('guests', getGuests);

const port = 8080;
server.listen(port, function() {
  console.log(`API is listening on port ${port}`);
});