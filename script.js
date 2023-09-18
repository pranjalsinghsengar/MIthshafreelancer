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
// window.scroll({
//   top: 2500,
//   left: 0,
//   behavior: 'smooth'
// });

// // Scroll certain amounts from current position
// window.scrollBy({
//   top: 100, // could be negative value
//   left: 0,
//   behavior: 'smooth'
// });

const hindiTranslations = {
  englishBtn: "अंग्रेज़ी",
  hindiBtn: "हिन्दी",

  HeadingAbout: "बारे में",
  fillform: "आवेदन करने के लिए फॉर्म भरें",
  PeraAbout:
    "मिथशा व्यापार संचार प्रा० लि० का गठन भारतवर्ष के युवाओं में बढती बेरोजगारी एवं कौशल (SKILL ) का अभाव देखते हुये हुआ है । मिथशा व्यापार संचार प्रा० लि0 अपनी समाजिक जिम्मेदारियों को समझते हुये स्वयं के साथ साथ अन्य अनेक युवा बेरोजगारो की आत्मनिर्भता बढाने एवं कौशल प्रदान करने का सपना देखता है, मिथशा व्यापार संचार प्रा० लि० का गठन रोहित श्रीवास्तव व आशीष प्रताप सिंह ने आपसी सहमति एवं अपनी समाजिक जिम्मेदारियों को निभाने एवं युवाओ को आत्मनिर्भर बनाने के उद्देश्य से किया है ।",
  HeadingProgramme: "कार्यक्रम",
  PeraProgramme:
    "मिथशा व्यापार संचार प्रा० लि० के तहत हम स्थानीय उद्योगों के व्यापार को बढ़ाने एवं राष्ट्रीय व बहुराष्ट्रीय कंपनियों के साथ अनुबंध कर उनके उत्पादों व योजनाओं की जानकारी को सुदूर स्थित गाँवों व कस्बों के निवासियों तक पहुंचाने का माध्यम बनना जिससे अधिक से अधिक लोग लाभान्वित हो सकें ।",
  HeadingMission: "मिशन",
  PeraMission:
    "मिथशा व्यापार संचार प्रा० लि० एक ऐसा मंच प्रदान करने की क्षमता विकसित करना है जो भारतवर्ष के सुदूर स्थित गाँवों व कस्बों के नौजवानों को संगठित कर उन्हें आत्मनिर्भर बनाया जा सके। हम समझते हैं कि किसी राष्ट्र का भविष्य उस राष्ट्र के युवा ही तय करते हैं, एक राष्ट्र तभी विकसित होगा जब हर हाथ को काम होगा और प्रत्येक नागरिक आत्मनिर्भर हो अपने दायित्व की पूर्ति करते हुए राष्ट्र के निर्माण में अपना योगदान देगा।",
  HeadingVision: "दृष्टि",
  PeraVision:
    "हमारा लक्ष्य उच्च गुणवत्ता और नवाचारी दृष्टिकोण के साथ विश्रवसनीय ब्रांड बनाना है, जो अपने लोगों की आवश्यकताओं को समझता है और सर्वोतम परिणाम प्राप्त करने के लिए योजनाबद्ध रूप से उन्हें पूरा करता है।",
  mithshavyaparsanchar: "मिथशा व्यापार संचार",
};
const englishTranslations = {
  englishBtn: "English",
  hindiBtn: "Hindi",
  fillform: "Fill The Form To Apply",
  HeadingAbout: "About",
  PeraAbout:
    "Mitsha Vyapar Sanchar Pvt. Ltd. has been formed keeping in view the increasing unemployment and lack of skill (SKILL) among the youth of India. Realizing its social responsibilities, Mitsha Vyapar Sanchar Pvt. Ltd. dreams of increasing self-reliance and providing skills to many other unemployed youth, Rohit Srivastava and Ashish Pratap Singh formed Mitsha Vyapar Sanchar Pvt. It has been done with the aim of fulfilling the responsibilities and making the youth self-reliant.",

  HeadingProgramme: "Programme",
  PeraProgramme:
    "Under Mitsha Vyapar Sanchar Pvt. Ltd., we want to increase the business of local industries and contract with national and multinational companies to become a means of conveying information about their products and schemes to the residents of remote villages and towns, so that more and more people can be benefited.",
  HeadingMission: "Mission",
  PeraMission:
    " Mitsha Vyapar Sanchar Pvt. Ltd. aims at developing the capability of providing such a platform which can organize the youth of remote villages and towns of India and make them self-reliant. We understand that the future of a nation is decided by the youth of that nation, a nation will develop only when every hand has work and every citizen is self-reliant and fulfills his responsibility and will contribute in the building of the nation.",
  HeadingVision: "Vision",
  PeraVision:
    "We aim to build a trusted brand with high quality and innovative approach, that understands the needs of its people and systematically caters to them to achieve optimum results.",
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
    const popup = document.getElementById("languagePopup");
    popup.style.display = "none";
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
window.onload = function () {
  const popup = document.getElementById("languagePopup");
  popup.style.display = "block";
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
// function handleSubmit(formData) {
//   // Make a POST request using Axios
//   axios
//     .post(
//       "https://sheet.best/api/sheets/7d33220f-660f-4e5f-82bc-b49e513a85ab",
//       formData
//     )
//     .then((response) => {
//       console.log("Data submitted successfully:", response.data);
//       // Assuming 'router.push' is the function that navigates to a new page
//       router.push("/Submit");
//     })
//     .catch((error) => {
//       console.error("Error submitting data:", error);
//     });
// }

// Example usage: Assuming you have a button with an id "submitButton"
// document
//   .getElementById("submitButton")
//   .addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent the form from submitting
//     const formData = collectFormData(); // Assuming you have a function to collect form data
//     handleSubmit(formData); // Call the function to handle form submission
//   });


