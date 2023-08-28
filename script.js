// document.addEventListener("DOMContentLoaded", () => {
const contentElements = {
  fillform: document.getElementById("fillform"),
  HeadingAbout: document.getElementById("HeadingAbout"),
  PeraAbout: document.getElementById("PeraAbout"),
  HeadingProgramme: document.getElementById("HeadingProgramme"),
  PeraProgramme: document.getElementById("PeraProgramme"),
  HeadingMission: document.getElementById("HeadingMission"),
  PeraMission: document.getElementById("PeraMission"),
  HeadingVision: document.getElementById("HeadingVision"),
  PeraVision: document.getElementById("PeraVision"),
  ObjectiveHeading: document.getElementById("languageToggle"),
  objectPera: document.getElementById("objectPera"),
  directorsContainer: document.getElementById("directors"),
  mithshavyaparsanchar: document.getElementById("mithshavyaparsanchar"),
};

// const HeadingAbout = document.getElementById("HeadingAbout");
// const PeraAbout = document.getElementById("PeraAbout");
// const HeadingProgramme = document.getElementById("HeadingProgramme");
// const PeraProgramme = document.getElementById("PeraProgramme");
// const HeadingMission = document.getElementById("HeadingMission");
// const PeraMission = document.getElementById("PeraMission");
// const HeadingVision = document.getElementById("HeadingVision");
// const PeraVision = document.getElementById("PeraVision");
// const ObjectiveHeading = document.getElementById("languageToggle");
// const objectPera = document.getElementById("objectPera");
// const directorsContainer = document.getElementById("directors");
// const mithshavyaparsanchar = document.getElementById("mithshavyaparsanchar");
//
// const languageToggle = document.getElementById("languageToggle");
const englishBtn = document.getElementById("englishBtn");
const hindiBtn = document.getElementById("hindiBtn");
//

