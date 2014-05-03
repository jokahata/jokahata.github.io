
 
window.onload = function(){
    cells = 0;
    coins = 0;
    coinsPerCell = 16;
    if (localStorage.getItem("pomodoro_coins") != null)
    {
        loadState();
    }
    
    
    var buttonHolder = $("#button_holder")
    createButton(buttonHolder, "I did a pomodoro", addCoin);

    document.getElementById("num").innerHTML = "Coins: " +  coins;
}

window.setInterval(function(){

    wiggleRandomCoin();
}, 200);

window.setInterval(function(){

    saveState();
}, 5000);

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
                
              top: '2px',
              height: '20px',
            });
            $(this).animate({
                
              top: '4px',
              height: '15px',
            });
            $(this).animate({
              top: '0px'
            });
        });
        $( newCoin ).hover(
            function() {
                $(this).css('position', 'relative');
                $(this).animate({
                    top: '4px'
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
    $(newCell).addClass("cell");
    var innerCell = document.createElement("div");
    $(innerCell).addClass("inner_cell active");
    $(newCell).append(innerCell);
    cells++;
    $("#vault").append(newCell);
    $(".active").animate({
        height: 100
    });

}

function saveState()
{
    localStorage["pomodoro_coins"] = coins;
    console.log("State saved!");
}

function loadState()
{
    temp = localStorage["pomodoro_coins"];
    while( coins < temp)
    {
        addCoin();
    }
}