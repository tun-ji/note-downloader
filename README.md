
# Moodle lecture resource downloader

I wrote this program to automatically download lecture resources from my school's E-Learning platform.

This program runs with the puppeteer library. Install that in your package by running:
```js
npm install puppeteer
```

In the credentials.js file, enter your username and password

```js
module.exports = {
    username: '',
    password: ''
}
```

For each course you want to download, run the function -> where courseURL should be the URL for the specific course on the site
```js
downloadNotes('courseURL')
```
