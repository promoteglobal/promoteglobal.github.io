function makeGrid() {
  var x = document.getElementById("inputHeight").value;
  var y = document.getElementById("inputWeight").value;
  var code = "";
  code += "<tr> \n";  //Creates the first <tr> (but not the middle or end of <tr>.)
  
  for (var i = 0; i < x; i++){
    if (i === 0){
      document.getElementById("pixelCanvas").innerHTML = code;
    } //Prints the first <tr> (but not the middle or end of <tr>.)
    else if (i < x ){
      code += "</tr> \n <tr> \n";
      document.getElementById("pixelCanvas").innerHTML = code;
    } //creates, prints and finishes the last </tr> and starts a new <tr>, but doesn't finish the last <tr> just yet.
    for( var z = 0; z < y; z++){
          code += "<td onclick = 'changeColor(id)' ></td> \n";
    } //creates requested <td> (width) of the table and adds an event handler that will call the changeColor function that accepts a parameter for each square clicked on.  Notice that I was able to use 2 parameters.  The argument is the individual id I create later that is pulled from each <td> element.
  } //ends first for loop.
  
  code += "</tr> \n"; //creates last </tr>
  document.getElementById("pixelCanvas").innerHTML = code; //prints completed table.
  var boxEl = $("td"); 
  boxEl.addClass("step1"); //adds a class to all <td>
  var boxID = $(".step1");
  boxID.each(function(i,td){
  td.id = "div" + (i + 1); //adds an individual id to each <td> requested.
  }); //end .each function.
} //end makeGrid function

function changeColor(passid){
  var value = document.getElementById("colorPicker").value;
  var changeColor = document.getElementById(passid).style.backgroundColor = value; //Notice that I didn't put passid as an id in the html.  This is accepting the parameter, "id" which contains the argument information placed in each <td> that was created using the .each function during the making of the chart in the makeGrid() function.
  
  return value;
}
