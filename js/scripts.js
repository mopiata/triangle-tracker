function triTracker(sides) {
  var sideOne = document.getElementById("input1").value;
  var sideTwo = document.getElementById("input2").value;
  var sideThree = document.getElementById("input3").value;
  var text;

  var sides = [sideOne, sideTwo, sideThree].sort();

  // if(sides[0]===sides[1]&&sides[1]===sides[2]){
  //   text = "Your triangle is Equilateral!";
  if(sides[0]===sides[1]||sides[1]===sides[2]){
     text = "Your triangle is Isosceles!";
   }

  document.getElementById("triType").innerHTML = text;
}