# registrapp

npm install --save-dev @angular-devkit/build-angular

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Para realizar pruebas del sistema hibrido corriendo en lab se debe usa las credenciales "malcom" o "nicolas" para usuario y para contraseña por defecto es 123.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

----     ACTUALMENTE CONSUMIENDO JSON DESDE GITHUB    ----
Instalacion de json-server: npm install -g json-server
Para correr api local: json-server --watch db.json
----     ACTUALMENTE CONSUMIENDO JSON DESDE GITHUB    ----

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Instalacion del storage de angular
1.- npm install @ionic/storage
2.- npm install @ionic/storage-angular.
3.- Importar en el app.module.ts: import { IonicStorageModule } from '@ionic/storage-angular';
4.- Agregar en el app.module.ts: IonicStorageModule.forRoot()


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Para correr la app en el celular o en el emulador de Android con CAPACITOR:
1.- npm install @capacitor/android
2.- npx cap add android
3.- ionic capacitor sync android
4.- npx cap open android

Dentro de Android Studio ejecutar la virtualizacion con android Pie (9) para prevenir errores de lanzamiento.

----- PARA AGREGAR NUEVOS CAMBIOS A LA APLICACION ANDROID -----
1.- npx cap sync
2.- ionic capacitor copy android

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

implementacion del plugin BARCODE SCANNER

- INSTALACION -
npm install phonegap-plugin-barcodescanner
npm install @ionic-native/barcode-scanner
ionic cap sync
npm install @ionic-native/core

----- EN CASO DE PRESENTAR ERRORES DE VULNERABILIDAD EJECUTAR EL SIGUIENTE COMANDO -----
npm audit fix

Mockup:
https://www.figma.com/file/U40Vt2Vq6C8Xgg397WD34r/RegistrAPP-Grupo-08?node-id=0%3A1

![registrapp mockup](https://user-images.githubusercontent.com/54687324/133321996-93ce7989-757c-4ed3-88e2-95f1271e10d0.png)
