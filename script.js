
emailjs.init("lnzedyoKuyojNG8_i");

document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_yx7098h", "template_8fue4p6", this)
        .then(() => {
            window.location.href = "birthday.html";
            // document.getElementById("quizForm").reset();
            // document.getElementById("messageBox").style.display = "block";
        }, (error) => {
            alert("Something went wrong: " + JSON.stringify(error));
        });
});
