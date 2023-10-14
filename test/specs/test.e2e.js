import {browser, expect} from '@wdio/globals';
import MainPage from '../pageobjects/main.page.js';
// import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()
//
//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })

describe('My birthday application', () => {
    it('should look correctly', async () => {
        await MainPage.open()

        // await browser.url(`` );
        await browser.execute('/*@visual.init*/', 'Birthday Remider App')
        await browser.execute('/*@visual.snapshot*/', 'Default State')

        await expect(MainPage.title).toBeExisting()
        await expect(MainPage.title).toHaveTextContaining("Birthday Remider App")

        await MainPage.btnClear.click();
        await browser.execute('/*@visual.snapshot*/', 'Clear State')

        await expect(MainPage.title).toBeExisting()


    })
});