import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';

const CountUpWhenVisible = ({ end, start = 0, duration = 10, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const countUpRef = useRef();

  const options = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.5, // 50% of the component is visible
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, [options]);

  return (
    <span ref={countUpRef}>
      {isVisible && (
        <CountUp start={start} end={end} duration={duration} {...props} />
      )}
    </span>
  );
};

export default CountUpWhenVisible;
