

function createButton(context, func){
    var button = document.createElement("input");
    button.type = "button";
    button.value = "im a button";
    button.onclick = func;
    context.appendChild(button);
}

window.onload = function(){
    score = 0;
    createButton(document.body, function(){
        score++;
        document.getElementById("hi").innerHTML =score;
    });
    var pep = document.createElement("div");
    pep.id = "hi";
    document.body.appendChild(pep);
    document.getElementById("hi").innerHTML =score;
}