/* This script is for Student Page only */
var StudentMarks = [];
window.addEventListener('DOMContentLoaded', (event) => {
  getDataandshow();
});

function showDatainTable() {
  var Data = "";
  for (let index = 0; index < StudentMarks.length; index++) {
    const element = StudentMarks[index];
    Data += `
         <tr>
                <th scope="row" style="text-align: center;">`+element.Topic+`</th>
                <td style="text-align: center;">`+ element.Maths +`</td>
                <td style="text-align: center;">`+ element.English +`</td>
                <td style="text-align: center;">` + element.Computer + `</td>
                <td style="text-align: center;">` + element.Total + `</td>
                </tr>`
  }
  document.getElementById("StudentMarks").innerHTML = Data;
 }
function getDataandshow() {
  $.get(
    "../Database/StudentsDb.js", {
  },
    function (data) {
      var d = JSON.parse(data);
      StudentMarks = d;
      showDatainTable();
    });
    
}

function OpenGradePage(){
  document.getElementById("Gradepagebar").style.backgroundColor="#31a6ea";
  document.getElementById("Studypagebar").style.backgroundColor="";
  document.getElementById("ProgressBar").style.backgroundColor="";
  document.getElementById("RevisionBar").style.backgroundColor="";
  document.getElementById("feedbackbar").style.backgroundColor="";
  document.getElementById("contactbar").style.backgroundColor="";

  document.getElementById("GradePage").style.display="";
  document.getElementById("StudyPage").style.display="none";
  document.getElementById("ProgressPage").style.display="none";
  document.getElementById("schedulePage").style.display="none";
  document.getElementById("FeedbackPage").style.display="none";
}
function OpenStudyPage(){
  document.getElementById("Gradepagebar").style.backgroundColor="";
  document.getElementById("Studypagebar").style.backgroundColor="#31a6ea";
  document.getElementById("ProgressBar").style.backgroundColor="";
  document.getElementById("RevisionBar").style.backgroundColor="";
  document.getElementById("feedbackbar").style.backgroundColor="";
  document.getElementById("contactbar").style.backgroundColor="";

  document.getElementById("GradePage").style.display="none";
  document.getElementById("StudyPage").style.display="";
  document.getElementById("ProgressPage").style.display="none";
  document.getElementById("schedulePage").style.display="none";
  document.getElementById("FeedbackPage").style.display="none";
}
function OpenProgresPage(){
  document.getElementById("Gradepagebar").style.backgroundColor="";
  document.getElementById("Studypagebar").style.backgroundColor="";
  document.getElementById("ProgressBar").style.backgroundColor="#31a6ea";
  document.getElementById("RevisionBar").style.backgroundColor="";
  document.getElementById("feedbackbar").style.backgroundColor="";
  document.getElementById("contactbar").style.backgroundColor="";

  document.getElementById("GradePage").style.display="none";
  document.getElementById("StudyPage").style.display="none";
  document.getElementById("ProgressPage").style.display="";
  document.getElementById("schedulePage").style.display="none";
  document.getElementById("FeedbackPage").style.display="none";
}
function OpenRevisionPage(){
  document.getElementById("Gradepagebar").style.backgroundColor="";
  document.getElementById("Studypagebar").style.backgroundColor="";
  document.getElementById("ProgressBar").style.backgroundColor="";
  document.getElementById("RevisionBar").style.backgroundColor="#31a6ea";
  document.getElementById("feedbackbar").style.backgroundColor="";
  document.getElementById("contactbar").style.backgroundColor="";

  document.getElementById("GradePage").style.display="none";
  document.getElementById("StudyPage").style.display="none";
  document.getElementById("ProgressPage").style.display="none";
  document.getElementById("schedulePage").style.display="";
  document.getElementById("FeedbackPage").style.display="none";
}

function OpenFeedBackPage(){
  document.getElementById("Gradepagebar").style.backgroundColor="";
  document.getElementById("Studypagebar").style.backgroundColor="";
  document.getElementById("ProgressBar").style.backgroundColor="";
  document.getElementById("RevisionBar").style.backgroundColor="";
  document.getElementById("feedbackbar").style.backgroundColor="#31a6ea";
  document.getElementById("contactbar").style.backgroundColor="";

  document.getElementById("GradePage").style.display="none";
  document.getElementById("StudyPage").style.display="none";
  document.getElementById("ProgressPage").style.display="none";
  document.getElementById("schedulePage").style.display="none";
  document.getElementById("FeedbackPage").style.display="";
}

function Submitstudentfeedback(){
  document.getElementById("Submitstudentfeedback").style.display="";
  document.getElementById("bgblue").style.display="";
}
function closestudentfeedback(){
  document.getElementById("Submitstudentfeedback").style.display="none";
  document.getElementById("bgblue").style.display="none";
}