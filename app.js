import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';
import createUser from './components/User.js';

// State Marty
let user = null;

//State 
let teams = [];

// Action Handlers Marty
async function handlePageLoad() {
    user = getUser();
    protectPage(user);

    display();
}

async function handleSignOut() {
    signOut();
}

//Action Handlers 

// Components Marty
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

// Components

function display() {
    User({ user });

}

handlePageLoad();
