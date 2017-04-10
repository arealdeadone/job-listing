import { JobListingFrontendPage } from './app.po';

describe('job-listing-frontend App', () => {
  let page: JobListingFrontendPage;

  beforeEach(() => {
    page = new JobListingFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
