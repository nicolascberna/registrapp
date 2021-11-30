import { browser, element, by } from 'protractor';

describe('Pruebas en el login', () => {
    // se inicia el navegador en la page por defecto
    beforeEach(() => {
        browser.get('/');
    });
    // prueba de componentes del login
    it('Posee un boton de iniciar sesion', () => {
        expect(element(by.css('.page-selected ion-button')).getText()).toContain('INICIAR SESION');
    });
    // el login debe tener un campo de texto para el usuario
    it('Login debe tenes campos para ingresar usuario y contraseña', () => {
        expect(element(by.id('.page-selected user pass')).getText()).toContain('Usuario', 'Contraseña');
    });
    // el usuario puede navegar hacia "Recuperar contraseña" y esta debe contener un título
    it('El usuario puede navegar a Recuperar contraseña', () => {
        element(by.id('password')).click();
        browser.driver.sleep(500);
        expect(element(by.id('.page-selected titulo')).getText()).toContain('¿Olvidaste la contraseña?');
    });
});

describe('Pruebas en el Home', () => {
    //navegar a la pagina de inicio
    beforeEach(() => {
        browser.get('/home');
    });

    it('En HOME se saluda al usuario', () => {
        expect(element(by.css('.page-selected h3')).getText()).toContain('Bienvenido');
    });

    // el usuario puede navegar entre modals mostrando el titulo de escaneos y probando el boton cerrar del horario
    it('El usuario puede navegar para ver horario y el historial de escaneos', () => {
        element(by.css('presentModal escaneos')).click();
        browser.driver.sleep(500);
        expect(element(by.css('.page-selected ion-title h6')).getText()).toContain('QR Escaneados', 'Cerrar');
    });
});

describe('Pruebas en el escaneo', () => {
    //navegar a la pagina de escaneo
    beforeEach(() => {
        browser.get('/escaneo');
    });

    it('redirect al 404', () => {
        element(by.css('delete(escaneo)')).click();
        browser.driver.sleep(500);
        expect(element(by.css('.page-selected titulo')).getText()).toContain('Oopsss...');
    });

    it('envio de correo', () => {
       element(by.css('ion-button escaneos')).click();
       browser.driver.sleep(500);
});
});
