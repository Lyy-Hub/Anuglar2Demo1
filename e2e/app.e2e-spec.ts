import { Anuglar2Demo1Page } from './app.po';

describe('anuglar2-demo1 App', function() {
  let page: Anuglar2Demo1Page;

  beforeEach(() => {
    page = new Anuglar2Demo1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
