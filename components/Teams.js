
//create Team Object 
export default function createTeams(list) {
    return ({ teams }) => {
        list.innerHTML = '';

        for (const team of teams) {
            const item = Team({ team });
            list.append(item);
        }
    };
}

//What makes up the object team?
function Team({ team }) {

    const li = document.createElement('li');
    li.classList.add('team');

    const h2 = document.createElement('h2');
    h2.textContent = team.name;

    const ul = document.createElement('ul');
    ul.classList.add('players');

    //Create Player Object within team object
    for (const player of team.players) {

        const item = Player(player);
        ul.append(item);
    }

    //append and return the li that makes up the object team
    li.append(h2, ul);
    return li;
}

//what makes up the object player?
function Player(player) {
    const li = document.createElement('li');
    li.classList.add('player');

    const h3 = document.createElement('h3');
    h3.textContent = player.name;

    li.append(h3);
    return li;
}

