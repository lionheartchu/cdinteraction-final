let robtextA=["Great!","Let me think...How about following me typing?","Please don't try to do something different.🥺","...Let's input 'I' first."]
let robtextB=["Ahh...","Why not?","Let's play! It's gonna be fun."]
let robtextBa=["Wait for real?","Come onnnnn!Just a simple game!","Are you mad at me?","Uh, fine...I'm just not suitable for this job..."]
let userInput1=document.querySelector("#inputBar1")
let userInput2=document.querySelector("#inputBar2")
let userInput3=document.querySelector("#inputBar3")
let buttons = document.querySelectorAll('.button');

let c1a=document.getElementById("choice1a")
let c1b=document.getElementById("choice1b")
let c1a2=document.getElementById("choice1a2")
let c1b2=document.getElementById("choice1b2")
let c1b3=document.getElementById("choice1b3")
let c2a=document.getElementById("choice2a")
let c2b=document.getElementById("choice2b")
// let btnGrp=document.getElementById("btnChoice")

let gettext1 = document.getElementById("t1");
let gettext2 = document.getElementById("t2");
let gettext3 = document.getElementById("t3");
let gettext4 = document.getElementById("t4");
let gettext5 = document.getElementById("t5");
let gettext6 = document.getElementById("t6");
let bar1=document.getElementById("inputBar1");
let bar2=document.getElementById("inputBar2");
let bar3=document.getElementById("inputBar3");
let sp1=document.getElementById("sp1");
let sp2=document.getElementById("sp2");
let sp3=document.getElementById("sp3");
let sp4=document.getElementById("sp4");

let normal=document.getElementById("normal");
let soso=document.getElementById("soso");
let unhappy=document.getElementById("unhappy");
let sad=document.getElementById("sad");
let angry=document.getElementById("angry");
let happy=document.getElementById("happy");
let heart=document.getElementById("heart");

//audios//
//sound effects
var btnSound=new Audio('audio/btnSound.wav')
var submit=new Audio('audio/submit.wav');
var happyEnd=new Audio('audio/happyEnd.wav');
var happyHarp=new Audio('audio/happyHarp.wav');
var sadEnd=new Audio('audio/sadEnd.wav');
var lost=new Audio('audio/lost.wav');
var wrongSound=new Audio('audio/wrong.wav');
var alertSound=new Audio('audio/alert.wav');
//robot voice
var auHello=new Audio('audio/hello.wav');
// auHello.play();
var auYeah=new Audio('audio/yeah.wav');
var auIptI= new Audio('audio/inputI.wav');
var auSWM= new Audio('audio/stillWithMe.wav');
var auWell= new Audio('audio/well.wav');
var auWellD=new Audio('audio/wellDone.wav');
var auAws=new Audio('audio/awesome.wav');
var auFM=new Audio('audio/followMe.wav');
var auFine=new Audio('audio/fine.wav');
var auHeng= new Audio('audio/heng.wav');
var auHey= new Audio('audio/hey.wav');
var auHmm= new Audio('audio/hmm.wav');
var auQuit= new Audio('audio/iQuit.wav');
var auNice= new Audio('audio/nice.wav');
var auThank= new Audio('audio/thankYou.wav');
var auWN=new Audio('audio/whyNot.wav');
var auCM=new Audio('audio/comeOn.wav');
var auDBS=new Audio('audio/dontBeSad.wav');
var auReally=new Audio('audio/really.wav');
var auSorry=new Audio('audio/sorry.wav');


//play button sound each time when a btn is clicked
buttons.forEach(button=> {
  button.addEventListener('click',()=> {
    btnSound.play();
  });
});

//play text and audio when user is inactive for a while!
let inactiveTime1 = 30000;
let inactiveTime2 = 60000;
let inactiveTime3 = 150000;
let timeoutWait;
let timeoutWait2;
let timeoutWait3;
let timeoutWait4;
document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);

