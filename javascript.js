

function oncall(){
    if((document.getElementById("nick").value =="") ||
    (document.getElementById("gender").value =="")||
    (document.getElementById("level").value =="")||
    (document.getElementById("skype").value =="") )
    {
        confirm("Please Enter All Details");
    }
    else{
        pushing();
    }
   
    
}


function pushing() {
    var xaa = document.getElementById("total_list").rows.length;
    var table = document.getElementById("total_list");
    var row = table.insertRow(xaa);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    

    var skypevar = document.getElementById("skype").value;

    cell1.innerHTML = xaa;
    cell2.innerHTML = document.getElementById("nick").value;
    cell3.innerHTML = document.getElementById("gender").value;
    cell4.innerHTML = document.getElementById("level").value;
    cell5.innerHTML = skypevar.link("skype:"+skypevar+"?chat");

    (document.getElementById("nick").value ="") ;
    (document.getElementById("gender").value ="");
    (document.getElementById("level").value ="");
    (document.getElementById("skype").value ="");



}
