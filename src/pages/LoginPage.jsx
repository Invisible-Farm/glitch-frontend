/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { QRCodeSVG } from 'qrcode.react';

export default function LoginPage() {
  const baseUrl = 'http://3.26.13.71:10011';
  const [qrData, setQrData] = useState('');

  useEffect(() => {
    axios.get(`${baseUrl}/api/sign-in`)
      .then((data) => {
        setQrData(JSON.stringify(data.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <QRCodeSVG
        value={qrData}
        size={300}
        bgColor="#ffffff"
        fgColor="#000000"
        level="L"
        // includeMargin={false}
        imageSettings={{
          // x: undefined,
          // y: undefined,
          height: 300,
          width: 300,
          // excavate: true,
        }}
      />
    </div>
  );
}
