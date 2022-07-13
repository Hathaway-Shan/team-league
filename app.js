// imports Marty
import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';

import createUser from './components/User.js';

//imports
import { getTeamsAndPlayers, removePlayer } from './client-services/team-services.js';
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

    display();
}

async function handleSignOut() {
    signOut();
}
async function handleRemovePlayer(player) {
    await removePlayer(player.id);

    // const playerIndex = teams.players.indexOf(player);
    // teams.players.splice(playerIndex, 1);
    teams = await getTeamsAndPlayers();
    display();
}

// Action Handlers 

// Components Marty
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

// Components
const Teams = createTeams(document.querySelector('#team-list'), { handleRemovePlayer });
const teamDropdown = document.querySelector('#team-dropdown');
const removeForm = document.querySelector('#remove-player-form');
const addForm = document.querySelector('#add-player-form');

//Event listeners
//use change for dropdown menus
teamDropdown.addEventListener('change', (e) => {
    e.preventDefault;
    console.log(teamDropdown.value);
});

removeForm.addEventListener('submit', (e) => {
    e.preventDefault;


    console.log('remove player button');
});

addForm.addEventListener('submit', (e) => {
    e.preventDefault;
    console.log('add player button');
});

function display() {
    User({ user });
    Teams({ teams });
}

handlePageLoad();
