import { AppPage } from './app.po';

describe('nueva App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba de e2e', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('prueba 1');
  });
});
