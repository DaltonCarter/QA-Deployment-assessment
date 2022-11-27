
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking the draw button pulls up a div with the id Choices', async () => {
    await driver.findElement(By.id('draw')).click()

    await driver.sleep(3000)

    const choiceDiv = await driver.findElement(By.id('choices'))

    const displayed = await choiceDiv.isDisplayed()

    expect(displayed).toBe(true)

})

test('clicking the draw button pulls up a div with the id Choices', async () => {
    await driver.findElement(By.id('draw')).click()

    await driver.sleep(3000)

    await driver.findElement(By.id('choices'))

    await driver.findElement(By.className('bot-btn')).click()

    await driver.sleep(3000)

    const playerDuo = await driver.findElement(By.id('player-duo'))

    const displayed = await playerDuo.isDisplayed()

    expect(displayed).toBe(true)


})