let Name = document.getElementById("Name");
let FName = document.getElementById("FName");
let ID = document.getElementById("Id");
let CNIC = document.getElementById("Cnic");
let Btn = document.getElementById("btn");

Btn.onclick = ()=>
    {
        let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);


document.getElementById('body').appendChild(table);


let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Sr. No.";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Name";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "FatherName";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "ID";
let heading_5 = document.createElement('th');
heading_4.innerHTML = "CNIC";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
thead.appendChild(row_1);


let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "1.";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerText = Name.value;
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerText = FName.value;
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerText = ID.value;

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
tbody.appendChild(row_2);

    };
    

console.log("Ali");
