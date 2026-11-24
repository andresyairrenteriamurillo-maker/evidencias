// ============================================================================
// CONFIGURACIÓN DE FIREBASE (modo varios docentes)
// Para volver al modo individual, cambia FIREBASE_CONFIG por null.
// ============================================================================
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDU_nIZGw-uG3SEM93fa5Z69_nzaN8EYGg",
  authDomain: "evidencias-ier.firebaseapp.com",
  projectId: "evidencias-ier",
  storageBucket: "evidencias-ier.firebasestorage.app",
  messagingSenderId: "913282473829",
  appId: "1:913282473829:web:9861eaa9a1ae919d1b0b8c"
};

// Correo(s) de la rectora. Debe ser el MISMO correo que está en firestore.rules.
window.RECTORAS = ["docentes.ierss@hotmail.com", "andres.yair.renteria.murillo@gmail.com"];
