# REGISTRAPP

### Instalacion dependencias Node:
```
npm install --save-dev @angular-devkit/build-angular
```

### Intalacion de Angular Storage:
```
npm install @ionic/storage@2.3.1 --save--save-exact
```

### Instalacion plugin Barcode Scanner (capacitor):
```
npm install phonegap-plugin-barcodescanner
npm install @ionic-native/barcode-scanner
ionic cap sync
npm install @ionic-native/core
```

### Lanzar app en Android con Capacitor (emulador o fisico):
```
npm install @capacitor/android
npx cap add android
ionic capacitor sync android
npx cap open android
```

Dentro de Android Studio ejecutar la virtualizacion con android Pie (9) para prevenir errores de lanzamiento. <br>

### Agregar nuevos cambios a la app Android:
```
ionic capacitor copy android
```

### Dependencia plugin NATIVE File para generar archivo CSV (capacitor):
```
npm install cordova-plugin-file
npm install @ionic-native/file
ionic cap sync
```

### Dependencia plugin NATIVE Email Composer para generar correo (capacitor):
```
npm install cordova-plugin-email-composer
npm install @ionic-native/email-composer
ionic cap sync
```
### SOLUCION error file provider ANDROID:
```
npm install jetifier
npx jetify
npx cap sync android
```

### Credenciales para testeo:
- Usuario: "malcom" o "nicolas"
- Contraseña: 123
<hr>

### MOCKUP:
<i>(click en imagen para abrir proyecto en figma)<i>
<a href="https://www.figma.com/file/U40Vt2Vq6C8Xgg397WD34r/RegistrAPP-Grupo-08?node-id=0%3A1">![registrapp mockup](https://user-images.githubusercontent.com/54687324/133321996-93ce7989-757c-4ed3-88e2-95f1271e10d0.png)</a>
