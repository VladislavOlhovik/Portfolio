import React, { useState, useEffect } from 'react';

import { Button } from '@components';

import style from './Popup.module.scss';

export const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const dataAccepted = localStorage.getItem('dataCollectionAccepted');
    if (!dataAccepted) {
      setShowPopup(true);
    }
    let time = setTimeout(() => {
      localStorage.setItem('dataCollectionAccepted', 'true');
      setShowPopup(false);
    }, 130000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem('dataCollectionAccepted', 'true');
    setShowPopup(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className={style.popupWrapper}>
      <p>
        We collect non-personal information such as browser language, time zone,
        device type, and user agent to improve your experience. By continuing to
        use our site, you consent to this policy.
      </p>
      <Button onClick={handleAccept} title='OK, Got It!' />
    </div>
  );
};
