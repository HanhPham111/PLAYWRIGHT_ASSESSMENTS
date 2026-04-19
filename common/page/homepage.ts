import { Page } from "@playwright/test";
import { base_page } from "./base_page";
import { homepage_locators } from "./locators/homepage_locators";

export class homepage extends base_page{
    public locators: homepage_locators;
    constructor(page: Page){
        super(page);
        this.locators = new homepage_locators(page);
    }

    async select_departing(departing_otp:string){
        await this.locators.departing_options(departing_otp);
    }
    async select_returning(returning_otp:string){
        await this.locators.returning_options(returning_otp);
    }

    async input_promoted_code(code: string){
        await this.locators.promote_code_input.fill(code)
    }

    async click_search_button(){
        await this.locators.search_button.click();
    }

    async input_searching_fields({departing_opt, returning_opt, code}:{departing_opt?:string, returning_opt?:string, code?:string}){
        if(departing_opt) await this.select_departing(departing_opt);
        if(returning_opt) await this.select_returning(returning_opt);
        if(code) await this.input_promoted_code(code);  
    }
} 