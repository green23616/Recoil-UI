import { useEffect } from 'react';
// CSS
import styles from './app.module.scss';
// Recoil
import { useRecoilState } from 'recoil';
import { styleState } from './store/styleState';

function App() {
  const [styleVal, setStyleVal] = useRecoilState(styleState);

  const handleMouseOver = () => {
    setStyleVal(0);
  };
  const handleMouseOver2 = () => {
    setStyleVal(1);
  };
  const handleMouseOver3 = () => {
    setStyleVal(2);
  };

  useEffect(() => {
    console.log(styleVal);
    const setTimer = setTimeout(() => {
      setStyleVal(prev => (prev > 1 ? 0 : prev + 1));
    }, 2000);
    return () => {
      clearTimeout(setTimer);
    };
  }, [styleVal]);

  return (
    <div className={styles.history}>
      <div className={styles.container}>
        <div className={styles.container__side}>
          <div
            className={`${styles.container__side__job} ${
              styleVal === 0 ? styles.active : styles.inactive
            }`}
            onMouseEnter={handleMouseOver}
          >
            <h2>2014 - 2020</h2>
            <h3>삼성전자 서비스</h3>
            <h4>유통, 판매 및 서비스 업무</h4>
            <h3>ABC마트</h3>
            <h4>세일즈 부매니저 직급 업무</h4>
          </div>
          <div
            className={`${styles.container__side__job} ${
              styleVal === 1 ? styles.active : styles.inactive
            }`}
            onMouseEnter={handleMouseOver2}
          >
            <h2>2023.06 - 11</h2>
            <h3>그린아트 아카데미</h3>
            <h4>React를 활용한 프론트엔드 교육과정</h4>
          </div>
          <div
            className={`${styles.container__side__job} ${
              styleVal === 2 ? styles.active : styles.inactive
            }`}
            onMouseEnter={handleMouseOver3}
          >
            <h2>2023.11 - 2024.02</h2>
            <h3>낸드소프트 프로젝트 사업부</h3>
            <h4>부산은행 사내 메일링 시스템 유지보수 업무</h4>
          </div>
        </div>
        <div className={styles.container__main}>
          {styleVal === 0 && 'Samsung'}
          {styleVal === 1 && 'Green Art'}
          {styleVal === 2 && 'Nandsoft'}
        </div>
      </div>
    </div>
  );
}

export default App;