const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');
const creds = require('./credentials');
// const dpath = path.resolve('./download');

async function downloadNotes(url, courseCode) {
    const browser = await puppeteer.launch({
        headless: false
    })

    const page = await browser.newPage()
    await page.goto(url)
    await page.type('#username', creds.username)
    await page.type('#password', creds.password)
    await Promise.all([
        page.click('#loginbtn'),
        page.waitForNavigation({waitUntil: 'networkidle0'}),
    ])

    const docUrls = await page.$$eval('.aalink', docElms => {
        const urls = [];
        docElms.forEach(elm => {
            urls.push(elm.href);
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

downloadNotes('https://elearning.pau.edu.ng/course/view.php?id=1649','ISM210')