const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((faqItem) => {
  faqItem.addEventListener("click", () => {
    const isActive = faqItem.children[1].classList.contains("active");

    faqItems.forEach((fi) => {
      fi.children[0].children[1].src = "./assets/images/icon-plus.svg";
      // fi.children[1].classList.remove("active");
      fi.querySelector(".answer").classList.remove("active");
    });

    if (!isActive) {
      faqItem.children[0].children[1].src = "./assets/images/icon-minus.svg";
      faqItem.children[1].classList.add("active");
    }
  });
});

// const questions = document.getElementsByClassName("question");
// for (const question of questions) {
//   question.addEventListener("click", () => {
//     const isActive =
//       question.nextElementSibling.classList.contains("active");
//     if (isActive) {
//       question.nextElementSibling.classList.remove("active");
//       question.children[1].src = "./assets/images/icon-plus.svg";
//       question.childNodes;
//     } else {
//       const parrafos = document.getElementsByClassName("active");
//       for (const parrafo of parrafos) {
//         parrafo.classList.remove("active");
//       }
//       for (const q of questions) {
//         q.children[1].src = "./assets/images/icon-plus.svg";
//       }
//       question.nextElementSibling.classList.add("active");
//       question.children[1].src = "./assets/images/icon-minus.svg";
//     }
//   });
// }
