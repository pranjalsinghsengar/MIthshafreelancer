let imgBase64;

document.addEventListener("DOMContentLoaded", function () {
  let fileInput = document.querySelector("#imageInput");
  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      imgBase64 = reader.result;
      console.log("imgBase64 ", imgBase64); // Moved inside the event handler
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  });
});

function sendMail() {
  backData();
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    trasectionId: document.getElementById("trasectionId").value,
    imgsrc: imgBase64,
  };

  console.log(params);

  const serviceID = "service_5mrczlr";
  const templateID = "template_xt82oad";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.querySelector(".paymentpage").style.display = "none";

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("trasectionId").value = "";
      document.querySelector("#imageInput").value = "";
      imgBase64 = "";

      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}

function backData() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    trasectionId: document.getElementById("trasectionId").value,
    imgsrc: imgBase64,
  };

  console.log(params);

  const serviceID = "service_5mrczlr";
  const templateID = "template_gpg2nel";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.querySelector(".paymentpage").style.display = "none";

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("trasectionId").value = "";
      document.querySelector("#imageInput").value = "";
      imgBase64 = "";

      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}