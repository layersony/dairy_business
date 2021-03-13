var number = document.getElementById("nos_sheds").value; //user input
var container = document.getElementById("newslots"); //this is div


function addshed(number){
  // var number = document.getElementById("nos_sheds").value;
  // var container = document.getElementById("newslots"); //this is div

  while(container.hasChildNodes()){
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
  console.log(sum)
  return sum;
};

function totalMilk(number){
  var totalMilk = [];
  total = 0;
  for (a=0; a<number; a++){
    for (i=0; i<number; i++){
      var slotmilk = document.getElementById("num"+i).value
      totalMilk.push(slotmilk);

      var totalLitres = document.createElement('p');
      totalLitres.id="demo"
      totalLitres.innerHTML="Your production in Shed "+ (a+1) +" = "+ slotmilk +" litres per day";
      container.appendChild(totalLitres);
    };
    break
  };
  return sumShed(totalMilk);
};