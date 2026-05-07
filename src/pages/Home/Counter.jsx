import React, { useState, useEffect, useRef } from 'react';
import './Counter.css';

const Counter = ({ end, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Extract number and suffix (e.g., 100k+ -> 100 and k+)
      const numPart = parseInt(end);
      const suffixPart = end.toString().replace(numPart.toString(), '');

      setCount(Math.floor(progress * numPart));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(numPart); // Final value
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  const suffix = end.toString().replace(parseInt(end).toString(), '');

  return (
    <div className="counter-item" ref={counterRef}>
      <h3>{count}{suffix}</h3>
      <p>{label}</p>
    </div>
  );
};

export default Counter;
