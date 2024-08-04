//console.log("Hello");
var Options = [ "Rock","Scissors","Papper"];
var Emojis = [`&#9994`,`&#9996`,`&#9995`];
function Win_Judge(a,b){
    if(a===0){
        if(b===0){
            return 0;
        }
        if(b===1){
            return 1;
        }
        if(b===2){
            return -1;
        }
    }
    if(a===1){
        if(b===1){
            return 0;
        }
        if(b===2){
            return 1;
        }
        if(b===0){
            return -1;
        }
    }
    if(a===2){
        if(b===2){
            return 0;
        }
        if(b===0){
            return 1;
        }
        if(b===1){
            return -1;
        }
    }
}
function Judge(Input){
    //console.log(Options[Input]);
    document.querySelector("#my_attack").innerHTML=`You:     ${Options[Input]}`;
    var Defense=Math.floor(Math.random() * 3);
    //console.log(Options[Defense]);
    document.querySelector("#defense").innerHTML=`Computer:     ${Options[Defense]}`;
    document.querySelector("#my_attack_1").innerHTML=Emojis[Input];
    var Check=Win_Judge(Input,Defense);
    if(Check===1){
        document.querySelector("#winner").innerHTML= "You Win!!!";
    }
    if(Check===-1){
        document.querySelector("#winner").innerHTML= "You Lose!!!";
    }
    if(Check===0){
        document.querySelector("#winner").innerHTML= "Draw!!!";
    }
    document.querySelector("#defense_1").innerHTML=Emojis[Defense];
}
//document.querySelector(".Rock").addEventListener("click", Rock_Judge);
document.querySelector(".Rock").addEventListener("click", function(){
    Judge(0);
});
document.querySelector(".Scissors").addEventListener("click", function(){
    Judge(1);
});
document.querySelector(".Papper").addEventListener("click", function(){
    Judge(2);
});