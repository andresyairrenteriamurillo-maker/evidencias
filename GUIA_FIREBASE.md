# Activar el modo para varios docentes (Firebase)

Con este modo:
- Cada docente entra con **su cuenta de Google** y registra sus evidencias.
- **Ningún docente puede ver lo de otro.** Las reglas de seguridad de Firebase lo impiden, no solo la página.
- **La rectora ve a todos los docentes**, su avance, sus fotos y textos, y puede descargar la carpeta de cada uno.
- La rectora define el año, las fechas de S1, S2 y S3 y la lista de docentes autorizados.
- Las evidencias quedan guardadas en internet y se pueden abrir desde el celular o el computador.

Firebase es de Google y el plan gratuito (Spark) alcanza de sobra para un colegio. No pide tarjeta.

---

## Paso 1. Crear el proyecto

1. Entra a https://console.firebase.google.com con la cuenta de Google de la institución (o la tuya).
2. Toca **Crear un proyecto** (o *Add project*). Nombre: `evidencias-ier`.
3. Desactiva Google Analytics (no hace falta) y toca **Crear proyecto**.

## Paso 2. Activar el inicio de sesión con Google

1. En el menú de la izquierda: **Compilación → Authentication → Comenzar**.
2. En **Método de acceso**, elige **Google**, actívalo, escoge tu correo de asistencia y **Guardar**.
3. Ve a la pestaña **Configuración → Dominios autorizados → Agregar dominio** y escribe:
   `andresyairrenteriamurillo-maker.github.io`

## Paso 3. Crear la base de datos

1. Menú izquierdo: **Compilación → Firestore Database → Crear base de datos**.
2. Elige **modo de producción**.
3. Ubicación: la más cercana disponible (por ejemplo `southamerica-east1` o `nam5`). **Habilitar**.

## Paso 4. Pegar las reglas de seguridad

1. En Firestore, abre la pestaña **Reglas**.
2. Borra lo que hay y pega todo el contenido del archivo `firestore.rules` de este repositorio.
3. **Cambia** `correo.de.la.rectora@gmail.com` por el correo real de la rectora, en minúsculas.
4. Toca **Publicar**.

Para comprobar que funcionan, usa el **Área de pruebas de reglas** (*Rules Playground*), en la misma pestaña:
- Simula una lectura de `usuarios/OTRO_ID/entradas/x` con un usuario cualquiera. Debe decir **Denegado**.

## Paso 5. Registrar la página web en Firebase

1. Toca el engranaje ⚙️ → **Configuración del proyecto**.
2. Abajo, en **Tus apps**, toca el ícono **`</>`** (Web). Nombre: `evidencias`. No marques Hosting. **Registrar app**.
3. Aparece un bloque `const firebaseConfig = { ... }`. Copia esos datos.

## Paso 6. Poner los datos en la página

Edita el archivo `firebase-config.js` en GitHub (ícono del lápiz) y deja algo así:

```js
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "evidencias-ier.firebaseapp.com",
  projectId: "evidencias-ier",
  storageBucket: "evidencias-ier.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
window.RECTORAS = ["correo.real.de.la.rectora@gmail.com"];
```

El correo de `RECTORAS` debe ser **el mismo** que pusiste en las reglas.
Estos datos no son secretos: Firebase está hecho para que vayan en la página. La seguridad la dan las reglas del paso 4.

Toca **Commit changes**. En 1 o 2 minutos la página ya pide iniciar sesión.

## Paso 7. Primer ingreso de la rectora

1. La rectora abre la página y toca **Entrar con Google**.
2. Le aparece la pestaña **🏫 Rectoría**. Ahí llena el año, las fechas de S1, S2 y S3, los datos de la institución y su nombre.
3. En **Correos de los docentes autorizados** escribe el Gmail de cada docente, uno por línea.
4. Toca **Guardar**.

## Paso 8. Los docentes

Cada docente abre la página, toca **Entrar con Google** con el correo que la rectora autorizó y empieza:
- **Planear año**: sus competencias y su Anexo 5 y Anexo 2.
- **Registrar**: fotos y textos durante el año.
- **Generar Word**: su carpeta completa.

Si un docente usaba la página antes en su celular (modo individual), puede pasar sus datos: antes de activar Firebase descarga la **copia de seguridad**, y después de entrar con Google usa **Cargar copia**.

---

## Avisos de entrega

- Cuando falten **20 días o menos** para S1, S2 o S3, la página muestra un aviso con las competencias que faltan y el botón **✨ ¿Qué puedo hacer?**, que sugiere actividades y fotos.
- **📅 Agregar fechas a mi calendario** (en Planear año) descarga un archivo que, al abrirlo, agrega las tres entregas al calendario del celular con alarmas **20, 7 y 1 día antes**. Es la forma más segura de recibir el aviso aunque no abras la página.
- **🔔 Activar avisos** muestra una notificación del navegador cuando abres la página dentro de esos 20 días.
- La rectora ve en **Rectoría** qué docentes tienen competencias sin registrar para la próxima entrega.

## Límites del plan gratuito

Las fotos se guardan reducidas (unos 250 KB cada una). El plan gratuito de Firestore guarda 1 GB, es decir, varios miles de fotos: suficiente para varios años de un colegio pequeño o mediano.
