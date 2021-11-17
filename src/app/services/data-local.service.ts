import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Registro } from '../models/registro.model';

import { File } from '@ionic-native/file/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

    /* se declara un arreglo vacio que guardara los escaneos QR realizados */
    guardados: Registro[] = [];
    /* private memoria: Storage | null = null; */

  constructor(private storage: Storage,
              private file: File,
              private emailComposer: EmailComposer) {

  /* CARGAR REGISTROS (PERSISTENCIA DE DATOS)*/
    this.cargarEscaneo();
  }


  /* funcion para guardar los escaneos */
  /* async */ guardarRegistro( fomat: string, texto: string ) {

    const nuevoRegistro = new Registro( fomat, texto ); /* se crea un nuevo objeto de tipo Registro */
    this.guardados.unshift( nuevoRegistro ); /* para siempre mostrar el ultimo escaneo en la parte superior */

    console.log(this.guardados);
    /* await this.cargarEscaneo(); */ /* se guarda en el arreglo */
    this.storage.set('registros', this.guardados); /* 'GUARDAR REGISTROS (PERSISTENCIA DE DATOS)' */
  }

  async cargarEscaneo() {

    /* this.storage.clear(); */ /* limpiar la memoria */
    this.guardados = (await this.storage.get('registros')) || [];

  }

  enviarCorreo() {

    const arrTemporal = [];	/* arreglo temporal */
    const titulos = 'Formato, Creado en, Texto\n'; /* definimos como sera la estructura de los datos enviados */

    arrTemporal.push( titulos );


    /* almacenar todos los registros guardados en el storage */
    this.guardados.forEach( registro => {

      const linea = registro.format + ',' + registro.created + ',' + registro.text + '\n';
      arrTemporal.push( linea );

    });

    /* enviamos el archivo */
    console.log(arrTemporal.join(''));
    //this.crearArchivo( arrTemporal.join('') );
  }

  /* creamos archivo CSV fisico para enviar registros por correo*/
  crearArchivo( text: string ) {

    this.file.checkFile( this.file.dataDirectory, 'registros.csv' )
      .then( existe => this.escribirEnArchivo( text ))
      .catch( err => this.file.createFile( this.file.dataDirectory, 'registros.csv', false )
          .then( creado => this.escribirEnArchivo( text ))
          .catch( err2 => console.log('No se pudo crear el archivo', err2)));

  }

  async escribirEnArchivo( text: string ){  /* escribir en el archivo */
    console.log('escribirEnArchivo');
    await this.file.writeExistingFile( this.file.dataDirectory, 'registros.csv', text );

    /* const archivo = `${this.file.dataDirectory}/registros.csv`; */

    /* definimos la estructura del correo */
    /* const email = {
      to: 'mal.pozo@duocuc.cl',
      cc: 'malcompozo@gmail.com',
      attachments: [
        archivo
      ],
      subject: 'Scans QR de asistencias',
      body: 'Registro de asistencias escaneadas por QR <strong>- RegistrAPP -</strong>',
      isHtml: true
    }; */

    /* se envia correo */
    /* this.emailComposer.open(email); */

  }

}

