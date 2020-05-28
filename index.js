 function play(){   
    var audio=new Audio("dice.wav");
    audio.play();
    randomNumber1=Math.floor(Math.random()*6);

    console.log(randomNumber1);


    randomNumber2=Math.floor(Math.random()*6);

    console.log(randomNumber2);

    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerText="Time to play the Game";

    x=['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png',][randomNumber1]
    y=['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png',][randomNumber2]
    console.log(x);

    document.querySelector('.img1').setAttribute('src',x);
    document.querySelector('.img2').setAttribute('src', y);

    if(randomNumber1>randomNumber2){
        document.querySelector('h1').innerHTML="Player 1 wins!!!"}
    else if(randomNumber1===randomNumber2){
        document.querySelector('h1').innerHTML="Two losers!! LMAO"}
    else{document.querySelector('h1').innerHTML="Player 2 wins!!!"}
 }
  