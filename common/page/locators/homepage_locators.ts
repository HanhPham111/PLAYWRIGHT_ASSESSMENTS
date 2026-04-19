import { Page } from "@playwright/test";

export class homepage_locators{
    constructor(private page: Page){}
    departing_options(option:string){
        return this.page.getByLabel('Departing').selectOption({ label: option });
    }
    returning_options(option:string){
        return this.page.getByLabel('Returning').selectOption({ label: option });
    }
    get promote_code_input(){
        return this.page.getByRole('textbox', { name: 'Promotional Code' });
    }
    get search_button(){
        return this.page.getByRole('button', { name: 'Search' })
    }

}