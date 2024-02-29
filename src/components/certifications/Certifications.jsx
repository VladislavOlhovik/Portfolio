import { useEffect, useRef, useState } from 'react';
import { Fade } from 'react-reveal';

import { Title } from '@components';
import { listOfCerts } from '@assets';
import styleContainer from '@styles/Container.module.scss';

import Carousel from './carousel/Carousel';
import style from './Certifications.module.scss';

export const Certifications = () => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const updateWidth = () => setWidth(containerRef.current.offsetWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const calculateSize = () => {
    if (width >= 1158) return 3;
    if (width > 772) return 2;
    return 1;
  };

  return (
    <section id={'certifications'} className={style.block}>
      <div
        ref={containerRef}
        className={`${styleContainer.container} ${style.container}`}
      >
        <Title title={'Certifications'} />
        <Fade bottom>
          <Carousel size={calculateSize()} listOfCerts={listOfCerts} />
        </Fade>
      </div>
    </section>
  );
};
