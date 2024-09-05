import { Page } from "@playwright/test";

export default class DashbaordPage{


    constructor(public page:Page){
        this.page = page;
    }

    async validateOnGrantButton(){
        const element = await this.page.locator('xpath = .//*[text()="Get new grant"]');
   
        await element.waitFor({ state: 'attached', timeout: 55000 }); // 550000 ms timeout
      
        const status= await element.isVisible();
        console.log(status);
    }

    async clickOnGrantButton(){
        const element = await this.page.locator('xpath = .//*[text()="Get new grant"]');
   
        await element.waitFor({ state: 'attached', timeout: 55000 }); // 550000 ms timeout
      
        await element.click();
        
    }

    async getOnInvalidLogin(){
        const element = await this.page.locator('[class="error-subtitle"]');
   
        await element.waitFor({ state: 'attached', timeout: 55000 }); // 550000 ms timeout
      
        const status= await element.isVisible();
        console.log(status);
    }


    async clickDraftButton(){
        const element = await this.page.locator('[href="#drafts"]');

        await element.waitFor({ state: 'attached', timeout: 55000 }); // 5000 ms timeout
      
        element.click();
    }

    async proceedButton(){
        await this.page.locator('xpath = .//*[@id="db-apps-drafts"]//tbody//tr[1]//a').click();

  await this.page.locator('[id="keyPage-form-button"]').click();

  const data = await this.page.locator('xpath = .//*[@class="main"]//h2[1]').textContent();

  console.log(data);
    }

    async eligibilityCheck(){
        await this.page.locator('xpath = .//*[@class="form-horizontal bgp-radio-group"][1]//*[@value = "true"]').click();

        await this.page.locator('xpath = .//*[@class="form-horizontal bgp-radio-group"][2]//*[@value = "true"]').click();
      
        await this.page.locator('xpath = .//*[@class="form-horizontal bgp-radio-group"][3]//*[@value = "true"]').click();
      
        await this.page.locator('xpath = .//*[@class="form-horizontal bgp-radio-group"][4]//*[@value = "true"]').click();
        
        await this.page.locator('xpath = .//*[@class="form-horizontal bgp-radio-group"][5]//*[@value = "true"]').click();
      
        await this.page.locator('[id="next-btn"]').click();
    }

    async contactDetails(){
        await this.page.locator('[id="react-contact_info-name"]').fill('test');


  await this.page.locator('[id="react-contact_info-designation"]').fill('test');


  await this.page.locator('[id="react-contact_info-phone"]').fill('123456789');


  await this.page.locator('[id="react-contact_info-primary_email"]').fill('test@gmail.com');
  //console.log(ele1);


  await this.page.locator('[placeholder="Enter your Postal Code"]').fill('509734');

  await this.page.locator('[class="input-group-addon bgp-search-group-addon"]').click();

  await this.page.locator('[id="react-contact_info-offeree_name"]').fill('text');

  await this.page.locator('[id="react-contact_info-offeree_designation"]').fill('testdata');


  await this.page.locator('[id="react-contact_info-offeree_email"]').fill('test@gmail.com');

  await this.page.locator('[id="next-btn"]').click();
    }

    async proposalDetails(){
        await this.page.locator('[id="react-project-title"]').fill('Project 1');

  await this.page.locator('[id="react-project-start_date"]').click();

  await this.page.locator('xpath = .//*[@id="react-project-start_date"]//parent::div//*[@class="rdtDay rdtToday"]').click();

  await this.page.keyboard.press('Escape');

  await this.page.locator('[id="react-project-end_date"]').click();

  await this.page.locator('xpath = .//*[@id="react-project-end_date"]//parent::div//*[@class="rdtDay rdtToday"]').click();

  await this.page.keyboard.press('Escape');

  await this.page.locator('[id = "react-project-description"]').fill('Test');

  await this.page.locator('[id="react-select-project-activity--value"]').click();
  await this.page.getByLabel('FTA & Trade Compliance').click();
//////
  await this.page.locator('[id="react-select-project-primary_market--value"]').click();
  await this.page.locator('#react-select-project-primary_market--value').getByRole('combobox').fill('indi');
  await this.page.getByLabel('India', { exact: true }).click();
  await this.page.getByText('Yes').click();
  await this.page.locator('[class="bgp-btn bgp-btn-next"]').click();
    }

