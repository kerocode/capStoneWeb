import { CapStoneWebPage } from './app.po';

describe('cap-stone-web App', function() {
  let page: CapStoneWebPage;

  beforeEach(() => {
    page = new CapStoneWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
