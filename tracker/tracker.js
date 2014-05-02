
 
window.onload = function(){
    num = 0;
    var buttonHolder = $("#button_holder")
    createButton(buttonHolder, "I did a pomodoro", addCoin);
    createButton(buttonHolder, 'Add cell', createCell);

    document.getElementById("num").innerHTML = "Num: " +  num;
}

function addCoin()
{
        num++;
        document.getElementById("num").innerHTML = "Num: " +  num;
        var pep = document.createElement("div");
        pep.className = "coin";

         $(".active").append(pep);
}


function createButton(context, text, func){
     var button = document.createElement("input");
     button.type = "button";
     $(button).addClass("sweet_button");
     button.value = text;
     button.onclick = func;
     $(context).append(button);
}

function createCell()
{
    var newCell = document.createElement("div");
    $(".active").removeClass("active");
    $(newCell).addClass("cell active");
    
    $("#vault").append(newCell);

}