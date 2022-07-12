import { client } from './client.js';

export async function getTeamsAndPlayers() {
    const response = await client.from('teams').select(`id, name, players(id, team_id, name)`);
    return response.data;
}

export async function getPlayers() {
    const response = await client
        .from('players')
        .select(`id, name, teams(id, name)`);
    return response.data;
}