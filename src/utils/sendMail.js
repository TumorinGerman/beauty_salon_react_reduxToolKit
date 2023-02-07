import emailjs from "@emailjs/browser";

const sendMail = (body) => {
  console.log(body);
  emailjs
    .sendForm("service_0nydzha", "template_qk2sovp", body, "O4D_WASan4Mrjg1o2")
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

export default sendMail;
