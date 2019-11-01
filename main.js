
// classes for the two sets of questions and strategy recommnedation

class  QuestionSet1 {
    constructor(id, question, answer, noResponse, yesResponse, step) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.noResponse = noResponse;
        this.yesResponse = yesResponse;
        this.step = step;
    }
}

class QuestionSet2 {
    constructor(id, question, response){
        this.id = id;
        this.question = question;
        this.response = response;
    }
}

class  StrategyRecommnedation {
    constructor(title, recommendation, reasons, contract) {
        this.title = title;
        this.recommendation =  recommendation;
        this.reasons = reasons;
        this.contract = contract;
    }
}

// First set of questions
var question1  = new QuestionSet1(1, "Do you procure for construction regularly?", "", "Consider using open tendering/ Appoint professional adviser/",  "Consider using negotiated or selective tendering", "Identify project need");
var question2  = new QuestionSet1(2, "Is it a complex and large project?", "", "",  "Have initial appointment for specialties/ Consider using milestone development, time boxing or phase development", "Identify project need");
var question3  = new QuestionSet1(3, "Have you done this kind of project before?", "", "", "", "Prepare business case");
var question4  = new QuestionSet1(4, "Did the procurement route work?", "", "",  "Improve procurement route and reapply/ Consider using 'Serial Tender' if its a series of similar project with existing master bill of quantities", "Prepare business case");
var question5  = new QuestionSet1(5, "Is the project fund readily availalable?", "", "Consider other sources of funds including joint venture, partnering, capital loan, stocks or bonds",  "", "Set project budget");
var question6  = new QuestionSet1(6, "Identify project risks and constraints", "", "Develop risk register/ Consider early contractor involvement/ Development comprehensive roles and responsibility matrix",  "Develop risk register/ Consider early contractor involvement/ Development comprehensive roles and responsibility matrix", "Risk Management Plan");
var question7  = new QuestionSet1(7, "Is this a one-off project?", "", "Set benchmark/ Establish BIM implementation requirement/ Consider using smart contract/ Open project bank account/ Set key performance indicators/ Develop value Management Plan",  "Use framework contract/ Establish BIM implementation requirement/ Consider using smart contract/ Open project bank account/ Set key performance indicators/ Develop value Management Plan", "Supply Chain Managament");

// question 6 requires a checkbox answer and not yes/no like the rest
var q6options = {
    "Cost overrun" : "Consider cost overruns in your risk register",
    "Public liability": "Include public liability in your risk register", 
    "Project delay": "Include project delay in your risk register", 
    "Source of funds": "Include source of funds in your risk register",
    "Design changes": "Include design changes in your risk register",
    "Poor design": "Include poor design in your risk register", 
    "Buildability": "Consider buidability in your risk register",
    "HSE": "Consider Health and safety in your risk register",
    "Poor brief": "Consider poor brief when preparing your risk register"
};

// question set 1 grouped in an array
questionGroup1 = [question1, question2, question3, question4, question5, question6, question7];



