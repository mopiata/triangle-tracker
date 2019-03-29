function triTracker() {
  var sideOne = parseInt(document.getElementById("input1").value);
  var sideTwo = parseInt(document.getElementById("input2").value);
  var sideThree = parseInt(document.getElementById("input3").value);
  var imgSource;
  var text;

  var sides = [sideOne, sideTwo, sideThree].sort((a, b) => a - b);

  if (sides[0] > 0 && sides[1] > 0 && sides[2] > 0){
    if (sides[0] === sides[1] && sides[1] === sides[2]){
      text = "Your triangle is Equilateral!";
      document.getElementById("image").innerHTML = '<img src="images/equilateral.png" alt="Triangle Type">';
    } else if (sides[0] === sides[1] || sides[1] === sides[2]){
      text = "Your triangle is Isosceles!";
      document.getElementById("image").innerHTML = '<img src="images/isosceles.png" alt="Triangle Type">';
    } else if (sides[0] + sides[1] > sides[2]){
      text = "Your triangle is Scalene!";
      document.getElementById("image").innerHTML = '<img src="images/scalene.gif" alt="Triangle Type">';
    }else{
      text ="Your values cannot form a triangle!";
    }
  } else if (sides[0] === 0 || sides[1] === 0 && sides[2] === 0){
    text="You must enter a number greater than zero!";
  }else{
    text="You're required to enter a positive number!";
  }

  document.getElementById("triType").innerHTML = text;
  
}

function formClear(){
  document.getElementById("input1").value="";
  document.getElementById("input2").value="";
  document.getElementById("input3").value="";
  document.getElementById("triType").innerHTML = "";
  document.getElementById("image").innerHTML ="";
}