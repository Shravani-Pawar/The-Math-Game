
function addUser()
{
    localStorage.setItem("User1",document.getElementById("player1_name_input").value);
    localStorage.setItem("User2",document.getElementById("player2_name_input").value);
    window.location="mainfile.html";
}

function enter()
{
    btnn="<button class='btn' type='button' onclick='addUser()'>PLAY!</button>";
    document.getElementById("btn").innerHTML=btnn;
}