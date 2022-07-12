// imports Marty
import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';

import createUser from './components/User.js';

//imports
import { getTeamsAndPlayers } from './client-services/team-services.js';
import createTeams from './components/Teams.js';



// State Marty
let user = null;

//State 
let teams = [];



// Action Handlers Marty
async function handlePageLoad() {
    user = getUser();
    protectPage(user);

    teams = await getTeamsAndPlayers();
    // players = await getPlayers();
    // console.log(players, teams);
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
const Teams = createTeams(document.querySelector('#team-list'));

function display() {
    User({ user });
    Teams({ teams });
}

handlePageLoad();
