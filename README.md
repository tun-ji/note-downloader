# note-downloader
I wrote this program to automatically download lecture resources from my school's E-Learning platform.

This program runs with the puppeteer library. Install that in your package by running:
```
npm install puppeteer
```

Subsequently, the username and password for my elearning site (built with Moodle's LMS) would be in a different file, but for now, you declare your username and password on lines 6 and 7

```
const username = 'username'
const password = 'password'
```
