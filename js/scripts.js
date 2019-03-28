function triTracker(sides) {
  var sideOne = document.getElementById("input1").value;
  var sideTwo = document.getElementById("input2").value;
  var sideThree = document.getElementById("input3").value;
  var text;

  var sides = [sideOne, sideTwo, sideThree].sort((a, b) => a - b);

  // if(sides[0]===sides[1]&&sides[1]===sides[2]){
  //   text = "Your triangle is Equilateral!";
  // if(sides[0]===sides[1]||sides[1]===sides[2]){
  //    text = "Your triangle is Isosceles!";
  //  }
  if(sides[0]+sides[1]>sides[2]){
   text = "Your triangle is Scalene!";
  }

  document.getElementById("triType").innerHTML = text;
}