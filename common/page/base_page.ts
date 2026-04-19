import { Locator, Page } from '@playwright/test';

export class base_page {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

}