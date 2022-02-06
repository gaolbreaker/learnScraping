const puppeteer = require('puppeteer');
const prompt = require('prompt-sync')();

async function thing() {
const browser = await puppeteer.launch();
const page = await browser.newPage();

const url = prompt('What URL do you want to scrape? ');

await page.goto(url, {waitUntil: 'networkidle0'});
const saveSnap = prompt('Do you want to save a screenshot? ');
if (saveSnap || saveSnap !== 'no' || saveSnap !== 'No') {
  await page.screenshot({path: 'screenshot.png', fullPage: true});
  await page.pdf({ format: 'A4' });
}
console.log('Done.');

await browser.close();
}

thing();
