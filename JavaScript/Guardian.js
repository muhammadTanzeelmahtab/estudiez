/* This script is for Gurdian Page only */

function OpenGradepage(){
  document.getElementById("gradesbar").style.backgroundColor="#31a6ea";
  document.getElementById("progressbar").style.backgroundColor="";
  document.getElementById("feedbackbar").style.backgroundColor="";

  document.getElementById("GradePage").style.display="";
  document.getElementById("ProgressPage").style.display="none";
  document.getElementById("FeedbackPage").style.display="none";
}
function OpenProgress(){
  document.getElementById("gradesbar").style.backgroundColor="";
  document.getElementById("progressbar").style.backgroundColor="#31a6ea";
  document.getElementById("feedbackbar").style.backgroundColor="";

  document.getElementById("GradePage").style.display="none";
  document.getElementById("ProgressPage").style.display="";
  document.getElementById("FeedbackPage").style.display="none";
}
function openfeedbackpage(){
  document.getElementById("gradesbar").style.backgroundColor="";
  document.getElementById("progressbar").style.backgroundColor="";
  document.getElementById("feedbackbar").style.backgroundColor="#31a6ea";

  document.getElementById("GradePage").style.display="none";
  document.getElementById("ProgressPage").style.display="none";
  document.getElementById("FeedbackPage").style.display="";
}


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
    
};

  function Submitfeedback(){
    document.getElementById("Submitfeedback").style.display="";
    document.getElementById("bgblue").style.display="";
  }
  function Ok(){
    document.getElementById("Submitfeedback").style.display="none";
    document.getElementById("bgblue").style.display="none";
  }
  function loginout(){
    document.getElementById("logout").style.display="";
    document.getElementById("bgblue").style.display="";
}
function Yeslogout(){
    location.replace("../index.html");
    document.getElementById("logout").style.display="none";
    document.getElementById("bgblue").style.display="none";
}
function Nologout(){
    document.getElementById("logout").style.display="none";
    document.getElementById("bgblue").style.display="none";
}