// const puppeteer = require("puppeteer")
import puppeteer from "puppeteer"

(async() => {
    console.log("Loading")
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto("http://localhost:3000")
    await page.type("#side", "30")
    await page.type("#alpha", "35")
    await page.click("#calcButton")
    const actual = await page.$eval("#perimeter" , elem => elem.value)

    if (actual == 120){
        console.log("OK")
    }
    else {
        console.log("Hiba!")
    }
    //   console.log("Eredmény:" , actual)
     await browser.close()

})()