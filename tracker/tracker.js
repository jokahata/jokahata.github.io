
 
window.onload = function(){
    coins = 0;
    cells = 0;
    coinsPerCell = 16;
    var buttonHolder = $("#button_holder")
    createButton(buttonHolder, "I did a pomodoro", addCoin);

    document.getElementById("num").innerHTML = "Coins: " +  coins;
}

window.setInterval(function(){

    wiggleRandomCoin();
}, 1000);

function wiggleRandomCoin()
{
    var random = Math.floor(Math.random() * coins);
    $(".coin").eq(random).click();
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
        $(newCoin).on('click',function() {
            $(this).css('position', 'relative');
            $(this).animate({
              top: '-4px'
            });
            $(this).animate({
              top: '0px'
            });
        });
        $( newCoin ).hover(
    function() {
        $(this).css('position', 'relative');
        $(this).animate({
            top: '-4px'
        });;
        }, function() {
            $(this).animate({
                top: '0px'
            });
        });
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