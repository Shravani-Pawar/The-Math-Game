
function addUser()
{
    localStorage.setItem("User1",document.getElementById("player1_name_input").value);
    localStorage.setItem("User2",document.getElementById("player2_name_input").value);
    window.location="main_page.html";
}