function startTimer() {
  timeoutWait = setTimeout(waitText1, inactiveTime1);
}
function startTimer2() {
  timeoutWait2 = setTimeout(waitText2, inactiveTime2);
}
function startTimer3() {
  timeoutWait3 = setTimeout(waitText3, inactiveTime3);
}
function stopTimer(){
  timeoutWait4=setTimeout(stop,151000);
}
function resetTimer() {
  clearTimeout(timeoutWait);
  startTimer();
}
function resetTimer2() {
  clearTimeout(timeoutWait2);
  startTimer2();
}
function resetTimer3() {
  clearTimeout(timeoutWait3);
  startTimer3();
}
function waitText1() {
  gettext5.innerHTML = "Are you still with me?";
  auSWM.play();
}
function waitText2() {
  gettext6.innerHTML = "Well...I know it's not that fun. But let's just do that!";
  auWell.play();
}
function waitText3() {
  gettext6.innerHTML = "It seems that you won't be back...";
  unhappy.style.display="inline";
  sadEnd.play();
  alert("The robot left with disappointment.")
}
startTimer();
startTimer2();
startTimer3();
stopTimer();

//this thing is from chatGPT and will loop the text and audio, but I'm not sure about that
// function checkForInactivity() {
//   resetTimer();
//   setTimeout(checkForInactivity, inactiveTime1);
// }
// setTimeout(checkForInactivity, inactiveTime1);

function stop(){
  return;
}
function btnSwitch(){
// var displaySetting=c1a.style.display = "inline";
   let newBtn = document.createElement("button");
   let cta = document.createTextNode("sure!")
   newBtn.setAttribute("id", "choice1a")
   newBtn.appendChild(cta)
   document.body.appendChild(newBtn)
//    if (displaySetting=='inline'){
//     c1a.style.display='none';
//    }
//    else{
//     c1a.style.display='inline';
//    }
}
//initial text
// btnSwitch();
const timeout1=setTimeout(greeting,1000)
const timeout2=setTimeout(greeting2,3000)
const timeout3=setTimeout(opt1A,5000)
const timeout4=setTimeout(opt1B,5000)
function greeting(){
    document.getElementById("t1").innerHTML="Hi, what a great day today!"
}
function greeting2(){
    document.getElementById("t2").innerHTML="Do you wanna play a game?"
}
function opt1A(){
  c1a.style.display="inline";
    c1a.innerHTML="Sure!"
}
function opt1B(){
  c1b.style.display="inline";
  c1b.innerHTML="Nope."
}

//the first choice-sure
choice1a.addEventListener("click",function(){
  btnSound.play();
  setTimeout(textapp1,0)
  setTimeout(textapp2,2000)
  setTimeout(textapp3,4000)
  setTimeout(textapp4,6000)
  // setTimeout(waitText1,30000)
  // setTimeout(waitText2,60000)
  function textapp1(){
    gettext1.innerHTML = robtextA[0];
    auYeah.play();
}
  function textapp2(){
    gettext2.style.display='block';
    gettext2.innerHTML = robtextA[1];
}
  function textapp3(){
    gettext3.style.display='block';
  gettext3.innerHTML = robtextA[2];
}
  function textapp4(){
  gettext4.style.display='block';
  gettext4.innerHTML = robtextA[3];
  bar1.style.display="block";
  auIptI.play();
}
// function waitText1(){
//   gettext5.innerHTML='Are you still with me?';
//   auSWM.play();
// }
// function waitText2(){
//   gettext6.innerHTML="Well...I know it's not that fun. But let's just do that!";
//   auWell.play();
// }
  gettext2.style.display='none';
  gettext3.style.display='none';
  gettext4.style.display='none';
  c1a.style.display="none";
  c1b.style.display="none";
  c1b3.style.display="none";
  gettext2.innerHTML=' ';
  c1b2.style.display="none";
})
//the first choice-nope
choice1b.addEventListener("click",function(){
  btnSound.play();
    gettext1.innerHTML = robtextB[0];
    gettext2.innerHTML = robtextB[1];
    auWN.play();
    gettext3.innerHTML = robtextB[2];
    c1b.style.display="none";
    c1b2.style.display="inline";
    c1a.innerHTML='fine';
    c1b2.innerHTML='nope!';
    choice1b2.addEventListener("click",function(){
      gettext1.innerHTML=robtextBa[0];
      gettext2.innerHTML = robtextBa[1];
      auCM.play();
      c1a.style.display="inline";
      c1a.innerHTML='OK...';
      c1a2.style.display="none";
      c1b2.style.display="none";
      c1b3.style.display="inline";
      c1b3.innerHTML='NO!';
    gettext3.style.display='none';
    soso.style.display="inline";
    choice1b3.addEventListener("click",function(){
      gettext1.innerHTML=robtextBa[2];
      gettext2.innerHTML = robtextBa[3];
      auFine.play();
      c1a.style.display="none";
      c1b3.style.display="none";
      sad.style.display="inline";
      setTimeout(lost.play(),5000);
      setTimeout(leftCry,5000);
        function leftCry(){
          alert("The robot left with tears.")
        }
        setTimeout(stop,6000);
    })
    })
  })


