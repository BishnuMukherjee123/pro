sendMail = ()=>{
    let parms ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_vzra8zm", "template_7pbzece", parms).then(alert("your email has been sended!!"))
}

// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault();
//   emailjs.sendForm("service_vzra8zm", "template_7pbzece", this).then(
//     function () {
//       alert("Message sent successfully!");
//       document.getElementById("contactForm").reset();
//     },
//     function (error) {
//       console.error("FAILED...", error);
//       alert("Failed to send. Please try again.");
//     }
//   );
// });
