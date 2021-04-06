function getparagraph1()
{
    var inputs= [];
    for(var i= 1 ; 1<6 ; i++)
    {
inputs.push(document.getElementById("para1_input1"+ i).value);
inputs.join(". ") ;
document.getElementById("showparagraph1").innerHTML = inputs.join(". ");

inputs.push(document.getElementById("para1_input2"+ i).value);
inputs.join(". ") ;
document.getElementById("showparagraph1").innerHTML = inputs.join(". ");

inputs.push(document.getElementById("para1_input3"+ i).value);
inputs.join(". ") ;
document.getElementById("showparagraph1").innerHTML = inputs.join(". ");

inputs.push(document.getElementById("para1_input4"+ i).value);
inputs.join(". ") ;
document.getElementById("showparagraph1").innerHTML = inputs.join(". ");

inputs.push(document.getElementById("para1_input5"+ i).value);
inputs.join(". ") ;
document.getElementById("showparagraph1").innerHTML = inputs.join(". ");

inputs.push(document.getElementById("para1_input6"+ i).value);
inputs.join(". ") ;
document.getElementById("showparagraph1").innerHTML = inputs.join(". ");
}
}