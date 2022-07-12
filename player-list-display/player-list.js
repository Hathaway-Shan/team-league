import { getPlayers } from '../client-services.js/team-services';


import { getUser } from '../services/auth-service.js';
import { protectPage } from '../utils.js';

let user = null;
let players = [];

async function handlePageLoad() {
    user = getUser();
    protectPage(user);
    players = await getPlayers();
    console.log(players);
    display();
}



function display() {

}

handlePageLoad();