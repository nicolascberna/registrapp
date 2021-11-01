import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

    /* se declara un arreglo vacio que guardara los escaneos QR realizados */
    public guardados: Registro[] = [];
    private memoria: Storage | null = null;

  constructor(private storage: Storage ) {
  /* CARGAR REGISTROS (PERSISTENCIA DE DATOS)*/
    this.cargarEscaneo();
  }


  /* funcion para guardar los escaneos */
  async guardarRegistro( fomat: string, texto: string ) {
    const nuevoRegistro = new Registro( fomat, texto ); /* se crea un nuevo objeto de tipo Registro */
    this.guardados.unshift( nuevoRegistro ); /* para siempre mostrar el ultimo escaneo en la parte superior */
    console.log(this.guardados);
    await this.cargarEscaneo(); /* se guarda en el arreglo */
    this.memoria.set('registros', this.guardados); /* 'GUARDAR REGISTROS (PERSISTENCIA DE DATOS)' */
  }

  async cargarEscaneo() {
      const storageData = await this.storage.create();
      this.memoria = storageData;
      const registros = await this.memoria.get('registros');
      if (registros) {
        this.guardados = registros;
      }
  }
}
