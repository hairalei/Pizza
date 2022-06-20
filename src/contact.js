export function showContactPage() {
  const body = document.querySelector(".overlay");

  const container = document.querySelector("#container");

  const markup = `
  <div class="contact__container">
  <div class="contact___details">
    <h2>Visit Us!</h2>
    <h4>Location</h4>
    <p>15 Yemen road. Yemen</p>
    <h4>Telephone No.</h4>
    <p>77-77777777</p>
  </div>
  <iframe
    class="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13738.329721045395!2d-97.45052856695997!3d30.58933117662142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644ddfe5076ef75%3A0x94d9ff7e03b58c85!2sYemen%20Rd%2C%20Taylor%2C%20TX%2076574%2C%20USA!5e0!3m2!1sen!2sph!4v1655730910235!5m2!1sen!2sph"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
</div>
    `;

  container.innerHTML = markup;

  body.style.background = `url(/dist/img/contact.jpg) no-repeat`;
  body.style.backgroundSize = `cover`;
  body.style.backgroundPosition = `center`;
}