const hindiTranslations = {
  englishBtn: "अंग्रेज़ी",
  hindiBtn: "हिन्दी",

  HeadingAbout: "बारे में",
  fillform: "आवेदन करने के लिए फॉर्म भरें",
  PeraAbout:
    "भारत को कोविड महामारी के दौरान बड़े पैमाने पर बेरोजगारी का सामना करना पड़ा। सबसे बुरी तरह प्रभावित क्षेत्रों में से एक असंगठित क्षेत्र का प्रभाव था, मुख्य रूप से अचानक देशव्यापी तालाबंदी और फिर आर्थिक संकट के कारण। जबकि उनमें से कुछ काम पर वापस आने में कामयाब रहे, कई अभी भी ठीक नहीं हुए हैं, जैसे सड़क किनारे दुकान के मालिक, ब्यूटी पार्लर, सब्जी विक्रेता, आदि, क्योंकि उन्होंने जीवित रहने के लिए ऋण लिया था और उन्हें अपने उपकरण या जो भी संपत्ति चुकानी थी, उसे बेचना पड़ा। . “कोरोनावायरस महामारी ने भारत में लाखों लोगों के जीवन और आजीविका को बर्बाद कर दिया है, खासकर शहरी क्षेत्रों के प्रमुख शहरों में, जो कभी काम की तलाश में अपने गृहनगर/गांव छोड़कर यहां आए थे। स्व-रोज़गार श्रमिक और आकस्मिक वेतन वाले श्रमिक सबसे अधिक प्रभावित हुए हैं, क्रमशः 84% और 81% ने अपना रोजगार खो दिया है। « कुल 89% शहरी परिवारों ने बताया कि वे अगले महीने का किराया नहीं दे पाएंगे",
  HeadingProgramme: "कार्यक्रम",
  PeraProgramme:
    "भारत को कोविड महामारी के दौरान बड़े पैमाने पर बेरोजगारी का सामना करना पड़ा। सबसे बुरी तरह प्रभावित क्षेत्रों में से एक असंगठित क्षेत्र पर प्रभाव था, पहले अचानक देशव्यापी तालाबंदी और फिर आर्थिक संकट के कारण। जबकि उनमें से कुछ काम पर वापस आने में कामयाब रहे, कई अभी भी ठीक नहीं हुए हैं, जैसे सड़क किनारे दुकान के मालिक, ब्यूटी पार्लर, सब्जी विक्रेता, आदि, क्योंकि उन्होंने जीवित रहने के लिए ऋण लिया था और उन्हें अपने उपकरण या जो भी संपत्ति चुकानी थी, उसे बेचना पड़ा। . “कोरोनावायरस महामारी ने भारत में लाखों लोगों के जीवन और आजीविका को बर्बाद कर दिया है, खासकर शहरी क्षेत्रों के प्रमुख शहरों में, जो कभी काम की तलाश में अपने गृहनगर/गांव छोड़कर यहां आए थे। स्व-रोज़गार श्रमिक और आकस्मिक वेतन वाले श्रमिक सबसे अधिक प्रभावित हुए हैं, क्रमशः 84% और 81% ने अपना रोजगार खो दिया है। « कुल 89% शहरी परिवारों ने बताया कि वे अगले महीने का किराया नहीं दे पाएंगे",
  HeadingMission: "मिशन",
  PeraMission:
    " महत्वपूर्ण उद्योग भागीदारी के माध्यम से कौशल को अंतर्राष्ट्रीय मानकों में अपग्रेड करें और मानकों, पाठ्यक्रम आदि के लिए आवश्यक रूपरेखा विकसित करें गुणवत्ता आश्वासन। उपयुक्त सार्वजनिक-निजी भागीदारी (पीपीपी) मॉडल के माध्यम से कौशल विकास के लिए निजी क्षेत्र की पहल को बढ़ाना, समर्थन और समन्वय करना: निजी क्षेत्र से महत्वपूर्ण परिचालन और वित्तीय भागीदारी के लिए प्रयास करें। » विशेष रूप से उन क्षेत्रों में जहां बाजार तंत्र अप्रभावी या गायब हैं, धन लाकर 'बाज़ार-निर्माता' की भूमिका निभाएं। » उन पहलों को प्राथमिकता दें जिनका एकमुश्त प्रभाव के बजाय गुणक या उत्प्रेरक प्रभाव हो सकता है। उद्देश्य भारत में लोगों को कौशल प्रदान करने के समग्र लक्ष्य में महत्वपूर्ण योगदान देना, मुख्य रूप से कौशल विकास में निजी क्षेत्र की पहल को बढ़ावा देना कार्यक्रम और वित्त पोषण प्रदान करना।",
  HeadingVision: "दृष्टि",
  PeraVision:
    "एनएसडीसी की स्थापना राष्ट्रीय कौशल विकास मिशन के एक भाग के रूप में की गई थी ताकि भारत में विभिन्न क्षेत्रों और संकीर्ण क्षेत्रों में कुशल जनशक्ति की बढ़ती आवश्यकता को पूरा किया जा सके। कौशल की मांग और आपूर्ति के बीच मौजूदा अंतर। “भारत में एक विश्व स्तरीय कौशल विकास कार्यक्रम शुरू करने की अत्यधिक आवश्यकता है मिशन मोड जो बढ़ती अर्थव्यवस्था के लिए आवश्यक कौशल प्रदान करने की चुनौती का समाधान करेगा। की संरचना और नेतृत्व दोनों 'मिशन ऐसा होना चाहिए कि पूरे देश को कवर करने के लिए कार्यक्रम को तेजी से बढ़ाया जा सके।",
  mithshavyaparsanchar: "मिथशा व्यापार संचार",
};
const englishTranslations = {
  englishBtn: "English",
  hindiBtn: "Hindi",
  fillform:"Fill The Form To Apply",
  HeadingAbout: "About",
  PeraAbout:
    "India faced massive unemployment during the covid pandemic. One of the worst hit sectors was the impact of the unorganized sector, firstlydue to sudden countrywide lockdown and then economic crisis. Whilesome of them managed to get back to work, many are yet to recover,like roadside shop owners, beauty parlors, vegetable vendors, etc., asthey took loans to survive and had to sell their equipment or whateverassets they had to repay. « The Coronavirus pandemic has wrecked the lives and livelihoods of millions of people in India, especially those in major cities in urban areas, who had once left their hometown/villages in search for work here. « Self-employed workers and casual wage workers are most affected with 84% and 81% losing their employment, respectively. « Atotal of 89% of the urban households reported that they would not be able to pay rent for the following month",

  HeadingProgramme: "Programme",
  PeraProgramme:
    "India faced massive unemployment during the covid pandemic. One of the worst hit sectors was the impact of the unorganized sector, firstly due to sudden countrywide lockdown and then economic crisis. While some of them managed to get back to work, many are yet to recover, like roadside shop owners, beauty parlors, vegetable vendors, etc., as they took loans to survive and had to sell their equipment or whatever assets they had to repay. « The Coronavirus pandemic has wrecked the lives and livelihoods of millions of people in India, especially those in major cities in urban areas, who had once left their hometown/villages in search for work here. « Self-employed workers and casual wage workers are most affected with 84% and 81% losing their employment, respectively. « Atotal of 89% of the urban households reported that they would not be able to pay rent for the following month",
  HeadingMission: "Mission",
  PeraMission:
    " Upgrade skills to Intemational standards through significant industry involvement and develop necessary frameworks for standards, curriculum and quality assurance. Enhance, support and coordinate private sector initiatives for skill development through appropriate Public-Private Partnership ( PPP) models: strive for significant operational and financial involvement from private sector.  Play the role of a ‘market-maker’ by bringing funds, particularly in sectors where market mechanisms are ineffective or missing. Prioritise initiatives that can have a multiplier or catalytic effect as opposed to one-off impact. Objective To contribute significantly to the overall target of skilling up of people in India, mainly by fostering private sector initiatives in skill de programmes and to provide funding.",
  HeadingVision: "Vision",
  PeraVision:
    " NSDC was set up as part of a national skill development mission to fulfil the growing need in India for skilled manpower across sectors and narrow the existing gap between the demand and supply of skills. “There is a compelling need to launch a world-class skill development programme in a  mission mode that will address the challenge of imparting the skills required by a growing economy. Both the structure and the leadership of the ‘mission must be such that the programme can be scaled up quickly to cover the whole country.",
  mithshavyaparsanchar: " MITHSHA VYAPAR SANCHAR",
};
let language = "english"; // Default language

