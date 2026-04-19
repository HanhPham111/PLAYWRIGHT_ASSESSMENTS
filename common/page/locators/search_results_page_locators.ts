import { Page } from "@playwright/test";

export class search_result_page_locators{
     constructor(private page: Page){}

     get search_results_content(){
        return this.page.locator('#content');
     }
     
}