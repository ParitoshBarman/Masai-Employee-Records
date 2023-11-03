let form = document.querySelector("form");
let name = document.getElementById("name");
let employeeID = document.getElementById("employeeID");
let department = document.getElementById("department");
let exp = document.getElementById("exp");
let email = document.getElementById("email");
let mbl = document.getElementById("mbl");

let tbody = document.querySelector("tbody");


let employeeList = [];


form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let obj = {};
    obj.name = name.value
    obj.employeeID = employeeID.value
    obj.department = department.value
    obj.exp = exp.value
    obj.email = email.value
    obj.mbl = mbl.value
    employeeList.push(obj);
    // console.log(employeeList);

    tbody.innerHTML = null;

    employeeList.map((ele, indx)=>{
        let newRow = document.createElement("tr");

        let nameData = document.createElement("td");
        let employeeIDData = document.createElement("td");
        let departmentData = document.createElement("td");
        let expData = document.createElement("td");
        let emailData = document.createElement("td");
        let mblData = document.createElement("td");
        let role = document.createElement("td");
        let deletDat = document.createElement("td");
        let btn = document.createElement("button");
        

        nameData.innerText = ele.name;
        employeeIDData.innerText = ele.employeeID;
        departmentData.innerText = ele.department;
        expData.innerText = ele.exp;
        emailData.innerText = ele.email;
        mblData.innerText = ele.mbl;


        if(Number(ele.exp) <= 1){
            role.innerText = "Fresher";
        }
        else if((Number(ele.exp) >= 2) && (Number(ele.exp)  <= 5)){
            role.innerText = "Junior";
        }
        else if(Number(ele.exp) > 5){
            role.innerText = "Senior";
        }
        
        
        btn.setAttribute("data-indx", `${indx}`);
        btn.setAttribute("onclick", "deleteFunc(this)");
        btn.innerText = "Delete";
        deletDat.append(btn);
        

        newRow.append(nameData, employeeIDData, departmentData, expData, emailData, mblData, role, deletDat);
        tbody.append(newRow);

        form.reset()
    });
});

function deleteFunc(ev){
    employeeList.splice(Number(ev.getAttribute("data-indx")), 1);

    tbody.innerHTML = null;

    employeeList.map((ele, indx)=>{
        let newRow = document.createElement("tr");

        let nameData = document.createElement("td");
        let employeeIDData = document.createElement("td");
        let departmentData = document.createElement("td");
        let expData = document.createElement("td");
        let emailData = document.createElement("td");
        let mblData = document.createElement("td");
        let role = document.createElement("td");
        let deletDat = document.createElement("td");
        let btn = document.createElement("button");
        

        nameData.innerText = ele.name;
        employeeIDData.innerText = ele.employeeID;
        departmentData.innerText = ele.department;
        expData.innerText = ele.exp;
        emailData.innerText = ele.email;
        mblData.innerText = ele.mbl;
        
        if(Number(ele.exp) <= 1){
            role.innerText = "Fresher";
        }
        else if((Number(ele.exp) >= 2) && (Number(ele.exp)  <= 5)){
            role.innerText = "Junior";
        }
        else if(Number(ele.exp) > 5){
            role.innerText = "Senior";
        }
        
        btn.setAttribute("data-indx", `${indx}`);
        btn.setAttribute("onclick", "deleteFunc(this)");
        btn.innerText = "Delete";
        deletDat.append(btn);
        

        newRow.append(nameData, employeeIDData, departmentData, expData, emailData, mblData, role, deletDat);
        tbody.append(newRow);

        form.reset();
});
    
}