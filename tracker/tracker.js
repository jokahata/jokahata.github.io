
 
window.onload = function(){
    coins = 0;
    cells = 0;
    coinsPerCell = 16;
    var buttonHolder = $("#button_holder")
    createButton(buttonHolder, "I did a pomodoro", addCoin);

    document.getElementById("num").innerHTML = "Coins: " +  coins;
}

function addCoin()  
{
        
        coins++;
        if (coins > cells * coinsPerCell)
        {
            createCell();
        }
        document.getElementById("num").innerHTML = "Coins: " +  coins;
        var newCoin = document.createElement("div");
        $(newCoin).addClass("coin").css("opacity", 0);
         $(".active").append(newCoin);
         $(newCoin).animate({
            opacity: 1
         }, "slow");
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
    cells++;
    $("#vault").append(newCell);
    $(".active").animate({
        height: 100
    });

}

function saveState()
{
    localStorage["pomodoro_coins"] = coins;
    localStorage["pomodoro_cells"] = cells;
}