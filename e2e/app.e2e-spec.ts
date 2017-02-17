import { MusicsharePage } from './app.po';

describe('musicshare App', function() {
  let page: MusicsharePage;

  beforeEach(() => {
    page = new MusicsharePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
