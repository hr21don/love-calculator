//User One
prompt("What is your name?");

//User Two
prompt("What is their name?");

var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;


if (lovescore > 70 && lovescore <= 100){
alert("your love score is " + lovescore + " % "  + " You love each other like Jesus loves Kanye.");
}
else{
alert("your love score is " + lovescore + " % " );
}