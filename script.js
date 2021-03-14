//First Report to Generate

var number = document.getElementById("nos_sheds").value; //user input
var container = document.getElementById("newslots"); //this is div
var times = document.getElementById("times").value; // brookside userinput
// var timereport = document.getElementById("timereport"); 
var reportweek = document.getElementById("reportweekly"); 
var reportyear = document.getElementById("reportyearly"); 


function addshed(number){
  // var number = document.getElementById("nos_sheds").value;
  // var container = document.getElementById("newslots"); //this is div

  while(container.hasChildNodes()){ // remove the input if there is any
    container.removeChild(container.lastChild);
  }
  for (i=0; i<number; i++){
    container.appendChild(document.createTextNode("Shed " + (i+1) + " Litres Per Day"));

    var input = document.createElement("input");
    input.type="text";
    input.name="shed " + i;
    input.id= "num"+i
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
  }
  var genttl = document.createElement("input");
  genttl.type="button";
  genttl.id= "genB";
  genttl.value = "Generate Total";
  genttl.onclick = function(){litreReport(number)};
  container.appendChild(genttl);
  
}
//diplay to html

function litreReport(number){
  // var container = document.getElementById("newslots"); //this is div

  var totalLitres = document.createElement('p');
  totalLitres.id="ttlmilk"
  totalLitres.innerHTML="The total production is "+ totalMilk(number) +" litres per day";
  container.appendChild(totalLitres);
}

function sumShed(num){
  sum = 0
  for (var i = 0; i < num.length; i++){
    sum += parseInt(num[i]);
  }
  return sum;
};

function totalMilk(number){
  var totalMilk = [];
  total = 0;
  for (i=0; i<number; i++){
    var slotmilk = document.getElementById("num"+i).value
    totalMilk.push(slotmilk);

    var totalLitres = document.createElement('p');
    totalLitres.id="demo"
    totalLitres.innerHTML="Your production in Shed "+ (i+1) +" = "+ slotmilk +" litres per day";
    container.appendChild(totalLitres);
  };
  return sumShed(totalMilk);
};

// generate report on th brookside

// function incomeOverTime(number){
//   console.log((totalMilk(number) * 7)*45);// weekly
//   console.log((totalMilk(number) * 365)*45);// yearly
//   console.log((totalMilk(number) * 366)*45);// yearly leap
// }

function incomeOverTime(times=45){
  var default_no = times;
  if (times > 45){
    console.log(times);
  }else if (times < 45){
    console.log("less than");
  }
  else{
    console.log("equal");
  }
};

// function overtime(time){
//    if (document.getElementById("monthly")){
//      console.log("monthly");
//    }else if (document.getElementsById("yearly").selected = "true"){
//      console.log("yearly")
//    }
// };

function reportweekly(number){
    console.log((totalMilk(number) * 30)*45);// weekly
    var week_ttl = (totalMilk(number) * 30)*45
    var week = document.createElement('p');
    week.id="rptmon"
    week.innerHTML="Your Weekly income will be Ksh "+ Math.floor(week_ttl) ;
    reportweek.appendChild(week);
};

function reportyearly(number){
  console.log((totalMilk(number) * 30)*45);// yearly
  var year_ttl = (totalMilk(number) * 365)*45
  var year = document.createElement('p');
  year.id="rptyr"
  year.innerHTML="Your Yearly income will be Ksh "+ Math.floor(year_ttl);
  reportyear.appendChild(year);
};