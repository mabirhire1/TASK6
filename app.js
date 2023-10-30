// create a data container representing the questions, options, and answers.
// create the html syntax to display the content.
// select the quiz content.
// map through the content to display each on the webpage.
// add an event listener to each content option, so that user can select an option.
// display if selection is correct or wrong.
// dispay user total score on completion of quiz.



let quizContent = [
    {
        question: "Which of these could be regarded as the founding father of modern Nigeria.",
        options: ["Lord_Lugard", "Richard_Lander", "Taubman_Goldie", "Henry_Townsend"],
        answer: "Taubman_Goldie",
    },
    {
        question: "Nigeria as a country came into existence in?",
        options: [1850, 1930, 1861, 1914],
        answer: "1914",
    },
    {
        question: "Which of these did not exist in the British administration of Nigeria?",
        options: ["The_Lagos_Colony", "The_Igbo_Colony", "The_Niger_Coast_Protectorate", "The_Northern_Protectorate"],
        answer: "The_Igbo_Colony",
    },
    {
        question: "The first political party in Nigeria was formed in",
        options: [1923, 1900, 1917, 1935],
        answer: "1923",
    },
    {
        question: "Which of these is regarded as the father of nationalism in Nigeria?",
        options: ["Chief_Obafemi_Awolowo", "Herbert_Macaulay", "Aminu_Kano", "Chief_Anthony_Enahoro"],
        answer: "Herbert_Macaulay",
    },
    {
        question: "The motion for self government was moved by",
        options: ["Mallam_Aminu_Kano_in_1951", "Chief_Obafem_ Awolowo_in_1952", "Chief_Anthony_Enahoro_in_1953", "Chief_Nnamdi_Azikiwe_in_1954"],
        answer: "Chief_Anthony_Enahoro_in_1953",
    },
    {
        question: "Nigeria gained her independence from British rule",
        options: ["January_1st_1960", "April_1st_1960", "July_1st_1960", "October_1st_1960"],
        answer: "October_1st_1960",
    },
  ];

  let contentPage = document.querySelector(".content-page");

    
    function quizApp() {
        
        let accurates = 10;
        let wrong = 0;
        let result = 0;
        
        
        let quizArray = quizContent.map((quiz, index) => {
            return `<div class="row my-3 py-2">
                        <div class="col-12 shadow-lg p-3 mb-5 bg-body-tertiary rounded ">
                            <div class="d-flex">                                
                                <p style="font-size: 20px">${index + 1}</p>
                                <p class="question px-4" style="font-size: 22px;">${quiz.question}</p>
                            </div>
                            <select name="" class="w-100 py-2  fs-5 border border-success text-success">
                                <option value="" select-disabled>Choose an answer</option>                            
                                ${quiz.options.map((option) => {
                                return `<option value=${option}>${option}</option>`;
                            })}
                            </select>             
                            <p class="chosen pt-4 fs-5">Chosen answer:</p>                                              
                            <p class="accurate fs-5">Accurate answer:</p>                                              
                            <p class="status fs-5">Status:</p>                                  
                        </div>                   
                    </div>`;
        });
    
        contentPage.innerHTML = quizArray.join(" ");        
     
    
        let selectElement = document.querySelectorAll("select");

        selectElement.forEach((select, index) => {
            select.addEventListener("change", (event) => {
            let selectValue = event.target.value;
            let chosen = document.querySelectorAll(".chosen")[index];
            chosen.innerHTML = `Chosen answer: ${selectValue}`;
            let get = document.querySelectorAll(".accurate")[index];
            get.innerHTML = `Accurate answer: ${quizContent[index].answer}`;               
        

            if (quizContent[index].answer === selectValue) {
              document.querySelectorAll(".status")[index].innerHTML = `Status: Accurate`;            
              result += accurates;
              document.querySelector(".result").innerHTML = `${result}/70`;
            } else {
              document.querySelectorAll(".status")[index].innerHTML = `Status: Wrong`;  
              result += wrong;
              document.querySelector(".result").innerHTML = `${result}/70`;
            } 
        });
    });
  }
       
  quizApp(); 
  
    
       
        



