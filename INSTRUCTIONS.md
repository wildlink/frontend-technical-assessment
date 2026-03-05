# ShopSmart Extension — Code Test

## Background

ShopSmart is a Chrome extension that detects cashback rates for merchants and shows a badge to the user while they browse. It has two main parts:

- A **service worker** that handles cashback rate lookups
- A **content script** that runs on every page, asks the worker for the current site's rate, and renders a React badge into the page

The extension is partially built. There's a bug preventing the rate from reaching the content script, and the badge component needs to be implemented.

## Setup

```bash
npm install
npm run watch
```

Then load the extension in Chrome:
1. Go to `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked** → select the `dist/` folder

Visit `amazon.com` to test.

## Task 1: Fix the bug

The service worker is supposed to respond to `GET_RATE` messages from the content script with a cashback rate. But the content script always receives `undefined`, the rate never arrives.

Find the bug and fix it.

## Task 2: Build the CashbackBadge component

Once the rate is flowing correctly, implement the badge.


