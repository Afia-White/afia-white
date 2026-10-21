function hire(){
    alert("Contact me and my team through afiawhite82@gmail.com")
}
// function form_submit(){
//     let name=document.getElementById("student").value;
//     let email=document.getElementById("email").value;
//     let number=document.getElementById("number").value;
//     let message=document.getElementById("message").value;
    
//     if(name == "" || email == "" || number=="" || message==""){
//         alert("Please,first fill in the form.");
//         // console.log("Please,first fill in the form.");
//     }
//     else{
//         alert("Thank you for filling the forms.I will get to you soon.");
//         // console.log("Thank you for filling the forms.I will get to you soon.");
//     }
// }
// function form_submit() {}
const btn3=document.getElementById("formsubmit");
function form_submit(){
    let name = document.getElementById("student").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let message = document.getElementById("message").value;
    if (name == "" || email == "" || number == "" || message == "") {
                alert("Please, first fill in the form.");
            } else{
            alert("Thank you for filling in the forms.I will get to you soon.");
        } 
}
btn3.addEventListener("mouseover",form_submit);