function MailSuccess() {
    let name = document.getElementById("nameFormControl").value;
    alert("Hi " + name + "!");
    document.getElementById("nameFormControl").value = "";
    document.getElementById("mailFormControl").value = "";
    document.getElementById("textFormControl").value = "";
    var form = document.getElementById("contactForm");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
  
}



 