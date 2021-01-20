const quizData = [
    {
        question: "Which is the most popular programming language?",
        a: "Java",
        b: "Javascript",
        c: "C#",
        d: "C++",
        correctAns: "a"
    },
    {
        question: "Which is most popular css framework ?",
        a: "Tailwind CSS",
        b: "Materialize CSS",
        c: "Bootstrap",
        d: "None of the above",
        correctAns: "c"
    },
    {
        question: "Which is most widely used code editor?",
        a: "Vs code",
        b: "Atom",
        c: "Bracket",
        d: "Sublime text",
        correctAns: "a"
    },
    {
        question: "Which is most valuable brand?",
        a: "Google",
        b: "Microsoft",
        c: "Amazon",
        d: "Apple",
        correctAns: "d"
    }
];
var currentque = 0;
var score=0;
var que = document.getElementById("question");
var a = document.getElementById("label_a");
var b = document.getElementById("label_b");
var c = document.getElementById("label_c");
var d = document.getElementById("label_d");
var submitbtn = document.getElementById("btnsubmit");
var loadbtn=document.getElementById("loadbtn");
loadbtn.style.display="none";

var currentQuizData;

//  Load  the initial question...
loadQuiz();

function loadQuiz() {
    deselect();
    var currentQuizData = quizData[currentque];
    que.innerText = currentQuizData.question;
    a.innerText = currentQuizData.a;
    b.innerText = currentQuizData.b;
    c.innerText = currentQuizData.c;
    d.innerText = currentQuizData.d;
}

function deselect() {
 let ans=document.getElementsByName("ans");    
 ans.forEach(a => {
     a.checked=false;
 });
}

    submitbtn.addEventListener("click", () => {
        if($("input[name='ans']").is(':checked')) {      
            let ans=document.querySelector("input[name='ans']:checked").value;
            if(ans===quizData[currentque].correctAns){
                score++;
            }
            // load next question
            currentque++;
            if (currentque < quizData.length) {
                loadQuiz();
            } else {
                // let cardbody=document.getElementById("cardbody")         
                cardbody.innerHTML=`<h2 class="text-center">Your Score is ${score} </h2>`;
                submitbtn.style.display="none";
                loadbtn.style.display="block";
                loadbtn.addEventListener('click',()=>{
                    location.reload();
                })
            }
        }
        else{
                $('#mymodal').modal('show'); 
        }
         })
            

       
// }
// else{
//     
// }