// var number = document.getElementById("nos_sheds").value; //user input

function addshed(){
  var number = document.getElementById("nos_sheds").value;
  var container = document.getElementById("newslots"); //this is div

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
  genttl.onclick = function(){totalMilk(number)};
  container.appendChild(genttl);
};

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
  for (i=0; i<number; i++){
    totalMilk.push(document.getElementById("num"+i).value);
  };
  return sumShed(totalMilk);
};