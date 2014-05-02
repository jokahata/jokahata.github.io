function createButton(context, func){
         var button = document.createElement("input");
         button.type = "button";
         button.value = "I did a pomodoro!";
         button.onclick = func;
         context.appendChild(button);
     }
     
     window.onload = function(){
        num = 0;
         createButton(document.getElementById("button_holder"), function(){
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
         });
         document.getElementById("num").innerHTML = "Num: " +  num;
     }