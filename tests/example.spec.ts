import { test, expect } from '@playwright/test';
import loginPage from '../pages/loginPage';
import ManualLoginPage from '../pages/manualLoginPage';
import { TestHooks } from '../hooks/hooks';



const hooks = new TestHooks();

test.beforeAll(async () => {
  await hooks.beforeAll();
});

test.afterAll(async () => {
  await hooks.afterAll();
});


test('Valid login test',async ({page})=>{

  const hookspage = hooks.getPage();
  if (!hookspage) throw new Error('Page is not initialized.');

  const login = new loginPage(page);
  const manualLogin = new ManualLoginPage(page);

  await page.goto('https://qa-internet.bgp.onl/');

  await login.login('temp-govtech','bgPB3Aw3SomeGvtF@lk!');


  await page.locator('[id="login-button"]').click();

  const ele = await manualLogin.pageHeaderText();
  console.log(ele);

  await manualLogin.enterManualLoginDetails('BGPQETECH','S1234567A','Acceptor','Tan Ah Kow');
 
  const element = await page.locator('xpath = .//*[text()="Get new grant"]');
   
  await element.waitFor({ state: 'attached', timeout: 55000 }); // 550000 ms timeout

  const status= await element.isVisible();
  console.log(status);

});


test('InValid login test',async ({page})=>{

  const hookspage = hooks.getPage();
  if (!hookspage) throw new Error('Page is not initialized.');

  const login = new loginPage(page);
  const manualLogin = new ManualLoginPage(page);

  await page.goto('https://qa-internet.bgp.onl/');

  await login.login('temp-govtech','bgPB3Aw3SomeGvtF@lk!');


  await page.locator('[id="login-button"]').click();

  const ele = await manualLogin.pageHeaderText();
  console.log(ele);

  await manualLogin.enterManualLoginDetails('test','test','test','test');
 
  const element = await page.locator('xpath = .//*[@class="unauthorized-title--X5R0 error-title"]');
   
  await element.waitFor({ state: 'attached', timeout: 55000 }); // 550000 ms timeout

  const status= await element.isVisible();
  console.log(status);

});


test('Submit Draft Project', async ({ page }) => {

  const hookspage = hooks.getPage();
  if (!hookspage) throw new Error('Page is not initialized.');

  const login = new loginPage(page);
  const manualLogin = new ManualLoginPage(page);

  await page.goto('https://qa-internet.bgp.onl/');

  await login.login('temp-govtech','bgPB3Aw3SomeGvtF@lk!');


  await page.locator('[id="login-button"]').click();

  const ele = await manualLogin.pageHeaderText();
  console.log(ele);


  await manualLogin.enterManualLoginDetails('BGPQETECH','S1234567A','Acceptor','Tan Ah Kow');
 


  const element = await page.locator('xpath = .//*[text()="Get new grant"]');
   
  await element.waitFor({ state: 'attached', timeout: 55000 }); // 550000 ms timeout

  await element.click();

  await page.locator('[id="Agriculture"]').click();

  await page.locator('[id="Food"]').click();

  await page.locator('xpath = .//*[@class="items-container"]/div[1]').click();

  await page.locator('xpath = .//*[@id="Market Access & Development"]/parent::label').click();

  const ele2 = await page.locator('[id="go-to-grant"]');

  await ele2.click();

  const projectDetails = await page.locator('[class="grant-title above-pkg-label"]').textContent();
  console.log(await projectDetails);
  expect.soft(await projectDetails).toEqual('Market Access & Development (Enterprise Development Grant)');

});



