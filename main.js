function getparagraph1()
{
    var inputs= [];
    for(var i= 1 ; i<=6 ; i++)
    {
inputs.push(document.getElementById("para1_input"+ i).value);
    }
inputs.join(". ") ;
document.getElementById("showparagraph1").innerHTML = inputs.join(". ");
}