//the first user input
let counter=0;
userInput1.addEventListener("keyup", function(ev) {
    let key = ev.keyCode; 
    if (key === 13) {
      let ipt1 = userInput1.value.toLowerCase();
      //if user type "I"
      if (ipt1=="i"){
        submit.play();
        auNice.play();
        gettext1.innerHTML='Nice!';
        gettext2.innerHTML="Then let's type 'am'.";
        gettext1.style.display='block';
        gettext2.style.display='block';
        gettext3.style.display='none';
        gettext4.style.display='none';
        bar1.style.display='none';
        bar2.style.display='block';
      }
      //if user type "you"
      else if (ipt1=="you"){
        wrongSound.play();
        auHmm.play();
        gettext1.style.display='block';
        gettext1.innerHTML="Hmm..."
        gettext2.style.display='block';
        gettext2.innerHTML="Not me! Let's type 'I'."
        gettext3.style.display='none';
        gettext4.style.display='none';
      }
      //user types other things
      else{
        wrongSound.play();
        gettext1.style.display='block';
        gettext1.innerHTML="Let's do that! Just type'I'."
        gettext2.style.display='none';
        gettext3.style.display='none';
        gettext4.style.display='none';
        auIptI.play();
      }
      //event-if user input over 3 times that's not 'I'
      counter++;
      if (counter>3&&ipt1!="i"){
        sp1.innerHTML='Heeeeey! Is it that hard to just follow me?'
        soso.style.display="inline";
        auHey.play();
      }
      if (counter>5&&ipt1!="i"){
        sp2.innerHTML="💢I'm getting angry!"
        alertSound.play();
        unhappy.style.display="inline";
        soso.style.display="none";
      }
      if (counter>6&&ipt1!="i"){
        sp2.style.display='none';
        gettext1.style.display='none';
        sp1.innerHTML="...Fine! I quit. I'm just not suitable for this job."
        unhappy.style.display="none";
        angry.style.display="inline";
        setTimeout(left,5000);
        setTimeout(lost.play(),5000);
        function left(){
          alert("The robot left angrily.")
        }
        setTimeout(stop,6000);
      }
    }
})


//the second user input
let counter2=0;
userInput2.addEventListener("keyup",function(ev){
  let key=ev.keyCode;
  if (key==13){
    let ipt2=userInput2.value.toLowerCase();
    if (ipt2=="am"){
      submit.play();
      auWellD.play();
      gettext1.innerHTML='Well done!';
      gettext1.style.display='block';
      gettext2.innerHTML="Next will be the last word--let's type 'happy'."
      gettext2.style.display='block';
      bar1.style.display='none';
      bar2.style.display='none';
      bar3.style.display='block';
  }
  //user types wrong grammar(?
    else if ((ipt2=="are")||(ipt2=="is")){
    wrongSound.play();
    gettext1.style.display='block';
    gettext1.innerHTML="Hey, wrong grammar!"
    auHey.play();
    gettext2.style.display='block';
    gettext2.innerHTML="Follow me--'a','m','am'."
    gettext3.style.display='none';
    gettext4.style.display='none';
    }
  //user types other things
    else{
    wrongSound.play();
    gettext1.style.display='block';
    gettext1.innerHTML="Just two simple letters! 'am'."
    gettext2.style.display='none';
    gettext3.style.display='none';
    gettext4.style.display='none';
    }
  }
  counter2++;
      if (counter2>3&&ipt2!="am"){
        sp1.innerHTML='Heeeeey! Is it that hard to just follow me?'
        auHey.play();
        soso.style.display="inline";
      }
      if (counter2>5&&ipt2!="am"){
        sp2.innerHTML="💢I'm getting angry!"
        alertSound.play();
        unhappy.style.display="inline";
        soso.style.display="none";
      }
      if (counter2>6&&ipt2!="am"){
        gettext1.style.display='none';
        gettext2.style.display='none';
        gettext3.style.display='none';
        gettext4.style.display='none';
        sp2.style.display='none';
        sp1.innerHTML="...Fine! I quit. I'm just not suitable for this job."
        unhappy.style.display="none";
        angry.style.display="inline";
        setTimeout(left2,5000);
        setTimeout(lost.play(),5000);
        function left2(){
          alert("The robot left angrily.")
        }
        setTimeout(stop,6000);
      }
})

