var buttons=document.querySelectorAll('button');
document.getElementById('rockbtn').addEventListener("click",function(){
    play('바위');
})
document.getElementById('scissorbtn').addEventListener("click",function(){
    play('가위');
})
document.getElementById('paperbtn').addEventListener("click",function(){
    play('보');
})
document.getElementById('reset').addEventListener("click",function(){
    reset();

})
var list=['가위','바위','보'];
var images={
    가위:"./image/scissor.jpeg",
    바위:"./image/rock.jpeg",
    보:"./image/paper.jpeg"
}
let playerscore=0;
let computerscore=0;

function play(player)
{
    var a=Math.floor(Math.random()*3);
    var com=list[a];
    var res=getresult(player,com);
    var playerimage="image/"+player+".jpeg";
    var comimage="image/"+com+".jpeg";
    document.getElementById('redwonder').setAttribute("src",playerimage);
    document.getElementById('bluewonder').setAttribute("src",comimage);
    if(res==="Win!")
    {
        document.getElementById('mys').textContent=++playerscore;
    }
    else if(res==="Lose!")
    {
        document.getElementById('comp').textContent=++computerscore;
    }
    
    alert(res);
    

}
function getresult(me,com)
{
    if(me===com)
    {
        return 'Draw!';

    }
    else
    {
        if(me+com==='가위보'||me+com==='바위가위'||me+com==='보바위')
        {
            return 'Win!';

            
        }
        else{
            return 'Lose!';
        }

    }
}
function Showmine(choice,image){
    document.getElementById('redwonder').style.backgroundimage=`url(${image})`;

}
function Showcom(choice,image){
    document.getElementById('bluewonder').style.backgroundimage=`url(${image})`;
}
function reset(){
    playerscore=0;
    computerscore=0;
    document.getElementById('mys').textContent=playerscore;
    document.getElementById('comp').textContent=computerscore;

}


