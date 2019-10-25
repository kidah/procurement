
class  QuestionSet1 {
    constructor(id, question, answer, noResponse, yesResponse) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.noResponse = noResponse;
        this.yesResponse = yesResponse;
    }
    getYesResponse(){
        return this.yesResponse;
    }
    getNoResponse(){
        return this.noResponse;
    }

}

class QuestionSet2 {
    constructor(id, question, response){
        this.id = id;
        this.question = question;
        this.response = response;
    }
    getResponse () {
        return this.response;
    }
}

var question1  = new QuestionSet1(1, "What is the time", "", "No response 1",  "Yes response 1");
var question2  = new QuestionSet1(2, "What is the time 2", "", "No response 2",  "Yes response 1");
var question3  = new QuestionSet1(3, "What is the time 3", "", "No response 3",  "Yes response 1");
var question4  = new QuestionSet1(4, "What is the time 4", "", "No response 4",  "Yes response 1");
var question5  = new QuestionSet1(5, "What is the time 5", "", "No response 5",  "Yes response 1");
var question6  = new QuestionSet1(6, "What is the time 6", "", "No response 6",  "Yes response 1");

questionGroup1 = [question1, question2, question3, question4, question5, question6];

quest1 = new QuestionSet2(1, "What stupid question", "");
quest2 = new QuestionSet2(2, "What is the silly question 2", "");
quest3 = new QuestionSet2(2, "What is the silly question 3", "");
quest4 = new QuestionSet2(2, "What is the silly question 4", "");
quest5 = new QuestionSet2(2, "What is the silly question 5", "");
quest6 = new QuestionSet2(2, "What is the silly question 6", "");
quest7 = new QuestionSet2(2, "What is the silly question 7", "");

questionGroup2 = [quest1, quest2, quest2, quest3, quest4, quest5, quest6, quest7];


var responses = {
   "Very High": "this is the response for very high",
   "High": "this is the reesponse for high",
   "Medium": "this is the response for medium",
   "Low": "this is the response for Low",
   "Very Low": "this is the response for very low"
};

loadNextQuestions = () => {
    test = document.getElementById("questions2");
    document.getElementById("res").innerHTML = "";
    document.getElementById("counter").innerHTML = "";
    resumecontent = document.getElementById("resume-content");
    resumecontent.classList.remove("mt-5");

    for (i=0; i<questionGroup2.length; i++) {
    
        let index = i+1;
        let group = "group" + index;
        test.innerHTML += "<div class='mt-5'>";
        test.innerHTML +=  "<h3 target="+index+" id='ques'>" +questionGroup2[i].question+ "</h3>";
        test.innerHTML += "<fieldset id="+group+"> ";
        test.innerHTML += "<input type='radio' name="+group+" value='Very High' required /> Very High <br>";
        test.innerHTML += "<input type='radio' name="+group+" value='High' required /> High <br>";
        test.innerHTML += "<input type='radio' name="+group+" value='Medium' required /> Medium <br>";
        test.innerHTML += "<input type='radio' name="+group+" value='Low' required /> Low <br>";
        test.innerHTML += "<input type='radio' name="+group+" value='Very Low' required /> Very Low <br>";
        test.innerHTML += "</fieldset>";
        test.innerHTML += "</div>";
      
    }
    test.innerHTML +=  "<button type='submit' class='mt-5 btn btn-info'>Submit</button>";
    test.innerHTML +=  "</form>";

}
//console.log(question1,  question2, quest1, quest2);

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

getCheckedRadioValue = (response) => {
    for(i = 0; i < response.length; i++) { 
        if(response[i].checked) {
           res = response[i].value;
           return res;
        } 
    } 
}

getNextQuestion = (id) => {

    if (id > questionGroup1.length ) {
        document.getElementById("questions").innerHTML = "";
        loadNextQuestions();
        //createQuestionEelement(1);
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
    test = document.getElementById("questions");
    test.innerHTML = "<form>";
    test.innerHTML = "<h3 target="+index+" id='ques'>" +question+ "</h3>";
    // the += appends to the data we started on the line above
    test.innerHTML += "<input type='radio' name='choices' value='Yes' required /> Yes <br>";
    test.innerHTML += "<input type='radio' name='choices' value='No' required /> No <br><br>";
    test.innerHTML += "<button id='btnsubmit' class='btn btn-info' onclick='checkAnswer()'>Submit Answer</button>";
    test.innerHTML += "</form>";
}

let buttonclicked = false;
checkAnswer = () => {
    buttonclicked = true;
    var question, response; 
    question = document.getElementById("ques").innerHTML;
    var qId = document.getElementById("ques").getAttribute("target");
    var response = document.getElementsByName("choices");
    responseValue = getCheckedRadioValue(response);
    res = document.getElementById("res");
  
    if (responseValue === undefined) {
        res.innerHTML = "You have to make a selection";
    }
    else{
        for (var i in questionGroup1){
            if (questionGroup1[i].question === question) {
                if(responseValue === "No"){
                    res.innerHTML = questionGroup1[i].noResponse;
                    
                 }
                 else {
                    questionGroup1[i].answer = responseValue;
                    getNextQuestion(parseInt(qId)+1);
                 }
             }
         }
    }

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

displayNext = () => {
    var qId = document.getElementById("ques").getAttribute("target");
    const result  = validateForm();
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
    const result  = validateForm();
    if (questionIndex < 1){
      document.getElementById("previous").style.color = "#cccccc";
    }
    else if (result === ""){
        getNextQuestion(questionIndex);
    }
    else {
            return result;
        }
       
    
    
}

getFormResponse = (val1, val2) => {
     const highest = Object.values(val1)[0];
     const secondHighest  = Object.values(val2)[0];
     response1 =  responses[highest];
     response2 = responses[secondHighest];
     res = document.getElementById("questions2");
     res.innerHTML = "<h3>Our recommendation </h3> <div>" + responses[highest] +"</div><br/><div>"+ responses[secondHighest] + "</div><br/><br/>";
     res.innerHTML += "<button class='btn btn-info' onclick='location.reload()'>Start Again</button>"
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

   // get the corresponding response for the highest values
   getFormResponse(items[0], items[1]);

}


