export const getNonPersonalInfo = () => {
  const language = navigator.language || navigator.userLanguage;
  const userAgent = navigator.userAgent;
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const time = new Date().toLocaleTimeString();

  let deviceType;
  if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
    deviceType = 'tablet';
  } else if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      userAgent,
    )
  ) {
    deviceType = 'mobile';
  } else {
    deviceType = 'desktop';
  }

  return {
    language,
    timeZone,
    deviceType,
    time,
  };
};

export { listOfCerts } from './documents/listOfCerts';
