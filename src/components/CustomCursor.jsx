import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Sprawdzamy czy urządzenie obsługuje dotyk (np. telefony, tablety)
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    setIsTouchDevice(mediaQuery.matches);
    
    const handler = (e) => setIsTouchDevice(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let isInitialized = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Kiedy myszka ruszy się pierwszy raz, przenieś kropkę natychmiast na jej pozycję
      if (!isInitialized) {
        cursorX = mouseX;
        cursorY = mouseY;
        isInitialized = true;
      }

      if (cursorRef.current) {
        const isHoveringBtn = e.target.closest('a, button, .btn, [role="button"]');
        if (isHoveringBtn) {
          cursorRef.current.classList.add(styles.hidden);
        } else {
          cursorRef.current.classList.remove(styles.hidden);
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    let rafId;
    const render = () => {
      // Płynna interpolacja (lerp) - wartość 0.35 daje płynne, ale bardzo responsywne/szybkie podążanie
      cursorX += (mouseX - cursorX) * 0.35;
      cursorY += (mouseY - cursorY) * 0.35;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      
      rafId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return <div className={styles.cursorWrapper} ref={cursorRef} />;
};

export default CustomCursor;
