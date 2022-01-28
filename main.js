
player1=localStorage.getItem("User1");
player2=localStorage.getItem("User2");

player1_score = 0;
player2_score = 0;

document.getElementById("ans").innerHTML=player2+":Answers";
document.getElementById("questions").innerHTML=player1+":Asks";


document.getElementById("player1_score").innerHTML=player1+":"+player1_score;
document.getElementById("player2_score").innerHTML=player2+":"+player2_score;


function send()
{   
    
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    finalresult= parseInt(number1)*parseInt(number2);
    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box="<br>Answer:<input type='text' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()' type='button' >Check</button><br><br>";
    row=question_number+input_box+check_button;
    document.getElementById("output!").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";

}


question_turn="player1";
answer_turn="player2";
function check(){
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer==finalresult)
    {
        if (answer_turn=="player1"){
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1+":"+player1_score;
        }
        else
        {
            
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2+":"+player2_score;
        }
    }
    else{
        if (answer_turn=="player1"){
            player1_score = player1_score -1;
            document.getElementById("player1_score").innerHTML = player1+":"+player1_score;
        }
        else
        {
            
			player2_score = player2_score -1;
		    document.getElementById("player2_score").innerHTML = player2+":"+player2_score;
        }
    }
    
    

    if (question_turn == "player1")
    {
        question_turn = "player2"
		document.getElementById("questions").innerHTML = player2 + ":Asks";
    }
    else{
        question_turn = "player1"
		document.getElementById("questions").innerHTML = player1+":Asks" ;
    }

    if(answer_turn==player1){
        answer_turn="player2"
        
		document.getElementById("ans").innerHTML = player2+":Answers" ;
    }
    else{
        answer_turn = "player1"
		document.getElementById("ans").innerHTML = player1 + ":Answers";
    }
    document.getElementById("output!").innerHTML = "";




//fun end//
}


