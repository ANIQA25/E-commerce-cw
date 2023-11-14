//Questions will be asked
const Questions = [{
        id: 0,
        q: "What is the capital of India?",
        a: [{ text: "gandhinagar", isCorrect: false },
            { text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: true },
            { text: "mumbai", isCorrect: false }
        ]

    },
    {
        id: 1,
        q: "What is the capital of Thailand?",
        a: [{ text: "Lampang", isCorrect: false, isSelected: false },
            { text: "phuket", isCorrect: false },
            { text: "Ayutthaya", isCorrect: false },
            { text: "Bangkok", isCorrect: true }
        ]

    },
    {
        id: 2,
        q: "What is the largest airport in Singapore?",
        a: [{ text: "Seletar Airport", isCorrect: false },  
            { text: "Paya Lebar Airport", isCorrect: false },
            { text: "Changi International Airport", isCorrect: true },
            { text: "Kallang Airport", isCorrect: false }
        ]

    },
    {
        id: 3,
        q: "The city with the largest population in China?",
        a: [{ text: "Wuhan", isCorrect: false },
            { text: "Shanghai", isCorrect: true },
            { text: "Beijing", isCorrect: false },
            { text: "Nanjing", isCorrect: false }
        ]

    },
    {
        id: 4,
        q: "A well-known tourist resort Phuket is located in?",
        a: [{ text: "Thailand", isCorrect: true },
            { text: "Indonesia", isCorrect: false },
            { text: "Malaysia", isCorrect: false },
            { text: "Sri Lanka", isCorrect: false }
        ]

    },
    {
        id: 5,
        q: "What is the capital of North Korea?",
        a: [{ text: "Wonsan", isCorrect: false },
            { text: "Kaesong", isCorrect: false },
            { text: "Hamhung", isCorrect: false },
            { text: "Pyongyang", isCorrect: true }
        ]

    },
    {
        id: 6,
        q: "What is the chief town of Sri Lanka's northern province?",
        a: [{ text: "Kilinochchi", isCorrect: false },
            { text: "Vavuniya", isCorrect: false },
            { text: "Jaffna", isCorrect: true },
            { text: "Trincomalee", isCorrect: false }
        ]

    },
    {
        id: 7,
        q: "The highest natural point of the singaporean island?",
        a: [{ text: "Telok Blangah Hill", isCorrect: false },
            { text: "Bukit Batok Hill", isCorrect: false },
            { text: "Mount Faber", isCorrect: false },
            { text: "Bukit Timah Hill", isCorrect: true }
        ]

    },
    {
        id: 8,
        q: "The 8th wonder of the world that located in Sri lanka?",
        a: [{ text: "Piduruthalagala", isCorrect: false },
            { text: "Sigirya", isCorrect: true },
            { text: "Rassagala", isCorrect: false },
            { text: "Bible Hill", isCorrect: false }
        ]

    },
    {
        id: 9,
        q: "What is the capital of Japan?",
        a: [{ text: "Osaka", isCorrect: false },
            { text: "Nagoya", isCorrect: false },
            { text: "Yokohama", isCorrect: false },
            { text: "Tokyo", isCorrect: true }
        ]

    },

]

// Set start
var start = true;

var currentQuestion = 1;

var selected = "";

var marks = 0 ;

// Getting the question
const question = document.getElementById("question");

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

// Iterate
function iterate(id) {

    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // question number
    document.getElementById("number").innerHTML = "Question " + currentQuestion + " / 10";

    if(currentQuestion == 10){
		next.textContent = 'Result';
	}

    // Setting the question text
    question.innerText = Questions[id].q;

    // Providing option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;


    function showSelection(option) {
        option.addEventListener("click", () => {
        selected = option.value;

            if (selected == "true") {
                option.classList.add("correct");
                result[0].innerHTML = "True";
                result[0].style.color = "green";
    
            } else {
                option.classList.add("incorrect");
                result[0].innerHTML = "False";
                result[0].style.color = "red";
                
            }
        })
    }

    showSelection(op1);
    showSelection(op2);
    showSelection(op3);
    showSelection(op4);



}

var buttonStatus = false;

function disable(){
    op1.disabled = true;
    op2.disabled = true;
    op3.disabled = true;
    op4.disabled = true;
    buttonStatus = true;
}

function enable(){
    op1.disabled = false;
    op2.disabled = false;
    op3.disabled = false;
    op4.disabled = false;
    buttonStatus = false;

    //remove button color
    op1.classList.remove("correct", "incorrect");
    op2.classList.remove("correct", "incorrect");
    op3.classList.remove("correct", "incorrect");
    op4.classList.remove("correct", "incorrect");
}


if (start) {
    iterate("0");
}

const next = document.getElementsByClassName('next')[0];

var id = 0;

next.addEventListener("click", () => {

    if (!buttonStatus == true) {
        window.alert("Choose an answer!");
        return;
    }

    if (selected == "true"){
        marks++;
        selected = "";
    }

    start = false;

    if (currentQuestion < 10) {
        id++;
        currentQuestion++;
        iterate(id);
        enable();

    }else {
        document.querySelector(".heading").textContent = "Quiz completed!";
        endResult()

    }
})


var time=60;							

var counter=setInterval(timer, 1000); 

function timer() {	

    time = time - 1;
    if (time == 0) {

        if (selected == "true"){
            marks++;
            selected = "";
        }
        document.querySelector(".heading").textContent = "Your time is over!";
        endResult()
    }
    document.getElementById("timer").innerHTML = "You got " + time + " seconds left"; 
}   


function endResult() {

        clearInterval(counter);
        document.querySelector(".panel").style.display = "none";
        document.querySelector(".end").style.display = "flex";
        document.querySelector(".score").innerHTML = "You got " + marks + " out of 10 correct";

        if(marks < 6) {
            document.querySelector(".comment").textContent = "You need to improve";
            document.querySelector(".comment").style.color = "red";
        
        }else {
            document.querySelector(".comment").textContent = "Excellent";
            document.querySelector(".comment").style.color = "green";
        }

}