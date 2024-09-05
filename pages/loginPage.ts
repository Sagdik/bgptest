import { Page } from "@playwright/test";

export default class loginPage{

    constructor(public page:Page){
        this.page = page;
    }

    async enterUserName(username:string){

        await this.page.locator('xpath = .//*[@class="modal-content background-customizable modal-content-desktop visible-md visible-lg"]//*[@id="signInFormUsername"]').click();
        await this.page.locator('xpath = .//*[@class="modal-content background-customizable modal-content-desktop visible-md visible-lg"]//*[@id="signInFormUsername"]').fill(username);
       
     
    }

    async enterPass(pass:string){
        await this.page.locator('xpath = .//*[@class="modal-content background-customizable modal-content-desktop visible-md visible-lg"]//*[@id="signInFormPassword"]').click();
        await this.page.locator('xpath = .//*[@class="modal-content background-customizable modal-content-desktop visible-md visible-lg"]//*[@id="signInFormPassword"]').fill(pass);
      
    }

    async submitButtonClick(){
        await this.page.locator('xpath = .//*[@class="modal-content background-customizable modal-content-desktop visible-md visible-lg"]//*[@name="signInSubmitButton"]').click();
      
    }

    async login(username,password){

        await this.enterUserName(username);
        await this.enterPass(password);
        await this.submitButtonClick();
    }
}