// Second set of questions
quest1 = new QuestionSet2(1, "Cost certainity", {"5": "NPM", "4": "DB", "3": "TP", "2": "P", "1": "MC"});
quest2 = new QuestionSet2(2, "Sustainability in design and material", {"5": "NPM", "4": "DB", "3": "P", "2": "MC", "1": "TP"});
quest3 = new QuestionSet2(3, "Stakeholders collaboration", {"5": "NPM", "4": "P", "3": "DB", "2": "MC", "1": "TP"});
quest4 = new QuestionSet2(4, "Timely completion", {"5": "MC", "4": "DB", "3": "NPM", "2": "P", "1": "TP"});
quest5 = new QuestionSet2(5, "Ease of construction", {"5": "P", "4": "MC", "3": "NPM", "2": "DB", "1": "TP"});
quest6 = new QuestionSet2(6, "Design quality and aesthetics", {"5": "P", "4": "MC", "3": "TP", "2": "NPM", "1": "DB"});
quest7 = new QuestionSet2(7, "Size of project", {"5": "NPM", "4": "DB", "3": "P", "2": "MC", "1": "TP"});
quest8 = new QuestionSet2(8, "Minimized health and safety issues", {"5": "NPM", "4": "DB", "3": "P", "2": "MC", "1": "TP"});
quest9 = new QuestionSet2(9, "Budget flexibility", {"5": "P", "4": "MC", "3": "TP", "2": "DB", "1": "NPM"});
quest10 = new QuestionSet2(10, "Level of supply chain integration", {"5": "NPM", "4": "P", "3": "DB", "2": "MC", "1": "TP"});
quest11 = new QuestionSet2(11, "Minimising dispute among stakeholders", {"5": "NPM", "4": "P", "3": "DB", "2": "MC", "1": "TP"});
quest12 = new QuestionSet2(12, "Competitive price tendering", {"5": "NPM", "4": "TP", "3": "MC", "2": "P", "1": "DB"});
quest13 = new QuestionSet2(13, "Continous improvement", {"5": "NPM", "4": "P", "3": "DB", "2": "MC", "1": "TP"});
quest14 = new QuestionSet2(14, "Risk avoidance", {"5": "MC", "4": "P", "3": "NPM", "2": "TP", "1": "DB"});
quest15 = new QuestionSet2(15, "Specified whole-life performance", {"5": "P", "4": "MC", "3": "NPM", "2": "DB", "1": "TP"});
quest16 = new QuestionSet2(16, "Level of innovation", {"5": "NPM", "4": "P", "3": "DB", "2": "MC", "1": "DB"});

// question set 2 grouped in an array
questionGroup2 = [quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10, quest11, quest12, quest13, quest14, quest15, quest16];


// strategy recommnedations
let TP  = new StrategyRecommnedation("Traditional procurement", 
          "Open tendering is key  to evaluate contractors capability, Consider offering early completion incentive to minimise the weakness of this procurement route, Consider subscribing for third-party insurance to cover client risk, Appoint expert project supervisor or representative, Consider using design-led prime contracting, Agree on retention fee for latent defect",
          "This procurement route is recommended because it ensures high accuracy of cost certainty, design quality by experts, budget flexibility and competitve pricing",
          "NEC3, TSC and PSC");

let DB =  new StrategyRecommnedation("Design and Build", 
          "Consider using selective tendering based on established relationships, Establish designer selection criteria, Establish framework for contious  involvement, Consider using operate and maintain agreement, Consider using novation",
          "This procurement choice is recommended because it ensures cost certainty to a signficant extent, sustainability, early completion, consideration of safety during design and control on disputes.",
          "NEC3, PSC, ECC, SSC");

let  MC = new StrategyRecommnedation ("Management Contracting", "Establish expert appointment criteria, Consider using construction manager appointment, Consider using design and manage option",
          "This procurement choice is recommended because of high risk avoidance for clients, ensures early completion due to expert engagement and excellence  for complex projects and when high design quality is desired",
          "NEC, PSC, ECC, ECS");

let P = new StrategyRecommnedation ("Patnering", "Hold regular workshops, Measure scale of participation of partners, Develop long-term patnering framework, Define clear roles and responsibilities, Setup regular performance review, Form alternative dispute resolution",
        "This procurement choice is recommended because it is suitable for complex projects with flexible budgets, ensures high collaboration of experts across board, ensures high supply chain integration, contious improvement and dispute resolution.",
        "PPC2000, TPC2005, NEC3:Option X12"
        );

let NPM2SOB = new StrategyRecommnedation ("2-stage  open book", "Use standard framework approach, Ensure standard specification, Focus on program level savings, Use aggregated procurement at supply chain level",
              "This procurement choice is recommended because it ensures very high level of cost certainty, sustainability, collaboration, supply chain integration, price competion, contious improvement, innovation and health and safety control",
              "JCT CE, TPC2005, PPC2000");

let NPMCP = new StrategyRecommnedation("Cost-led procurement", "Agree on pain/gain shares, Appoint BIM manager, Establish alternative dispute resolution procedure, Ensure induction and training of contractors, Ensure cost benchmarking and stakeholder performance review",
            "This procurement choice is recommended because it ensures very high level of cost certainty, sustainability, collaboration, supply chain integration, price competion, contious improvement, innovation and health and safety control",
            "NEC3, JCT CE");

