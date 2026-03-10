import browser from 'webextension-polyfill';
import { MessageType, GetRateMessage, GetRateResponse } from 'shared/types';
import { merchantRates } from './merchantRates';

async function getMerchantRate(domain: string): Promise<number | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(merchantRates[domain] ?? null);
    }, 50);
  });
}

browser.runtime.onMessage.addListener(
  (message: unknown, _sender, sendResponse: (response: GetRateResponse) => void) => {
    const msg = message as GetRateMessage;

    if (msg.type === MessageType.GET_RATE) {
      getMerchantRate(msg.domain).then((rate) => {
        sendResponse({ rate });
      });
    }
  },
);
