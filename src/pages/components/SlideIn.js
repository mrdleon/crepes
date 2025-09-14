// src/components/SlideIn.js

import { useInView } from 'react-intersection-observer';
import styles from '@/styles/animations.module.css'; // Path disesuaikan

const SlideIn = ({ children, direction = 'up' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directionClass = {
    up: styles.slideUp,
    left: styles.slideLeft,
    right: styles.slideRight,
  }[direction];

  return (
    <div
      ref={ref}
      className={`${styles.hidden} ${directionClass} ${inView ? styles.visible : ''}`}
    >
      {children}
    </div>
  );
};

export default SlideIn;