//the third user input
let counter3;
let sadCount=0;
userInput3.addEventListener("keyup",function(ev){
  let key=ev.keyCode;
  if (key==13){
    submit.play();
    let ipt3=userInput3.value.toLowerCase();
    //ending1
    if (ipt3=="happy"){
      auAws.play();
      gettext1.innerHTML='Awesome!';
      gettext1.style.display='block';
      gettext2.style.display='block';
      gettext2.innerHTML="I'm glad to see you are happy."
      gettext3.style.display='block';
      gettext3.innerHTML="Ah, great, finally my mission is done!"
      bar3.style.display='none';
      document.getElementById("heart").style.display="inline";
      c2a.style.display="inline";
      c2a.innerHTML="Mission?"
      c2b.style.display="inline";
      c2b.innerHTML="not interested";
      choice2a.addEventListener("click",function(){
        auThank.play();
        gettext1.innerHTML='Well--since you asked...';
        gettext2.innerHTML="I'm created for making humans happy. That's my job."
        gettext3.innerHTML="...And since you said you're happy, my work is done!"
        gettext4.style.display="inline";
        gettext4.innerHTML='Thank you🥰!'
        happy.style.display="inline";
        c2a.style.display="none";
        c2b.style.display="none";
        setTimeout(happyEnd.play(),5000);
        setTimeout(left,5000);
        function left(){
          alert("The robot hugs you and left.")
        }
        setTimeout(stop,6000);
      })
      //ending2
      choice2b.addEventListener("click",function(){
        gettext1.style.display='block';
        gettext2.style.display='block';
        gettext1.innerHTML='Well, thanks a lot!';
        auWell.play();
        gettext2.innerHTML='BYE🥳';
        gettext3.style.display='none';
        c2a.style.display='none';
        c2b.style.display='none';
        setTimeout(left,5000);
        setTimeout(happyHarp.play(),5000);
        function left(){
          alert("The robot left happily.")
        }
        setTimeout(stop,6000);
      })

  }
  //user types something sad
    else if ((ipt3=="sad")||(ipt3=="unhappy")||(ipt3=="not happy")){
    sadCount++;
    soso.style.display='inline';
    wrongSound.play();
    auReally.play();
    gettext1.innerHTML="Oh..."
    gettext2.innerHTML="Really? For now?"
    gettext3.innerHTML="Don't be sad. Say 'happy'!"
    gettext4.style.display='none';
    if (sadCount>1){
      auDBS.play();
      sp3.innerHTML="OK...Don't be sad!"
      sp4.innerHTML="Let's have a hug or something."
    }
    if (sadCount>2){
      gettext1.style.display='none';
      gettext2.style.display='none';
      gettext3.style.display='none';
      soso.style.display='none';
      sad.style.display='inline';
      auSorry.play();
      sp3.innerHTML="Now I also want to cry..."
      sp4.innerHTML="I'm sorry...But I'm also sad..."
      setTimeout(left3,5000);
      setTimeout(sadEnd.play(),5000);
        function left3(){
          alert("The robot left crying sadly.")
        }
        setTimeout(stop,6000);
    }
    }
  //user types other things
    else{
      wrongSound.play();
    gettext1.innerHTML="We are just one step ahead! Input 'happy'."
    gettext2.style.display='none';
    gettext3.style.display='none';
    gettext4.style.display='none';
    }
  }
  counter3++;
      if (counter3>3&&ipt3!="happy"){
        sp1.innerHTML='Heeeeey! Is it that hard to just follow me?'
        auHey.play();
        soso.style.display="inline";
      }
      if (counter3>5 &&ipt3!="happy"){
        sp2.innerHTML="💢I'm getting angry!"
        alertSound.play();
        unhappy.style.display="inline";
        soso.style.display="none";
      }
      if (counter3>6 &&ipt3!="happy"){
        gettext1.style.display='none';
        gettext2.style.display='none';
        gettext3.style.display='none';
        gettext4.style.display='none';
        sp2.style.display='none';
        sp1.innerHTML="...Fine! I quit. I'm just not suitable for this job."
        unhappy.style.display="none";
        angry.style.display="inline";
        setTimeout(left3,5000);
        setTimeout(lost.play(),5000);
        function left3(){
          alert("The robot left angrily.")
        }
        setTimeout(stop,6000);
      }
})