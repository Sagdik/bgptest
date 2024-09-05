import { Page } from "@playwright/test";

export default class ManualLoginPage{

    constructor(public page:Page){
        this.page = page;
    }

    async enterEntityID(id){

        await this.page.locator('[id="entityId"]').fill(id);

    }

    async enterUserId(id){

        await this.page.locator('[id="userId"]').fill(id);

    }

    async enterUserRole(role){

        await this.page.locator('[id="userRole"]').fill(role);
      
    }

    async enterFullName(name){

        await this.page.locator('[id="userFullName"]').fill(name);
      
        
    }

    async clickOnLoginButton(){
        await this.page.locator('[type="submit"]').click();
    }

    async enterManualLoginDetails(entityid,userid,role,name){

        await this.enterEntityID(entityid);
        await this.enterUserId(userid);
        await this.enterUserRole(role);
        await this.enterFullName(name);
        this.clickOnLoginButton();

    }

    async pageHeaderText(){
        const ele = await this.page.locator("xpath = .//*[@class='container-fluid']//div[2]/h1").textContent();
  
        return ele;
    }
}