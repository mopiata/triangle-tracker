function triTracker() {
  var sideOne = parseInt(document.getElementById("input1").value);
  var sideTwo = parseInt(document.getElementById("input2").value);
  var sideThree = parseInt(document.getElementById("input3").value);
  var text;

  var sides = [sideOne, sideTwo, sideThree].sort((a, b) => a - b);
  
  if (sides[0] > 0 && sides[1] > 0 && sides[2] > 0){
    if (sides[0] === sides[1] && sides[1] === sides[2]){
      text = "Your triangle is Equilateral!";
    } else if (sides[0] === sides[1] || sides[1] === sides[2]){
      text = "Your triangle is Isosceles!";
    } else if (sides[0] + sides[1] > sides[2]){
    text = "Your triangle is Scalene!";
    }else{
      text ="Your values cannot form a triangle!";
    }
  }else{
    text="You're required to enter a positive number!";
  }

  document.getElementById("triType").innerHTML = text;
}

