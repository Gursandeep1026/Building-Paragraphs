var array_1 =[];
function submit(){
    for(var j=1;j<=6;j++){
        var para_var=document.getElementById("Input_Box_"+j).value;
        array_1.push(para_var);
        console.log(array_1);
    }
  /* var array_2=[];
    for(var k=0;k<array_1.length;k++){
        array_2.push("Line:-"+array_1[k]);
    }*/
   
    document.getElementById("show_paragraph_1").innerHTML=array_1.join(".") ;
}