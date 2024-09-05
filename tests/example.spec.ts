import { test, expect } from '@playwright/test';
import loginPage from '../pages/loginPage';
import ManualLoginPage from '../pages/manualLoginPage';
import { TestHooks } from '../hooks/hooks';
import DashbaordPage from '../pages/dashboardPage';



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
  const dashboardPage = new DashbaordPage(page);

  await page.goto('https://qa-internet.bgp.onl/');

  await login.login('temp-govtech','bgPB3Aw3SomeGvtF@lk!');


  await page.locator('[id="login-button"]').click();

  const ele = await manualLogin.pageHeaderText();
  console.log(ele);

  await manualLogin.enterManualLoginDetails('BGPQETECH','S1234567A','Acceptor','Tan Ah Kow');
 
  const dashboardButton = await dashboardPage.clickOnGrantButton();

  console.log(dashboardButton);

});


test('InValid login test',async ({page})=>{

  const hookspage = hooks.getPage();
  if (!hookspage) throw new Error('Page is not initialized.');

  const login = new loginPage(page);
  const manualLogin = new ManualLoginPage(page);
  const dashboardPage = new DashbaordPage(page);

  await page.goto('https://qa-internet.bgp.onl/');

  await login.login('temp-govtech','bgPB3Aw3SomeGvtF@lk!');


  await page.locator('[id="login-button"]').click();

  const ele = await manualLogin.pageHeaderText();
  console.log(ele);

  await manualLogin.enterManualLoginDetails('test','test','test','test');
 
  const dashboardButton = await dashboardPage.getOnInvalidLogin();

  console.log(dashboardButton);

});


test('Submit Draft Project', async ({ page }) => {

  const hookspage = hooks.getPage();
  if (!hookspage) throw new Error('Page is not initialized.');

  const login = new loginPage(page);
  const manualLogin = new ManualLoginPage(page);
  const dashboardPage = new DashbaordPage(page);

  await page.goto('https://qa-internet.bgp.onl/');

  await login.login('temp-govtech','bgPB3Aw3SomeGvtF@lk!');


  await page.locator('[id="login-button"]').click();

  const ele = await manualLogin.pageHeaderText();
  console.log(ele);


  await manualLogin.enterManualLoginDetails('BGPQETECH','S1234567A','Acceptor','Tan Ah Kow');
 
  const dashboardButton = await dashboardPage.clickOnGrantButton();

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


test('Submitted Draft Project Without details Fills',async ({page})=>{

  const login = new loginPage(page);
  const manualLogin = new ManualLoginPage(page);
  const dashboardPage = new DashbaordPage(page);

  await page.goto('https://qa-internet.bgp.onl/');

  await login.login('temp-govtech','bgPB3Aw3SomeGvtF@lk!');


  await page.locator('[id="login-button"]').click();

  const ele = manualLogin.pageHeaderText();
  console.log(ele);


  await manualLogin.enterManualLoginDetails('BGPQETECH','S1234567A','Acceptor','Tan Ah Kow');
 

 await dashboardPage.clickDraftButton()


  await dashboardPage.proceedButton();

  await dashboardPage.clickOnDeclaredbutton();

  await dashboardPage.reviewButtonClick();



})



test('Select Submited Draft Project',async ({page})=>{

  const login = new loginPage(page);
  const manualLogin = new ManualLoginPage(page);
  const dashboardPage = new DashbaordPage(page);

  await page.goto('https://qa-internet.bgp.onl/');

  await login.login('temp-govtech','bgPB3Aw3SomeGvtF@lk!');


  await page.locator('[id="login-button"]').click();

  const ele = manualLogin.pageHeaderText();
  console.log(ele);


  await manualLogin.enterManualLoginDetails('BGPQETECH','S1234567A','Acceptor','Tan Ah Kow');
 

 await dashboardPage.clickDraftButton()


  await dashboardPage.proceedButton();


  await dashboardPage.eligibilityCheck();


  await dashboardPage.contactDetails();

  await dashboardPage.proposalDetails();

  await dashboardPage.businessImpactDetails();

  await dashboardPage.costDetails();
 
  await dashboardPage.declaredAndReview();

  await dashboardPage.reviewButtonClick();

  await page.getByLabel('We, the Applicant, declare').check();
  
  await dashboardPage.submitGrantDetails()


})


