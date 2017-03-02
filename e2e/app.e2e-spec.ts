import { GoHomeJsPage } from './app.po';

describe('go-home-js App', () => {
  let page: GoHomeJsPage;

  beforeEach(() => {
    page = new GoHomeJsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
