const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');


const username = ''
const password = ''


async function downloadNotes(url, courseCode) {
    const browser = await puppeteer.launch({
        headless: false
    })

    const page = await browser.newPage()
    await page.goto(url)
    await page.type('#username', username)
    await page.type('#password', password)
    await Promise.all([
        page.click('#loginbtn'),
        page.waitForNavigation({waitUntil: 'networkidle0'}),
    ])

    const docUrls = await page.$$eval('.aalink', docElms => {
        const urls = [];
        docElms.forEach(elm => {
            urls.push(elm.src);
        })
        return urls
    })
    
    docUrls.forEach((url, index) => {
        https.get(url, res => {
            const stream = fs.createWriteStream(`${courseCode}-lecture-${index}.pdf`);
            res.pipe(stream);
            stream.on('finish', () => {
                stream.close();
            })
        })
    })

    browser.close()
}

downloadNotes('')