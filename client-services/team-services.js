import { client, checkResponse } from './client.js';

export async function getTeamsAndPlayers() {
    const response = await client.from('teams').select(`id, name, players(id, team_id, name)`);
    console.log(response.data);
    return response.data;
}

export async function getPlayers() {
    const response = await client
        .from('players')
        .select(`id, name, teams(id, name)`);
    return checkResponse(response);
}