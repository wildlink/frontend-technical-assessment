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

## Non-AI Assessment

Complete the following tasks in order. You may be asked to explain your approach or to look up documentation as you go.

## Task 1: Add a close button to hide the extension

Users currently have no way to dismiss the badge. Add a close (or toggle) control so they can hide the extension UI.

## Task 2: Check if an input field exists in the DOM

1. Open [jcpenney.com/cart](http://jcpenney.com/cart) and [macys.com/my/bag](http://macys.com/my/bag) (add a product to cart on each site first if the pages are empty).
2. Find a selector for the **coupon input field** on each of those pages.
3. In your code, on page load: check whether that input exists on the current page.
4. If it exists, display a message saying `"We can apply coupons here!"`.

## Bonus: Only show content inside App after the async task

1. There is an async process runs in the background and appends a `div` with `id="shopsmart-div"` to the page. Render the extension content (e.g. the App component) only after that div exists—i.e. after the async process has finished.
2. The async logic lives in `asyncTask.ts`; you may modify that file if needed.

## AI Assessment

## Task 1: Fix the bug

The service worker is supposed to respond to `GET_RATE` messages from the content script with a cashback rate. But the content script always receives `undefined`, the rate never arrives.

Find the bug and fix it.

## Task 2: Build the CashbackBadge component

Once the rate is flowing correctly, implement the badge.
