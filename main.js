
player1=localStorage.getItem("User1");
player2=localStorage.getItem("User2");

document.getElementById("mmbl").innerHTML=player1+":Asks";
document.getElementById("mmbl1").innerHTML=player2+":Answers";


document.getElementById("score1").innerHTML=player1+":0";
document.getElementById("score2").innerHTML=player2+":0";


function send()
{   
    
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    finalresult= parseInt(number1)*parseInt(number2);
    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box="<br>Answer:<input type='text' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button><br><br>";
    row=question_number+input_box+check_button;
    document.getElementById("output!").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";

}