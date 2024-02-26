import Button from '../../common/components/button/Button';
import style from './Slide.module.scss';

const Slide = ({ title, link, image, date, desc }) => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <div className={style.btn}>
          <Button url={link} text={'Open'} />
        </div>
        <img
          className={style.img}
          src={`${process.env.PUBLIC_URL}/certs/${image}`}
          alt={`${title} certificate`}
        />
      </div>
      <div className={style.infoBlock}>
        <div className={style.title}>
          <h3>{title}</h3>
          <span>{date}</span>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Slide;
