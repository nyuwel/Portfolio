function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_rdb1bu1", "template_d2k630k", parms).then(alert("Message Sent!"))          
}