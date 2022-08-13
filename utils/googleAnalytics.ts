// lib/gtag.js
import { GA_TRACKING_ID } from '$config';

declare let gtag: Function;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const gtagPageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export interface GTAGType {
  action: string;
  category: string;
  label: string;
  value: string;
}

export const gtagEvent = ({ action, category, label, value }: GTAGType) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
