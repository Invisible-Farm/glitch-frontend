/* eslint-disable no-param-reassign */
import { useEffect, useRef } from 'react';
import axios from 'axios';

export default function LoginPage() {
  const baseUrl = 'http://3.26.13.71:10011';

  function handleDisplay(el, needShow, display = 'block') {
    el.style.display = needShow ? display : 'none';
  }

  const qrCodeRef = useRef(null);

  useEffect(() => {
    if (qrCodeRef.current) {
      const qrCodeEl = document.querySelector('#qrcode');

      axios.get(`${baseUrl}/api/sign-in`)
        .then((data) => {
          console.log(data);

          // eslint-disable-next-line no-new
          new window.QRCode(qrCodeRef.current, {
            text: JSON.stringify(data),
            width: 300,
            height: 300,
            colorDark: '#000',
            colorLight: '#e9e9e9',
            correctLevel: window.QRCode.CorrectLevel.H,
          });
          handleDisplay(qrCodeEl, true);
        })

        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <>
      <script src="../../public/qrcode.min.js" />
      <div>
        <div ref={qrCodeRef} />
      </div>
    </>
  );
}
