const dataTerms = [
  "This project is provided free of charge and open source for personal, educational, and non-commercial development purposes. By using, downloading, or contributing to this project, you agree to the following terms and conditions.",
  "You are allowed to use, copy, modify, and redistribute the contents of this project, provided that you comply with the license terms and give proper credit to the original creator. Contributions to the project are welcomed. By submitting any form of contribution such as code or documentation, you agree that your submissions will be covered under the same license used by the project unless stated differently in a written agreement.",
  "All content and source code within this project are the intellectual property of the developer, unless clearly stated otherwise. These materials are protected by the license attached to the project.",
  "This project is offered as-is, without any warranties. The developer cannot be held responsible for any loss of data, system failure, or damages resulting from the use of this project. You assume full responsibility for any risks involved.",
  "The terms and conditions may be changed at any time without prior notice. Users are encouraged to check this document periodically. Continued use of the project indicates acceptance of any changes made.",
  "For questions, feedback, or issue reporting, please contact the developer via email or through the issue section on the project repository."
];


async function loadTerms() {
  const termsContainer = document.querySelector('.terms-container');
  try {
    termsContainer.innerHTML = dataTerms.map(item => {
      return `
      <div class="terms" data-aos="fade" data-aos-delay="200">
        <p class="terms-content">
          ${item}
        </p>
      </div>`
    }).join('');
  } catch (err) {
    console.log(err)
  }
}

window.addEventListener('DOMContentLoaded', loadTerms);