let NPMIP = new StrategyRecommnedation("Integrated project insurance", "Enter into no-blame/no-claim agreement, Use alliance contracting",
            "This procurement choice is recommended because it ensures very high level of cost certainty, sustainability, collaboration, supply chain integration, price competion, contious improvement, innovation and health and safety control",
            "PPC2000");

// strategy recommendations grouped in a dictionary

recommendations = {
   "TP": TP,
   "DB": DB,
   "MC": MC, 
   "P": P,
   "NPM2SOB": NPM2SOB,
   "NPMCP": NPMCP,
   "NPMIP": NPMIP
};


// helper functions

randomPickOneofThree = (option1, option2, option3)  => {
    randomNumber =  getRandomInt(1,3);
    if(randomNumber == 1){
        return option1;
    }
    else if (randomNumber == 2){
        return option2;
    }
    else {
        return option3;
    }
} 

getRandomInt = (min, max)  => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

getCheckedRadioValue = (response) => {
    for(i = 0; i < response.length; i++) { 
        if(response[i].checked) {
           res = response[i].value;
           return res;
        } 
    } 
}

getCheckboxValue = (response) => {
    var checkedValues = []; 
    //var inputElements = document.getElementsByName('q6');
    for(var i=0; i<response.length; i++){
        if(response[i].checked){
            checkedValues.push(response[i].value);
            //break;
        }
    }
    var res  = checkedValues.toString()
    return res;
}

validateForm = () => {

    let result = "";
    if (buttonclicked === false) {
        result = document.getElementById("res").innerHTML = "You need to submit your selection";
    }
    if (document.myForm.choices.value === ""){
       result = document.getElementById("res").innerHTML = "You need to make a selection first";
    }
    return result;
}

// Start Procurement Quiz
let buttonclicked = false;

getQuestions = () => {
    var responses  = document.getElementById("questions2");
    if (responses.innerHTML !== "") {
        responses.innerHTML = "";
    }
    var questions = document.getElementById("questions").innerHTML;
        if (questions === "") {
            createQuestionEelement(1);
        }   
}


loadNextQuestions = () => {
    test = document.getElementById("questions2");
    document.getElementById("res").innerHTML = "";
    document.getElementById("counter").innerHTML = "";
    resumecontent = document.getElementById("resume-content");
    resumecontent.classList.remove("mt-5");
    document.getElementById("questionStep").innerHTML = "<h3>Selecting the right procurement strategy</h3> <p>Please rate the factors below based on the level of importance to you on a scale of 1-5 where: <p> <b>5</b> = Very High, <b>4</b> = High, <b>3</b> = Moderate, <b>2</b> = Low, <b>1</b> = Very Low</p> </p><p>Except Question 7 (Size of project) where: </p> <p><b>5</b> = above £10,000,000, <b>4</b> = £1,000,000-10,000,000, <b>3</b> = £250000-1,000,000, <b>2</b> = £50,000-250,000,  <b>1</b> = £0-50000 </p>";
    test.innerHTML += "<h4>Selection Criteria</h4>";
    for (i=0; i<questionGroup2.length; i++) {
        let options = questionGroup2[i].response;
        let index = i+1;
        let group = "group" + index;
        test.innerHTML += "<div class='mt-5'>";
        test.innerHTML +=  "<label for='question' class='ques' target="+index+" id='ques'>" + questionGroup2[i].id +". " +questionGroup2[i].question+ "</label>";
        test.innerHTML += "<fieldset id="+group+" class='q2-radios'> ";
        Object.keys(options).forEach(function(key) {
            test.innerHTML += "<label class='radio-inline'>";
            test.innerHTML += "<input type='radio' name="+group+" value="+ options[key]+" required /> "+key + "";
            test.innerHTML += "</label>";
        });
        test.innerHTML += "</fieldset>";
        test.innerHTML += "</div>";
      
    }
    test.innerHTML +=  "<br/><button type='submit' class='mt-5 btn btn-info'>Submit</button>";
     
}



getNextQuestion = (id) => {

    if (id > questionGroup1.length ) {
        document.getElementById("questions").innerHTML = "";
        loadNextQuestions();
    }
    else {
        document.getElementById("res").innerHTML = "";
        createQuestionEelement(id);
    }
}