englishBtn.addEventListener("click", () => {
  language = "english";
  updateContent(language);
  console.log(language);
});

hindiBtn.addEventListener("click", () => {
  language = "hindi";
  updateContent(language);
  console.log(language);
});
function changeLanguage(language) {
  console.log("language ", language);
  for (const elementId in contentElements) {
    if (language === "english") {
      contentElements[elementId].textContent = englishTranslations[elementId];
    } else {
      contentElements[elementId].textContent = hindiTranslations[elementId];
    }
    const popup = document.getElementById('languagePopup');
    popup.style.display = 'none';
  }

  // if (language === "english") {
  //   englishBtn.textContent = "English";
  //   hindiBtn.textContent = "Hindi";
  //   HeadingAbout.textContent = "About";
  //   PeraAbout.textContent =
  //     "India faced massive unemployment during the covid pandemic. One of the worst hit sectors was the impact of the unorganized sector, firstlydue to sudden countrywide lockdown and then economic crisis. Whilesome of them managed to get back to work, many are yet to recover,like roadside shop owners, beauty parlors, vegetable vendors, etc., asthey took loans to survive and had to sell their equipment or whateverassets they had to repay. « The Coronavirus pandemic has wrecked the lives and livelihoods of millions of people in India, especially those in major cities in urban areas, who had once left their hometown/villages in search for work here. « Self-employed workers and casual wage workers are most affected with 84% and 81% losing their employment, respectively. « Atotal of 89% of the urban households reported that they would not be able to pay rent for the following month";

  //   HeadingProgramme.textContent = "Programme";
  //   PeraProgramme.textContent =
  //     "India faced massive unemployment during the covid pandemic. One of the worst hit sectors was the impact of the unorganized sector, firstly due to sudden countrywide lockdown and then economic crisis. While some of them managed to get back to work, many are yet to recover, like roadside shop owners, beauty parlors, vegetable vendors, etc., as they took loans to survive and had to sell their equipment or whatever assets they had to repay. « The Coronavirus pandemic has wrecked the lives and livelihoods of millions of people in India, especially those in major cities in urban areas, who had once left their hometown/villages in search for work here. « Self-employed workers and casual wage workers are most affected with 84% and 81% losing their employment, respectively. « Atotal of 89% of the urban households reported that they would not be able to pay rent for the following month";
  //   HeadingMission.textContent = "Mission";
  //   PeraMission.textContent =
  //     " Upgrade skills to Intemational standards through significant industry involvement and develop necessary frameworks for standards, curriculum and quality assurance. Enhance, support and coordinate private sector initiatives for skill development through appropriate Public-Private Partnership ( PPP) models: strive for significant operational and financial involvement from private sector.  Play the role of a ‘market-maker’ by bringing funds, particularly in sectors where market mechanisms are ineffective or missing. Prioritise initiatives that can have a multiplier or catalytic effect as opposed to one-off impact. Objective To contribute significantly to the overall target of skilling up of people in India, mainly by fostering private sector initiatives in skill de programmes and to provide funding.";
  //   HeadingVision.textContent = "Vision";
  //   PeraVision.textContent =
  //     " NSDC was set up as part of a national skill development mission to fulfil the growing need in India for skilled manpower across sectors and narrow the existing gap between the demand and supply of skills. “There is a compelling need to launch a world-class skill development programme in a  mission mode that will address the challenge of imparting the skills required by a growing economy. Both the structure and the leadership of the ‘mission must be such that the programme can be scaled up quickly to cover the whole country.";
  //   mithshavyaparsanchar.textContent = " MITHSHA VYAPAR SANCHAR";
  // } else {
  //   englishBtn.textContent = "अंग्रेज़ी";
  //   hindiBtn.textContent = "हिन्दी";

  //   languageToggle.textContent = "बारे में";
  //   textContent.textContent =
  //     "भारत को कोविड महामारी के दौरान बड़े पैमाने पर बेरोजगारी का सामना करना पड़ा। सबसे बुरी तरह प्रभावित क्षेत्रों में से एक असंगठित क्षेत्र का प्रभाव था, मुख्य रूप से अचानक देशव्यापी तालाबंदी और फिर आर्थिक संकट के कारण। जबकि उनमें से कुछ काम पर वापस आने में कामयाब रहे, कई अभी भी ठीक नहीं हुए हैं, जैसे सड़क किनारे दुकान के मालिक, ब्यूटी पार्लर, सब्जी विक्रेता, आदि, क्योंकि उन्होंने जीवित रहने के लिए ऋण लिया था और उन्हें अपने उपकरण या जो भी संपत्ति चुकानी थी, उसे बेचना पड़ा। . “कोरोनावायरस महामारी ने भारत में लाखों लोगों के जीवन और आजीविका को बर्बाद कर दिया है, खासकर शहरी क्षेत्रों के प्रमुख शहरों में, जो कभी काम की तलाश में अपने गृहनगर/गांव छोड़कर यहां आए थे। स्व-रोज़गार श्रमिक और आकस्मिक वेतन वाले श्रमिक सबसे अधिक प्रभावित हुए हैं, क्रमशः 84% और 81% ने अपना रोजगार खो दिया है। « कुल 89% शहरी परिवारों ने बताया कि वे अगले महीने का किराया नहीं दे पाएंगे";
  //   HeadingProgramme.textContent = "कार्यक्रम";
  //   PeraProgramme.textContent =
  //     "भारत को कोविड महामारी के दौरान बड़े पैमाने पर बेरोजगारी का सामना करना पड़ा। सबसे बुरी तरह प्रभावित क्षेत्रों में से एक असंगठित क्षेत्र पर प्रभाव था, पहले अचानक देशव्यापी तालाबंदी और फिर आर्थिक संकट के कारण। जबकि उनमें से कुछ काम पर वापस आने में कामयाब रहे, कई अभी भी ठीक नहीं हुए हैं, जैसे सड़क किनारे दुकान के मालिक, ब्यूटी पार्लर, सब्जी विक्रेता, आदि, क्योंकि उन्होंने जीवित रहने के लिए ऋण लिया था और उन्हें अपने उपकरण या जो भी संपत्ति चुकानी थी, उसे बेचना पड़ा। . “कोरोनावायरस महामारी ने भारत में लाखों लोगों के जीवन और आजीविका को बर्बाद कर दिया है, खासकर शहरी क्षेत्रों के प्रमुख शहरों में, जो कभी काम की तलाश में अपने गृहनगर/गांव छोड़कर यहां आए थे। स्व-रोज़गार श्रमिक और आकस्मिक वेतन वाले श्रमिक सबसे अधिक प्रभावित हुए हैं, क्रमशः 84% और 81% ने अपना रोजगार खो दिया है। « कुल 89% शहरी परिवारों ने बताया कि वे अगले महीने का किराया नहीं दे पाएंगे";
  //   HeadingMission.textContent = "मिशन";
  //   PeraMission.textContent =
  //     " महत्वपूर्ण उद्योग भागीदारी के माध्यम से कौशल को अंतर्राष्ट्रीय मानकों में अपग्रेड करें और मानकों, पाठ्यक्रम आदि के लिए आवश्यक रूपरेखा विकसित करें गुणवत्ता आश्वासन। उपयुक्त सार्वजनिक-निजी भागीदारी (पीपीपी) मॉडल के माध्यम से कौशल विकास के लिए निजी क्षेत्र की पहल को बढ़ाना, समर्थन और समन्वय करना: निजी क्षेत्र से महत्वपूर्ण परिचालन और वित्तीय भागीदारी के लिए प्रयास करें। » विशेष रूप से उन क्षेत्रों में जहां बाजार तंत्र अप्रभावी या गायब हैं, धन लाकर 'बाज़ार-निर्माता' की भूमिका निभाएं। » उन पहलों को प्राथमिकता दें जिनका एकमुश्त प्रभाव के बजाय गुणक या उत्प्रेरक प्रभाव हो सकता है। उद्देश्य भारत में लोगों को कौशल प्रदान करने के समग्र लक्ष्य में महत्वपूर्ण योगदान देना, मुख्य रूप से कौशल विकास में निजी क्षेत्र की पहल को बढ़ावा देना कार्यक्रम और वित्त पोषण प्रदान करना।";
  //   HeadingVision.textContent = "दृष्टि";
  //   PeraVision.textContent =
  //     "एनएसडीसी की स्थापना राष्ट्रीय कौशल विकास मिशन के एक भाग के रूप में की गई थी ताकि भारत में विभिन्न क्षेत्रों और संकीर्ण क्षेत्रों में कुशल जनशक्ति की बढ़ती आवश्यकता को पूरा किया जा सके। कौशल की मांग और आपूर्ति के बीच मौजूदा अंतर। “भारत में एक विश्व स्तरीय कौशल विकास कार्यक्रम शुरू करने की अत्यधिक आवश्यकता है मिशन मोड जो बढ़ती अर्थव्यवस्था के लिए आवश्यक कौशल प्रदान करने की चुनौती का समाधान करेगा। की संरचना और नेतृत्व दोनों 'मिशन ऐसा होना चाहिए कि पूरे देश को कवर करने के लिए कार्यक्रम को तेजी से बढ़ाया जा सके।";
  //   mithshavyaparsanchar.textContent = "मिथशा व्यापार संचार";
  // }
}
window.onload = function() {
  const popup = document.getElementById('languagePopup');
  popup.style.display = 'block';
};

// updateContent(); // Initial content update

function scrollToContent(target) {
  const element = document.getElementById(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function toggleMenuBar() {
  const show = document.getElementById("show");
  if (show.style.display === "block") {
    show.style.display = "none";
  } else {
    show.style.display = "block";
  }
}
// });

// Example usage: Assuming you have a button with an id "submitButton"
function handleSubmit(formData) {
  // Make a POST request using Axios
  axios
    .post(
      "https://sheet.best/api/sheets/7d33220f-660f-4e5f-82bc-b49e513a85ab",
      formData
    )
    .then((response) => {
      console.log("Data submitted successfully:", response.data);
      // Assuming 'router.push' is the function that navigates to a new page
      router.push("/Submit");
    })
    .catch((error) => {
      console.error("Error submitting data:", error);
    });
}

// Example usage: Assuming you have a button with an id "submitButton"
document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    const formData = collectFormData(); // Assuming you have a function to collect form data
    handleSubmit(formData); // Call the function to handle form submission
  });
