// ============================================================================
// CONFIGURACIÓN DE FIREBASE (modo varios docentes)
// Si lo dejas en null, la página funciona en modo individual (todo se guarda
// solo en el celular de quien la usa).
// Para activar el modo para varios docentes, sigue la guía GUIA_FIREBASE.md
// y pega aquí los datos que te da Firebase.
// ============================================================================
window.FIREBASE_CONFIG = null;
/* Ejemplo:
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "evidencias-ier.firebaseapp.com",
  projectId: "evidencias-ier",
  appId: "1:123:web:abc"
};
*/

// Correo(s) de la rectora. Debe ser el MISMO correo que pongas en firestore.rules.
window.RECTORAS = ["correo.de.la.rectora@gmail.com"];