createQuestionEelement = (index) => {  
    if (index === undefined) {
        index = 1;
    }
    var i = index - 1;
    question = questionGroup1[i].question;

    var questionStep = document.getElementById("questionStep");
    questionStep.innerHTML = "Step: " + questionGroup1[i].step;
    test = document.getElementById("questions");
    if (i==5) {
        test.innerHTML = "<form>";
        test.innerHTML += "<h3 target="+index+" id='ques'>" +question+ "</h3>";
        test.innerHTML += "<div class='checkbox'><label><input type='checkbox' name='choices' value='Cost overrun'> Cost overrun</label></div>";
        test.innerHTML += "<div class='checkbox'><label><input type='checkbox' name='choices' value='Public liability'> Public liability</label></div>";
        test.innerHTML += "<div class='checkbox'><label><input type='checkbox' name='choices' value='Project delay'> Project delay</label></div>";
        test.innerHTML += "<div class='checkbox'><label><input type='checkbox' name='choices' value='Source of funds'> Source of funds</label></div>";
        test.innerHTML += "<div class='checkbox'><label><input type='checkbox' name='choices' value='Design changes'> Design changes</label></div>";
        test.innerHTML += "<div class='checkbox'><label><input type='checkbox' name='choices' value='Poor design'> Poor design</label></div>";
        test.innerHTML += "<div class='checkbox'><label><input type='checkbox' name='choices' value='Buildability'> Buildability</label></div>";
        test.innerHTML += "<div class='checkbox'><label><input type='checkbox' name='choices' value='HSE'> HSE</label></div>";
        test.innerHTML += "<div class='checkbox'><label><input type='checkbox' name='choices' value='Poor brief'> Poor brief</label></div>";
        test.innerHTML += "<button id='btnsubmit' class='btn btn-info' onclick='checkAnswer()'>Submit Answer</button>";
        test.innerHTML += "</form>";
    }
    else {
        test.innerHTML = "<form>";
        test.innerHTML = "<h3 target="+index+" id='ques'>" +question+ "</h3>";
        // the += appends to the data we started on the line above
        test.innerHTML += "<input type='radio' name='choices' value='Yes' required /> Yes <br>";
        test.innerHTML += "<input type='radio' name='choices' value='No' required /> No <br><br>";
        test.innerHTML += "<button id='btnsubmit' class='btn btn-info' onclick='checkAnswer()'>Submit Answer</button>";
        test.innerHTML += "</form>";
    }
    
}


checkAnswer = () => {
    buttonclicked = true;
    var question, response; 
    question = document.getElementById("ques").innerHTML;
    var qId = document.getElementById("ques").getAttribute("target");
    var response = document.getElementsByName("choices");

    if (parseInt(qId) == 6) {
        responseValue = getCheckboxValue(response);
    }
    else {
        responseValue = getCheckedRadioValue(response);
    }

    res = document.getElementById("res");
  
    if (responseValue === undefined) {
        res.innerHTML = "You have to make a selection";
    }
    else {
        for (var i in questionGroup1){
            if (questionGroup1[i].question === question) {
                    questionGroup1[i].answer = responseValue;
                    if (questionGroup1[i].id == 3 & questionGroup1[i].answer == 'No'){
                        getNextQuestion(parseInt(qId)+2);
                    }
                    else{
                        getNextQuestion(parseInt(qId)+1);
                    }
                    
                    
            }
         }
    }

}


displayNext = () => {
    var qId = document.getElementById("ques").getAttribute("target");
    let result  = validateForm();
    if (result === ""){
        getNextQuestion(parseInt(qId)+1);
        document.getElementById("previous").style.color = "#bd5d38";
    }
    else{
        return result;
    }
    
}

displayPrevious = () => {
    var qId = document.getElementById("ques").getAttribute("target");
    questionIndex = parseInt(qId)-1;
    let result  = validateForm();
    if (questionIndex < 1){
        document.getElementById("previous").style.color = "#cccccc";
    }  
    if (result === ""){
        getNextQuestion(questionIndex);
    }
    else {
        return result;
    } 
    
}

