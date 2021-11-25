import { browser, element, by } from 'protractor';

describe('Navegar al LocalHost', () => {
    beforeEach(() => {
        browser.get('/');
    });
// prueba
    it('Se muentra por defecto el login', () => {
        expect(element(by.css('app-login')).isPresent()).toBe(true);
    });
});