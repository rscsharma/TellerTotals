import { TellerTotalsPage } from './app.po';

describe('teller-totals App', function() {
  let page: TellerTotalsPage;

  beforeEach(() => {
    page = new TellerTotalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
