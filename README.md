# note-downloader
I wrote this program to automatically download lecture resources from my school's E-Learning platform.

This program runs with the puppeteer library. Install that in your package by running:
```js
npm install puppeteer
```

Subsequently, the username and password for my elearning site (built with Moodle's LMS) would be in a different file, but for now, you declare your username and password on lines 6 and 7

```js
const username = 'your-username'
const password = 'your-password'
```

For each course you want to download, run the function -> where courseURL should be the URL for the specific course on the site
```js
downloadNotes('courseURL')
```
