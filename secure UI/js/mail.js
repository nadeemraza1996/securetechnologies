const firebaseConfig = {
  apiKey: "AIzaSyC2EzHV6xYa8WH8QqwOdKXxuEpUBVz4CLM",
  authDomain: "contactformtest-2cf38.firebaseapp.com",
  databaseURL: "https://contactformtest-2cf38-default-rtdb.firebaseio.com",
  projectId: "contactformtest-2cf38",
  storageBucket: "contactformtest-2cf38.appspot.com",
  messagingSenderId: "482221777340",
  appId: "1:482221777340:web:458be2bc55de704b374bb9",
};
//initialize
firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactFormtest");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const address = document.querySelector("#address").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  saveMessages(name, address, email, message);
  //message to user
  document.querySelector(".alerts").style.display = "block";
  //remove the alerts message
  setTimeout(() => {
    document.querySelector(".alerts").style.display = "none";
  }, 3000);

  //reset form
  document.getElementById("contactForm").reset();
  e.preventDefault();
}
const saveMessages = (name, address, email, message) => {
  const newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    address: address,
    email: email,
    message: message,
  });
};
const getElementById = (id) => {
  return document.getElementById(id).value;
};
