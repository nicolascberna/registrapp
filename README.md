# registrapp

Instalacion de dependencias node: <br>
<b>npm install --save-dev @angular-devkit/build-angular</b>

+++++++++++++++++++++++++++++++++++

Credenciales para testear app: <br>
usuario: "malcom" o "nicolas" <br>
contraseña: 123 <br>

+++++++++++++++++++++++++++++++++++

Instalacion de json-server: <br> <b>npm install -g json-server</b> <br><br>
Para correr api local:<br> <b>json-server --watch db.json</b> <br>

+++++++++++++++++++++++++++++++++++

Para correr la app en el celular o en el emulador de Android con CAPACITOR: <br>
1.- npm install @capacitor/android <br>
2.- npx cap add android <br>
3.- ionic capacitor sync android <br>
4.- npx cap open android <br>

Dentro de Android Studio ejecutar la virtualizacion con android Pie (9) para prevenir errores de lanzamiento. <br>

----- PARA AGREGAR NUEVOS CAMBIOS A LA APLICACION ANDROID ----- <br>
1.- npx cap sync <br>
2.- ionic capacitor copy android <br>

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
