var row =1;
 var submit = document.getElementById("submit");
 submit.addEventListener("click",displayDetails);
 function displayDetails() {
     var id = document.getElementById("id").value;
     var name = document.getElementById("name").value;
     var role = document.getElementById("role").value;
     var salary = document.getElementById("salary").value;

     if (!id || !name || !role || !salary){
         alert("please fill all the fields");
         return;
     }

     var table = document.getElementById("table");

     var newRow = table.insertRow(row);

     var cell1 = newRow.insertCell(0);
     var cell2 = newRow.insertCell(1);
     var cell3 = newRow.insertCell(2);
     var cell4 = newRow.insertCell(3);

     cell1.innerHTML = id;
     cell2.innerHTML = name;
     cell3.innerHTML = role;
     cell4.innerHTML = salary;

     row++;
     console.log(cell1);

     
 }