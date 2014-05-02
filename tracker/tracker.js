
 
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
         var in1 = document.createElement("div");
         in1.className = "coin_in1";
         var in2 = document.createElement("div");
         in2.className = "coin_in2";
         in1.appendChild(in2);
         pep.appendChild(in1);

         document.getElementById("vault").appendChild(pep);
}


function createButton(context, text, func){
     var button = document.createElement("input");
     button.type = "button";
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