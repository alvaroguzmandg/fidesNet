
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB8V1ebAbAJN-r16DE6lxI5MKtQk9B58LY",
    authDomain: "fidesnnet-bd.firebaseapp.com",
    databaseURL: "https://fidesnnet-bd-default-rtdb.firebaseio.com",
    projectId: "fidesnnet-bd",
    storageBucket: "fidesnnet-bd.appspot.com",
    messagingSenderId: "845196287275",
    appId: "1:845196287275:web:8018924d9c7a59a8bab96e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Referencia a database
const contactFormDB = firebase.database().ref('contactForm');

document.getElementById("contactForm").addEventListener('submit', submitForm);


function submitForm(e) {
  e.preventDefault();
  let email = getElementVal('emailid');
  let mensaje = getElementVal('messageid')

  saveMessages(email, mensaje)
  showMessage()
}

function showMessage() {
  document.getElementById("form-contacto").style.display = "none";
  document.getElementById("registroGracias").style.display = "block"
}

const saveMessages = (email, mensaje) => {
  let newContactForm = contactFormDB.push();

  newContactForm.set({
      email: email,
      mensaje: mensaje,
  })
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
}