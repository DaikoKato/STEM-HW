/* 
No.( 2 ) Name: [DON'T SAVE YOUR NAME ONLINE]
Calculate the area of the rocket ship shape in the image. This may look like a  
big problem, but it is easier if we break it down into smaller pieces. Think of  
the steps for calculating the total area:

1. Calculate the area of the rectangle
2. Calculate the area of the top triangle
3. Calculate the area of the two side triangles
4. Add together all the areas and return the answer

The function below named getInputs takes the values from the text boxes on the  
page and sends them to the getTotalArea function as arguments. Complete the 
getTotalArea function to calculate the area of the whole shape and then update 
the global variable named totalArea. You can make new functions for calculating
each of the smaller areas and then call those functions from inside the 
getTotalArea function. For example, a function getRectangleArea(side1, side2) 
would calculate and return the area of the rectangle from the sides. Also, your
getTotalArea function should check the values of the arguments for positive 
numbers. If the user does not enter a positive number for any of the inputs, you
should alert a message "Please enter positive numbers only".
*/
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  YOUR CODE  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// global variable for the total area of the shape
let totalArea = "??";
function getRctangleArea(length, width){
  return length * width;
}

function getTriangleArea(base, height){
  return 1/2 * base * height;
}

function getTotalArea(h1, h2, b1, b2) {
  // check if h1, h2, b1, and b2 are positive numbers
  // if they are, then calculate the total area of the shape
  // if not, then alert the user to enter all positive numbers
if(h1 > 0&& h2 > 0 && b1 > 0 && b2 > 0){
  let recArea = getRctangleArea(h2 * 2, b1);
  let triArea = getTriangleArea(b1 , h1)
  let smallTriarea = getTriangleArea(b2, h2)*2;

  totalArea = recArea + triArea + smallTriarea;

}else{
  alert("Please enter positive numbers");
}
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑  YOUR CODE  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// The function below is called when the "Submit" button is clicked. It gets the 
// values from the four text boxes, calls the getArea function with those values
// as arguments, and then updates the "Total Area" on the page with the value of
// the totalArea variable.
function getInputs() {
  let height1, height2, base1, base2;
  height1 = document.getElementById("ih1").value;
  height2 = document.getElementById("ih2").value;
  base1 = document.getElementById("ib1").value;
  base2 = document.getElementById("ib2").value;
  getTotalArea(height1, height2, base1, base2);
  document.getElementById("output").innerText = totalArea;
}


