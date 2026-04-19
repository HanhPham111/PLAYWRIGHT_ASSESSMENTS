import { Page } from "@playwright/test";
import { base_page } from "./base_page";
import { search_result_page_locators } from "./locators/search_results_page_locators";

export class search_results_page extends base_page{
    public locators: search_result_page_locators;
    constructor(page: Page){
        super(page);
        this.locators = new search_result_page_locators(page);
    }
    async get_the_results_content(){
        return this.locators.search_results_content.textContent();
    }
}