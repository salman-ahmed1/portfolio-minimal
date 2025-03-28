/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// src/global.d.ts
interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}
