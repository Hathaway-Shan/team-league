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

export async function addPlayer(playerName, teamId) {
    const response = await client.from('players').insert({ name: playerName, team_id: teamId }).single();

    return response.data;
}

export async function removePlayer(playerId) {
    const response = await client.from('players').delete().eq('id', playerId).single();

    return response;
}