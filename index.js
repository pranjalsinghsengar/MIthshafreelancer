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
  let Form_Type = document.getElementById("Form_Type").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let aadharNumber = document.getElementById("aadharNumber").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let fatherName = document.getElementById("fathers_Name").value;
  
  
  
  
  
  if (Form_Type && name && email && aadharNumber && phoneNumber && fatherName) {
    backData();
    var params = {
      Form_Type: document.getElementById("Form_Type").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      aadharNumber: document.getElementById("aadharNumber").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      fatherName: document.getElementById("fathers_Name").value,
      correspondence_Address: document.getElementById("correspondence_Address")
        .value,
      correspondence_State: document.getElementById("correspondence_State")
        .value,
      correspondence_District: document.getElementById(
        "correspondence_District"
      ).value,
      correspondence_Pincode: document.getElementById("correspondence_Pincode")
        .value,
      permanentAddress: document.getElementById("permanentAddress").value,
      permanentState: document.getElementById("permanentState").value,
      permanentDistrict: document.getElementById("permanentDistrict").value,
      permanentPincode: document.getElementById("permanentPincode").value,
      dob: document.getElementById("dob").value,
      Category: document.getElementById("Category").value,

      marital_Status: document.getElementById("marital_Status").value,
      Matricuniversity: document.getElementById("Matricuniversity").value,
      Matricyear: document.getElementById("Matricyear").value,
      Matricpercentage: document.getElementById("Matricpercentage").value,
      interuniversity: document.getElementById("interuniversity").value,
      interyear: document.getElementById("interyear").value,
      interpercentage: document.getElementById("interpercentage").value,
      b_university: document.getElementById("b_university").value,
      b_year: document.getElementById("b_year").value,
      b_percentage: document.getElementById("b_percentage").value,
      other: document.getElementById("other").value,
      otheruniversity: document.getElementById("otheruniversity").value,
      otheryear: document.getElementById("otheryear").value,
      otherpercentage: document.getElementById("otherpercentage").value,

      cmpny1: document.getElementById("cmpny1").value,
      cmpny1_designation: document.getElementById("cmpny1_designation").value,
      cmpny1_startDate: document.getElementById("cmpny1_startDate").value,
      cmpny1_endDate: document.getElementById("cmpny1_endDate").value,
      cmpny2: document.getElementById("cmpny2").value,
      cmpny2_designation: document.getElementById("cmpny2_designation").value,
      cmpny2_startDate: document.getElementById("cmpny2_startDate").value,
      cmpny2_endDate: document.getElementById("cmpny2_endDate").value,

      Referral: document.getElementById("Referral").value,

      // imgsrc: imgBase64,
    };

    console.log(params);

    const serviceID = "service_22tmcim";
    const templateID = "template_k8wuzv5";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        window.location.href = "/payment.html";

        document.getElementById("name").value = "";
        // document.getElementById("email").value = "";
        (document.getElementById("aadharNumber").value = ""),
          (document.getElementById("phoneNumber").value = ""),
          (document.querySelector("#imageInput").value = "");

        (document.getElementById("fathers_Name").value = ""),
          (document.getElementById("correspondence_Address").value = ""),
          (document.getElementById("correspondence_State").value = ""),
          (document.getElementById("correspondence_District").value = ""),
          (document.getElementById("correspondence_Pincode").value = ""),
          (document.getElementById("permanentAddress").value = ""),
          (document.getElementById("permanentState").value = ""),
          (document.getElementById("permanentDistrict").value = ""),
          (document.getElementById("permanentPincode").value = ""),
          (document.getElementById("dob").value = ""),
          (document.getElementById("Category").value = ""),
          (document.getElementById("marital_Status").value = ""),
          (document.getElementById("Matricuniversity").value = ""),
          (document.getElementById("Matricyear").value = ""),
          (document.getElementById("Matricpercentage").value = ""),
          (document.getElementById("interuniversity").value = ""),
          (document.getElementById("interyear").value = ""),
          (document.getElementById("interpercentage").value = ""),
          (document.getElementById("b_university").value = ""),
          (document.getElementById("b_year").value = ""),
          (document.getElementById("b_percentage").value = ""),
          (document.getElementById("other").value = ""),
          (document.getElementById("otheruniversity").value = ""),
          (document.getElementById("otheryear").value = ""),
          (document.getElementById("otherpercentage").value = ""),
          (document.getElementById("cmpny1").value = ""),
          (document.getElementById("cmpny1_designation").value = ""),
          (document.getElementById("cmpny1_startDate").value = ""),
          (document.getElementById("cmpny1_endDate").value = ""),
          (document.getElementById("cmpny2").value = ""),
          (document.getElementById("cmpny2_designation").value = ""),
          (document.getElementById("cmpny2_startDate").value = ""),
          (document.getElementById("cmpny2_endDate").value = ""),
          (document.getElementById("Referral").value = ""),
          (imgBase64 = "");

        console.log(res);
        alert("Your message sent successfully!!");
      })
      .catch((err) => console.log(err));
  } else {
    alert("fill all details");
  }
}

function backData() {
  let email = document.getElementById("email").value;
  var params = {
    name: document.getElementById("name").value,
    email: email,
    // trasectionId: document.getElementById("trasectionId").value,
    imgsrc: imgBase64,
  };

  console.log(params);

  const serviceID = "service_22tmcim";
  const templateID = "template_kvaq0sa";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}

function sucess() {
  let trasectionId = document.getElementById("trasectionId");

  if (trasectionId.value) {
    window.location.href = "/success.html";
  } else {
    alert("fill the trasectionid");
  }
}
