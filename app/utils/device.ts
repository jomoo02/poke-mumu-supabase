export const isMobileDevice = () => {
  if (typeof navigator === 'undefined') return false;

  return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent,
  );
};

export const isTouchSupported = () => {
  return typeof window !== 'undefined' && 'ontouchstart' in window;
};

export const isMobile = () => {
  return isTouchSupported() || isMobileDevice();
};
