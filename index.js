/***** Deliverable 1 *****/
// 1. get the header element/node
// 2. set an event/listener on the node
// 3. manipulate some code to it toggles the header color when we hover over the header
document.addEventListener("DOMContentLoaded", function(e){
const header = document.querySelector("#header");
// console.log("Here's your header:", header)

    
/***** Deliverable 2 *****/

header.style.color = "red";
/***** Deliverable 3 *****/

console.log("PLAYERS array looks like this:", PLAYERS)
// PLAYERS.forEach(player => console.log(player));
for (let player of PLAYERS) {
    const playerLi = document.createElement('li')
    playerLi.classList.add("player")
    playerLi.id = player.number

    playerLi.innerHTML = `
    <h3>Name: ${player.name}</h3>
    <h4>Number: ${player.number}</h4>
    <h4>Nickname: ${player.nickname}</h4>
    <img alt="" src="${player.photo}"></img>`

    const playerList = document.querySelector('.player-container')
    playerList.append(playerLi);

}

/***** Deliverable 4 *****/
// find humber seven and kick him out!
const manch = document.getElementById("7");
manch.remove()
})