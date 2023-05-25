// question bank
var questionBank=[
    {
        question : 'HTML stands for',
        option : ['Hypermark Lanuage','Hypermix language','Hypertext Markup Language','Hypertension language'],
        answer : 'Hypertext Markup Language'
    },
    {
        question : 'Which type of HTML Language is ?',
        option : ['Scripting Language','Programming Language','Markup Language','Network Language'],
        answer : 'Markup Language'
    },
    {
        question : 'The correct sequence of HTML tags for starting a webpage is ',
        option : ['Head, Title, HTML, body','HTML, Body, Title, Head','HTML, Head, Title, Body','HTML, Head, Title, Body'],
        answer : 'HTML, Head, Title, Body'
    },
    {
        question : 'Which type of language is javascript',
        option : ['Programming','Scripting','Markup','None of the above'],
        answer : 'Scripting'
    },
    {
        question : 'Which of the following attribute is used to provide a unique name to an element',
        option : ['class','id','type','None of the above'],
        answer : 'id'
    },
]

var question= document.getElementById("question");
var quizContainer= document.getElementById("quiz-container");
var scoreCard = document.getElementById("scoreCard");
var option0= document.getElementById("option0");
var option1= document.getElementById("option1");
var option2= document.getElementById("option2");
var option3= document.getElementById("option3");
var next= document.querySelector(".next");
var points= document.getElementById('score');
var span= document.querySelectorAll('span')
var i=0;
var score=0;

//function to display questions
function displayQuestion(){
    for(var a=0; a<span.length; a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.' + (i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= 'Question'+ ' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if (e.innerHTML === questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.backgroundColor='lightgreen';
    }else{
        document.getElementById(e.id).style.backgroundColor='tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }else{
        points.innerHTML=score+ '/'+ questionBank.length;
        scoreCard.style.display='block';
        quizContainer.style.display='none';
        
       }
}

//click events to next button
next.addEventListener('click', nextQuestion);

//back to quiz button event
function backToQuiz(){
    location.reload();
}

//function to check answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display="block";
    scoreCard.style.display="none";
    for (var a=0; a<questionBank.length; a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}

displayQuestion();