test('Select Submited Draft Project',async ({page})=>{

  const login = new loginPage(page);
  const manualLogin = new ManualLoginPage(page);

  await page.goto('https://qa-internet.bgp.onl/');

  await login.login('temp-govtech','bgPB3Aw3SomeGvtF@lk!');


  await page.locator('[id="login-button"]').click();

  const ele = manualLogin.pageHeaderText();
  console.log(ele);


  await manualLogin.enterManualLoginDetails('BGPQETECH','S1234567A','Acceptor','Tan Ah Kow');
 

  const element = await page.locator('[href="#drafts"]');

  await element.waitFor({ state: 'attached', timeout: 55000 }); // 5000 ms timeout

  element.click();


  await page.locator('xpath = .//*[@id="db-apps-drafts"]//tbody//tr[1]//a').click();

  await page.locator('[id="keyPage-form-button"]').click();

  const data = await page.locator('xpath = .//*[@class="main"]//h2[1]').textContent();

  console.log(data);

  await page.locator('xpath = .//*[@class="form-horizontal bgp-radio-group"][1]//*[@value = "true"]').click();

  await page.locator('xpath = .//*[@class="form-horizontal bgp-radio-group"][2]//*[@value = "true"]').click();

  await page.locator('xpath = .//*[@class="form-horizontal bgp-radio-group"][3]//*[@value = "true"]').click();

  await page.locator('xpath = .//*[@class="form-horizontal bgp-radio-group"][4]//*[@value = "true"]').click();
  
  await page.locator('xpath = .//*[@class="form-horizontal bgp-radio-group"][5]//*[@value = "true"]').click();

  await page.locator('[id="next-btn"]').click();

  await page.locator('[id="react-contact_info-name"]').fill('test');


  await page.locator('[id="react-contact_info-designation"]').fill('test');


  await page.locator('[id="react-contact_info-phone"]').fill('123456789');


  await page.locator('[id="react-contact_info-primary_email"]').fill('test@gmail.com');
  //console.log(ele1);


  await page.locator('[placeholder="Enter your Postal Code"]').fill('509734');

  await page.locator('[class="input-group-addon bgp-search-group-addon"]').click();

  await page.locator('[id="react-contact_info-offeree_name"]').fill('text');

  await page.locator('[id="react-contact_info-offeree_designation"]').fill('testdata');


  await page.locator('[id="react-contact_info-offeree_email"]').fill('test@gmail.com');

  await page.locator('[id="next-btn"]').click();

  await page.locator('[id="react-project-title"]').fill('Project 1');

  await page.locator('[id="react-project-start_date"]').click();

  await page.locator('xpath = .//*[@id="react-project-start_date"]//parent::div//*[@class="rdtDay rdtToday"]').click();

  await page.keyboard.press('Escape');

  await page.locator('[id="react-project-end_date"]').click();

  await page.locator('xpath = .//*[@id="react-project-end_date"]//parent::div//*[@class="rdtDay rdtToday"]').click();

  await page.keyboard.press('Escape');

  await page.locator('[id = "react-project-description"]').fill('Test');

  await page.locator('[id="react-select-project-activity--value"]').click();
  await page.getByLabel('FTA & Trade Compliance').click();
//////
  await page.locator('[id="react-select-project-primary_market--value"]').click();
  await page.locator('#react-select-project-primary_market--value').getByRole('combobox').fill('indi');
  await page.getByLabel('India', { exact: true }).click();
  await page.getByText('Yes').click();
  await page.locator('[class="bgp-btn bgp-btn-next"]').click();

  const businessPage  = await page.locator('xpath = .//*[text()="Explain The Business Impact"]');
  await businessPage.waitFor({ state: 'visible', timeout: 55000 });

  const dateElement = await page.locator('[id="react-project_impact-fy_end_date_0"]');
  await dateElement.waitFor({ state: 'attached', timeout: 55000 }); // 5000 ms timeout
  dateElement.click();
  await page.getByRole('cell', { name: '28' }).nth(2).click();
  await page.locator('#react-project_impact-overseas_sales_0').click();
  await page.locator('#react-project_impact-overseas_sales_0').fill('100');
  await page.locator('#react-project_impact-overseas_sales_1').click();
  await page.locator('#react-project_impact-overseas_sales_1').fill('100');
  await page.locator('#react-project_impact-overseas_sales_2').click();
  await page.locator('#react-project_impact-overseas_sales_2').fill('1');
  await page.locator('#react-project_impact-overseas_sales_3').click();
  await page.locator('#react-project_impact-overseas_sales_3').fill('1');
  await page.locator('#react-project_impact-overseas_investments_0').click();
  await page.locator('#react-project_impact-overseas_investments_0').fill('1');
  await page.locator('#react-project_impact-overseas_investments_1').click();
  await page.locator('#react-project_impact-overseas_investments_1').fill('1');
  await page.locator('#react-project_impact-overseas_investments_2').click();
  await page.locator('#react-project_impact-overseas_investments_2').fill('1');
  await page.locator('#react-project_impact-overseas_investments_3').click();
  await page.locator('#react-project_impact-overseas_investments_3').fill('1');
  await page.getByPlaceholder('Provide reasons for overseas').click();
  await page.getByPlaceholder('Provide reasons for overseas').fill('test');
  await page.getByPlaceholder('e.g. first mover advantage,').click();
  await page.getByPlaceholder('e.g. first mover advantage,').fill('test');
  await page.locator('.main').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#react-project_cost-vendors-accordion-header').getByText('SGD').click();
  await page.getByRole('button', { name: 'Add New Item' }).click();
  await page.locator('label').filter({ hasText: /^Overseas$/ }).locator('span').first().click();
  await page.getByTestId('text-field').click();
  await page.getByTestId('text-field').fill('vendor');
  await page.getByText('Singapore', { exact: true }).click();
  await page.getByPlaceholder('Search for vendor').click();
  await page.getByPlaceholder('Search for vendor').fill('vendor');
  await page.getByText('nil').click();
  await page.getByText('Overseas', { exact: true }).click();
  await page.getByTestId('text-field').click();
  await page.locator('[placeholder="Key in name for overseas vendor"]').fill('Vednor');
  await page.locator('[id="react-project_cost-vendors-0-attachments-btn"]').click();
  await page.locator('body').setInputFiles('/files/A Mindcalm pers 0.png');
  await page.getByLabel('Estimated Cost in Billing').click();
  await page.getByLabel('Estimated Cost in Billing').fill('10');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('li').filter({ hasText: 'Has the applicant been or is currently being: investigated for or charged with' }).locator('label').nth(1).click();
  await page.locator('li:nth-child(2) > .form-group > .controls > label > .radiobutton').first().click();
  await page.locator('li:nth-child(3) > .form-group > .controls > label > .radiobutton').first().click();
  await page.locator('li:nth-child(4) > .form-group > .controls > label > .radiobutton').first().click();
  await page.locator('li:nth-child(5) > .form-group > .controls > label > .radiobutton').first().click();
  await page.locator('li:nth-child(6) > .form-group > .controls > label > .radiobutton').first().click();
  await page.locator('li').filter({ hasText: 'Do any of the suppliers and' }).locator('label').nth(1).click();
  await page.locator('div').filter({ hasText: /^NoYesSelect an option$/ }).locator('span').first().click();
  await page.getByText('The Applicant hereby').click();
  await page.getByRole('button', { name: 'Review' }).click();
  await page.getByLabel('We, the Applicant, declare').check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('cell', { name: '24096ADU' }).click();

})


