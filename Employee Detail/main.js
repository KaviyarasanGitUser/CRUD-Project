var form = document.getElementById("form");
var idInput = document.getElementById("id-input");
var nameInput = document.getElementById("name-input");
var dobInput = document.getElementById("dob-input");
var emailInput = document.getElementById("email-input");
var msg = document.getElementById("msg");
let data = {};

form.addEventListener("submit",
    (e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

const formValidation = () => {
  
    console.log("field check",idInput.value)

    if(idInput.value === "" )
    {
        msg.innerHTML="Please Enter All the details"
        console.log("failure");
    }
    else if( nameInput.value === "")
    {
        msg.innerHTML="Please Enter All the details";
        console.log("failure");
    }
    else if(dobInput.value === "")
    {
        msg.innerHTML="Please Enter All the details";
        console.log("failure");
    }
    else if(emailInput.value === ""){
        msg.innerHTML="Please Enter All the details";
        console.log("failure");
    }
    else
    {

        
        msg.innerHTML="";
        console.log("success");
        // console.log(idInput.value);
        acceptData();
    }
};




let acceptData = () => {
    data["id"] = idInput.value;
    data["name"] = nameInput.value;
    data["dob"] = dobInput.value;
    data["email"] = emailInput.value;
    console.log(data);
    createData();
};

let createData = () => {
    detail.innerHTML +=
    
    `<tr>
        <td>${ data.id}</td>
        <td>${ data.name}</td>
        <td>${ data.dob}</td>
        <td>${ data.email}</td>
        <td>
            <span class="options">
                <button class="edit-btn" onclick="editData(this)"> Edit </button>
                <button class="delete-btn" onclick="deleteData(this)"> Delete </button
            </span>
        </td>
    </tr>`;

    idInput.value = "";
    nameInput.value = "";
    dobInput.value = "";
    emailInput.value = "";
}

let deleteData = (dlt) => {
    dlt.parentElement.parentElement.parentElement.remove();
};

let editData = (edit) => {

    if(idInput.value === "" && nameInput.value === "" && dobInput.value === "" && emailInput.value === "")
    {
        emailInput.value = edit.parentElement.parentElement.previousElementSibling.innerHTML;
        dobInput.value = edit.parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML;
        nameInput.value = edit.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
        idInput.value = edit.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
        edit.parentElement.parentElement.parentElement.remove();
    }
    else
    {
        msg.innerHTML="Please save the previous value";
    }
    
}

let clearData = () => {
    idInput.value = "";
    nameInput.value = "";
    dobInput.value = "";
    emailInput.value = "";
}