    async businessImpactDetails(){
        const businessPage  = await this.page.locator('xpath = .//*[text()="Explain The Business Impact"]');
        await businessPage.waitFor({ state: 'visible', timeout: 55000 });
      
        const dateElement = await this.page.locator('[id="react-project_impact-fy_end_date_0"]');
        await dateElement.waitFor({ state: 'attached', timeout: 55000 }); // 5000 ms timeout
        dateElement.click();
        await this.page.getByRole('cell', { name: '28' }).nth(2).click();
        await this.page.locator('#react-project_impact-overseas_sales_0').click();
        await this.page.locator('#react-project_impact-overseas_sales_0').fill('100');
        await this.page.locator('#react-project_impact-overseas_sales_1').click();
        await this.page.locator('#react-project_impact-overseas_sales_1').fill('100');
        await this.page.locator('#react-project_impact-overseas_sales_2').click();
        await this.page.locator('#react-project_impact-overseas_sales_2').fill('1');
        await this.page.locator('#react-project_impact-overseas_sales_3').click();
        await this.page.locator('#react-project_impact-overseas_sales_3').fill('1');
        await this.page.locator('#react-project_impact-overseas_investments_0').click();
        await this.page.locator('#react-project_impact-overseas_investments_0').fill('1');
        await this.page.locator('#react-project_impact-overseas_investments_1').click();
        await this.page.locator('#react-project_impact-overseas_investments_1').fill('1');
        await this.page.locator('#react-project_impact-overseas_investments_2').click();
        await this.page.locator('#react-project_impact-overseas_investments_2').fill('1');
        await this.page.locator('#react-project_impact-overseas_investments_3').click();
        await this.page.locator('#react-project_impact-overseas_investments_3').fill('1');
        await this.page.getByPlaceholder('Provide reasons for overseas').click();
        await this.page.getByPlaceholder('Provide reasons for overseas').fill('test');
        await this.page.getByPlaceholder('e.g. first mover advantage,').click();
        await this.page.getByPlaceholder('e.g. first mover advantage,').fill('test');
        await this.page.locator('.main').click();
        await this.page.getByRole('button', { name: 'Next' }).click();
    }

    async costDetails(){
        await this.page.locator('#react-project_cost-vendors-accordion-header').getByText('SGD').click();
        await this.page.getByRole('button', { name: 'Add New Item' }).click();
        await this.page.locator('label').filter({ hasText: /^Overseas$/ }).locator('span').first().click();
        await this.page.getByTestId('text-field').click();
        await this.page.getByTestId('text-field').fill('vendor');
        await this.page.getByText('Singapore', { exact: true }).click();
        await this.page.getByPlaceholder('Search for vendor').click();
        await this.page.getByPlaceholder('Search for vendor').fill('vendor');
        await this.page.getByText('nil').click();
        await this.page.getByText('Overseas', { exact: true }).click();
        await this.page.getByTestId('text-field').click();
        await this.page.locator('[placeholder="Key in name for overseas vendor"]').fill('Vednor');
        await this.page.locator('[id="react-project_cost-vendors-0-attachments-btn"]').click();
        await this.page.locator('body').setInputFiles('/files/A Mindcalm pers 0.png');
        await this.page.getByLabel('Estimated Cost in Billing').click();
        await this.page.getByLabel('Estimated Cost in Billing').fill('10');
        await this.page.getByRole('button', { name: 'Next' }).click();
    }

    async declaredAndReview(){

        await this.page.locator('li').filter({ hasText: 'Has the applicant been or is currently being: investigated for or charged with' }).locator('label').nth(1).click();
        await this.page.locator('li:nth-child(2) > .form-group > .controls > label > .radiobutton').first().click();
        await this.page.locator('li:nth-child(3) > .form-group > .controls > label > .radiobutton').first().click();
        await this.page.locator('li:nth-child(4) > .form-group > .controls > label > .radiobutton').first().click();
        await this.page.locator('li:nth-child(5) > .form-group > .controls > label > .radiobutton').first().click();
        await this.page.locator('li:nth-child(6) > .form-group > .controls > label > .radiobutton').first().click();
        await this.page.locator('li').filter({ hasText: 'Do any of the suppliers and' }).locator('label').nth(1).click();
        await this.page.locator('div').filter({ hasText: /^NoYesSelect an option$/ }).locator('span').first().click();
        await this.page.getByText('The Applicant hereby').click();
    }

    async reviewButtonClick(){
        await this.page.getByRole('button', { name: 'Review' }).click();
    }

    async submitGrantDetails(){
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }

    async clickOnDeclaredbutton(){
        await this.page.locator("xpath =.//*[text()='Declare & Review']").click()
    }
}