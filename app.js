// imports Marty
import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';

import createUser from './components/User.js';

//imports
import { getTeamsAndPlayers, removePlayer, addPlayer } from './client-services/team-services.js';
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

    teams = await getTeamsAndPlayers();
    display();
}

// Action Handlers 
async function handleAddPlayer(name, teamId) {

    await addPlayer(name, Number(teamId));

    //this is the line that fixes stuff we were sending up the player but not grabbing the updated data
    teams = await getTeamsAndPlayers();
    display();
}
// Components Marty
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

// Components
const Teams = createTeams(document.querySelector('#team-list'), { handleRemovePlayer });

//event listener and relevant component with scope
const addForm = document.querySelector('#add-player-form');

addForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(addForm);

    await handleAddPlayer(formData.get('name-input'), formData.get('team-dropdown'));
    addForm.reset();
});

function display() {
    User({ user });
    Teams({ teams });
}

handlePageLoad();
