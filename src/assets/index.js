const id = Math.floor(Math.random()*101)
const time = new Date().toLocaleTimeString();

export const getNonPersonalInfo = () => {
  const language = navigator.language || navigator.userLanguage;
  const userAgent = navigator.userAgent;
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const screenResolution = `${window.screen.width}x${window.screen.height}`;
  const platform = navigator.platform;

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
    userAgent,
    platform,
    screenResolution,
    id
  };
};

  export const getLocation = () => {
    return new Promise((resolve) => {
      let coords = "Not available";
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          coords = `${latitude}, ${longitude}`;
          resolve({ coords, time, id });
        });
      } else {
        resolve({ coords, time, id });
      }
    });
  };

export { listOfCerts } from './documents/listOfCerts';
