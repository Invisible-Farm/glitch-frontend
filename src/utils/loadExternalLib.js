function loadExternalJS() {
  const script = document.createElement('script');
  script.src = './qrcode.min.js';
  script.async = true;

  document.body.appendChild(script);
}

export default loadExternalJS;
