var number = document.getElementById("nos_sheds").value ;

function addshed(numb){
  var container = document.getElementById("newslots");
  while(container.hasChildNodes()){
    container.removeChild(container.lastChild);
  }
  for (i=0; i<number; i++){
    container.appendChild(document.createTextNode("Shed " + (i+1) + " Litres Per Day"));

    var input = document.createElement("input");
    input.type="text";
    input.name="shed " + i;
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
  }
};

function sumShed(num){
  sum = 0
  for (var i = 0; i < num.length; i++){
    sum += num[i];
  }

  return sum;
};

