const dataPolicy = {
  "1": {
    "title": "Data Storage and Security",
    "desc": "We take reasonable precautions to protect the data we collect from loss, misuse, unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security."
  },
  "2": {
    "title": "Your Rights",
    "desc": "You have the right to access, correct, or request deletion of any personal data we may have collected about you. If you believe your information is incorrect or you wish to have your data removed, please contact us and we will respond as soon as possible. You may also decline to provide certain information, though it may limit your ability to use some parts of the service."
  },
  "3": {
    "title": "Changes to This Privacy Policy",
    "desc": "We may update this Privacy Policy from time to time. Any changes will be posted on this page, along with the updated effective date. Continued use of the service after any modifications means you accept the revised policy. We encourage you to review this page periodically to stay informed about how we are protecting your information."
  },
  "4": {
    "title": "Contact",
    "desc": "If you have any questions, concerns, or requests regarding this Privacy Policy, feel free to contact us via <br> Email: revanandaislamipasha@gmail.con"
  }
}

async function loadPolicy() {
  const policyContainer = document.querySelector('.policy-container');
  try {
    let htmlContent = '';
    for (const data in dataPolicy) {
      const item = dataPolicy[data];
      htmlContent += `
      <div class="policy" data-aos="fade" data-aos-delay="200">
        <h2 class="title-policy">
        ${item.title}
        </h2>
        <p class="content-policy">
        ${item.desc}
        </p>
      </div>`;
    }
    policyContainer.innerHTML = htmlContent;
  } catch (err) {
    console.log(`terjadi kesalahan di ${err}`)
  }
}

window.addEventListener('DOMContentLoaded', loadPolicy)