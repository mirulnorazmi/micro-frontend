// Extend Window type to recognize __POWERED_BY_QIANKUN__
declare global {
  interface Window {
    __POWERED_BY_QIANKUN__?: boolean;
  }
}

export {};
