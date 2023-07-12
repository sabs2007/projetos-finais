function createGame(player1, hour, player2){
    return`
    <li>
    <img src="times1/icon-${player1}.png"alt="bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="times1/icon-${player2}.png"alt="bandeira do ${player2}"/>
    `
}
let delay= -0.4;
function creatCard(date, day, games){
    delay = delay + 0.4;
    return`
    <div class="card" style="animation-delay:${delay}s">
    <h2>${date} <span>${day} </span></h2>
    <ul>
    ${games}
    </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML=
creatCard("05/07", "quarta-feira", createGame("corinthians", "21:00", "palmeiras"))+creatCard("10/07", "segunda-feira", createGame("atletico", "20:00", "bahia"))+creatCard("12/07", "quarta-feira", createGame("SP", "21:00", "vasco"))+creatCard("14/07", "sextA-feira", createGame("inter", "18:00", "santos"))+creatCard("16/07", "domingo", createGame("bota", "16:00", "flamengo"))+creatCard("20/07", "quinta-feira", createGame("cruzeiro", "21:00", "gremio"))
