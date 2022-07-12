//create Player Object
export default function createPlayers(list) {
    return ({ players }) => {
        list.innerHTML = '';

        for (const player of players) {
            const item = Player({ player });
            list.append(item);
        }
    };
}

//what makes up the object player?
function Player({ player }) {
    const li = document.createElement('li');
    li.classList.add('player');

    const h2 = document.createElement('h2');
    h2.textContent = player.name;

    const p = document.createElement('p');
    p.textContent = player.teams.name;

    const ul = document.createElement('ul');
    ul.classList.add('team');

    //append and return the li that makes up the object
    li.append(h2, p, ul);
    return li;

}