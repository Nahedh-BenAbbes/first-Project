


var shift= 1;
var play = true;  



$('table tr td').click(function(){ 
  if($(this).text()==="" && play){
     if(shift%2===1){
      $(this).append("X");  //append select an element on the page and insert it into another.. (select X)
      $(this).css('color','#61892f');   // the color of X
     } else {
      $(this).append("O");  //append select an element on the page and insert it into another.. (select O)
      $(this).css('color','#e85a4f'); // the color of O ..
     }
      shift++;

      if(findWinner() !== -1 && findWinner()!==""){
        if(findWinner()==="X"){
            $('body').append('<div class="winner"><span>Winner</span>X</div>'); //button express the  winner X
            $('body').append('<button onclick="location.reload()">Play Again</button>'); //button to replay
            $('.winner').css('background-color', '#61892f'); //button X color
            $('button').css('color', '#61892f');

        } else {
             $('body').append('<div class="winner"><span>Winner</span>O</div>');            //button express the winner O
            $('body').append('<button onclick="location.reload()">Play Again</button>');   //button to replay
            $('.winner').css('background-color', '#e85a4f'); // button O color 
            $('button').css('color', '#e85a4f');  



        }
         play = false;
      }
  }
});



function findWinner(){      //select all elements that are the nth-child of their parent..
sa1= $('table tr:nth-child(1) td:nth-child(1)').text();
sa2= $('table tr:nth-child(1) td:nth-child(2)').text();
sa3= $('table tr:nth-child(1) td:nth-child(3)').text();
sa4= $('table tr:nth-child(2) td:nth-child(1)').text();
sa5= $('table tr:nth-child(2) td:nth-child(2)').text();
sa6= $('table tr:nth-child(2) td:nth-child(3)').text();
sa7= $('table tr:nth-child(3) td:nth-child(1)').text();
sa8= $('table tr:nth-child(3) td:nth-child(2)').text();
sa9= $('table tr:nth-child(3) td:nth-child(3)').text();

//check the rows now 
if((sa1===sa2) && (sa2===sa3)){
    return sa3;
} else if((sa4===sa5) && (sa5===sa6)){
    return sa6;
} else if((sa7===sa8)&&(sa8===sa9)){
    return sa9;
}

//Now check the columns
else if ((sa1===sa4) && (sa4===sa7)){
    return sa7;
} else if ((sa2===sa5) && (sa5===sa8)){
    return sa8;
} else if ((sa3===sa6) && (sa6===sa9)){
    return sa9;
}


// check diagonals
else if ((sa1===sa5) && (sa5===sa9)){
    return sa9;
} else if ((sa3===sa5) && (sa5===sa7)){
    return sa7;
}
 

alert("no win")

}




// no winners 