getFormResponse = (val1, val2, responses) => {
    console.log(val1, val2, responses["group1"]);
    document.getElementById("questionStep").innerHTML = "";
    var rec = getQuestionSet1Response();
    const highest = Object.values(val1)[0];
    const secondHighest  = Object.values(val2)[0];

    var res;
    if (highest == "NPM" || secondHighest == "NPM") {
        switch (true) {
            case responses["group1"] == "NPM": 
                res = recommendations["NPMCP"];
                break;
            case responses["group12"] == "NPM":
                res = recommendations["NPM2SOB"];
                break;
            case responses["group14"] == "NPM":
                res = recommendations["NPMIP"];
                break;
            case responses["group1"] == "NPM" && responses["group12"] == "NPM":
                res = (Math.random() < 0.5) ? recommendations["NPMCP"] : recommendations["NPM2SOB"]
                break;
            case responses["group1"] == "NPM" && responses["group14"] == "NPM":
                res = (Math.random() < 0.5) ? recommendations["NPMCP"] : recommendations["NPMIP"]
                break;
            case responses["group12"] == "NPM" && responses["group14"] == "NPM":
                res = (Math.random() < 0.5) ? recommendations["NPM2SOB"] : recommendations["NPMIP"]
                break;
            default:
                res = randomPickOneofThree(recommendations["NPM1P"], recommendations["NPM2SOB"], recommendations["NPMCP"]);
        }
    }
    if (highest == "NPM") {
        response1 = res;
    }
    else {
        response1 = recommendations[highest];
    }
    if (secondHighest == "NPM") {
        response2 = res;
    }
    else {
        response2 = recommendations[secondHighest];
    }

    res = document.getElementById("questions2");
    res.innerHTML = "<h3>Results</h3> <div><p>Based on your responses, here are the two recommended procurement routes </p>";
    res.innerHTML +=  "<div> <h5>1. "+ response1.title +"</h5> <div><b>Recommendation: </b></div><ul>"+ response1.recommendation.split(",").map(el => "<li class='responses'>" + el + "</li>").join("")+ "</ul><p><b>Reason for this recommendation: </b> "+ response1.reasons+"</p><p><b>Recommended Contract Types: </b>"+ response1.contract+"</p></div><br/>";
    res.innerHTML += "<div> <h5>2. "+ response2.title +"</h5> <div><b>Recommendation: </b></div><ul>"+ response2.recommendation.split(",").map(el => "<li class='responses'>" + el + "</li>").join("") + "</ul><p><b>Reason for this recommendation: </b> "+ response2.reasons+"</p><p><b>Recommended Contract Types: </b>"+ response2.contract+"</p></div><br/>";
    res.innerHTML += "<div><h5>Other Recommendations</h5><p>"+ rec +"</p></div>";
    res.innerHTML += "<button class='btn btn-info' onclick='location.reload()'>Start Again</button>";
}




getQuestionSet1Response = () => {
    let responses = "<ul>";

    for(i=0; i<questionGroup1.length; i++) {
         
        if (questionGroup1[i].answer == "Yes" && questionGroup1[i].yesResponse != "") {
            var arr = questionGroup1[i].yesResponse.split("/");
            responses += "<li class='responses'>"  +  arr.map(el => "<div>" + el + "</div>").join("") + "</li>";
        }
        if (questionGroup1[i].answer == "No" && questionGroup1[i].noResponse != "") {
            var arn = questionGroup1[i].noResponse.split("/");
            responses += "<li class='responses'>" + arn.map(el => "<div>" + el + "</div>").join("") + "</li> ";
        }
        if (questionGroup1[i].id  == 6) {
            res = questionGroup1[i].answer; 
            items= res.split(",");
            for (var a=0; a<items.length; a++) {
                responses += "<li class='responses'>"  + q6options[items[a]] + "</li>";
            }
        }
    }
    responses +=  "</ul>";
    return responses;
}


getResults = (values) => {
    var selections = [];
    Object.keys(values).forEach(function(key) {
        selections.push(values[key]);
    });

   // count all the categories and the times they appear
   const result = {};
   for (let i = 0; i < selections.length; i++) {
    result[selections[i]] = (result[selections[i]] || 0) + 1;
   }

   //var items = Object.keys(result).map(key => ({ [key]: result[key] }));
   var items = Object.keys(result).map(function(key) {
    return [key, result[key]];
   });
  
   // Sort the dictionary based by the highest values
   items.sort(function(first, second) {
    return second[1] - first[1];
   });

   // get and display the corresponding response for the two highest values
   getFormResponse(items[0], items[1], values);
}


