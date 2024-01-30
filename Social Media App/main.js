var form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let post = document.getElementById("post");

form.addEventListener("submit",
    (e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

let formValidation = () => {
    if(input.value === "")
    {
        msg.innerHTML="Post Cannot be Blank";
        console.log("failure");
    }
    else
    {
        msg.innerHTML="";
        console.log("success");
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    post.innerHTML +=
    
    `<div>
        <p class="text">${ data.text}</p>
        <span class="options">
            <button class="button" onClick="editPost(this)"> Edit </button>
            <button class="button" onclick="deletePost(this)"> Delete </button     
        </span>
    </div>`;

    input.value = "";
   
}

let deletePost = (dlt) => {
    dlt.parentElement.parentElement.remove();
};

let editPost = (edit) => {
    input.value = edit.parentElement.previousElementSibling.innerHTML;
    edit.parentElement.parentElement.remove();
    
}