// imports Marty
import { getUser, signOut } from '../services/auth-service.js';
import { protectPage } from '../utils.js';

import createUser from '../components/User.js';

//imports
import { getPlayers } from '../client-services/team-services.js';
import createPlayers from '../components/Players.js';



// State Marty
let user = null;

//State 
let players = [];



// Action Handlers Marty
async function handlePageLoad() {
    user = getUser();
    protectPage(user);

    players = await getPlayers();
    console.log(players);
    display();
}

async function handleSignOut() {
    signOut();
}

// Action Handlers 

// Components Marty
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

// Components
const Teams = createPlayers(document.querySelector('#player-list'));

function display() {
    User({ user });
    Teams({ players });
}

handlePageLoad();
