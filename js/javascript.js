var count=0;
var myArray = [
{
"question":"1. Which of these is the method which is executed first before execution of any other thing takes place in a program?",
"option1":"main method",
"option2":"finalize method",
"option3":"static method",
"option4":"private method",
"answer":"C"
},
{
"question":"2. What is the process of defining more than one method in a class differentiated by parameters?",
"option1":"Function overriding",
"option2":"Function overloading",
"option3":"Function doubling",
"option4":"kerhgfvjer",
"answer":"B"
},
{
"question":"3. Which of these statement is incorrect?",
"option1":"Two or more methods with same name can be diffrenciated on the basis of their parameters data type.",
"option2":"Two or more method having same name can be diffrentiated on basis of number of parameters.",
"option3":"If a method is returning a value the calling statement must have a varible to store that value.",
"option4":"kerhgfvjer",
"answer":"C"
},
{
"question":"ques4",
"option1":"herbfhrj",
"option2":"jhercfhjer",
"option3":"ejrhfvjr",
"option4":"kerhgfvjer",
"answer":"C"
}
];






function myFunction(arr) {
    var out = "";
var a="A. ", b="B. ", c="C. ";

    var i; var rem=0;
    for(i = 0; i < arr.length; i++) {

var ans;
ans=arr[i].answer;
out='<div class="panel panel-primary"><div class="panel-heading"><h2>Questions</h2></div>    <div class="panel-body"><div class="container-fluid"><div class="Q"><span>'+arr[i].question+'</span></div>'+
'<div class="row"><div class="col-sm-12"><input type="radio"   onclick="validate(id,'+i+')" id="b1" class="quiz" value="A" name="A"><span>'+a+' '+arr[i].option1+'</span><br/></div>'+
'<div class="col-sm-12"><input  type="radio"  onclick="validate(id,'+i+')"    id="b2" class="quiz" value="B" name="A"><span>'+b+' '+arr[i].option2+'</span><br/></div>'+
'<div class="col-sm-12"><input type="radio"   onclick="validate(id,'+i+')"  id="b3" class="quiz"value="C"    name="A"><span>'+c+' '+arr[i].option3+'</span></div>'+
'<input type="hidden" class="xyz" id="hidden_ans'+i+'" value='+ans+'></input></div></div><div id="button-in"><button type="button" value="next" onclick="load_nextA()" id="next-button" class="btn btn-primary btn-block"><span>Next</span></button></div></div></div>';
rem++;
        if(rem==1){document.getElementById("id01").innerHTML = out;}
        if(rem==2){document.getElementById("id02").innerHTML = out;}
        if(rem==3){document.getElementById("id03").innerHTML = out;}

    }
    //document.getElementById("id01").innerHTML = out;
}
function validate(id,i){
//var modal = document.getElementById('myModal');
var c="hidden_ans";
c=c.trim();
var a=c+i;
var req=document.getElementById(id).value;
//alert(req);
var res=document.getElementById(a).value;
//alert(res);
if(req==res){alert('done');
//count++;
//alert(count);
}

if(req!=res)

    {
//$('.quiz input').addAttr('unchecked');
        alert('wrong'); 

}
}


var next=0;
function load_nextA(){
    
next++;
//$("#id01").attr("display","none");
if(next==1){
$("#id01").css("display","none");
$("#id02").css("display","inline");
}
if(next==2){

    $("#id01").css("display","none");
$("#id02").css("display","none");
$("#id03").css("display","inline");
$("#next-button").attr('value', 'Submit');
}
if(next==3)
{

    alert("data submitted");
}
}
/*
$(document).on('click','.quiz', function(){     
      $('.quiz').attr('checked', false);

      $(this).attr('checked', true);         
});
VVI IMPORTANT NOTE: ALWAYS SPECIFY NAME ATTRIBUTE WITH SAME VALUE TO THE RADIO BUTTONS ELSE  MULTIPLE BUTTONS WILL GET SELECTED AND NORMAL CODES WON'T WORK FOR THEM---------  :) 
*/