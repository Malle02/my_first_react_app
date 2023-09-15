import React, { useEffect } from 'react';

const Background = () => {
  useEffect(() => {
    const background = document.getElementById('custom-background');

    const particleCount = 30;
    const particleColors = ['#fbfcca', '#d7f3fe', '#ffd0a7'];
    const minSize = 2;
    const maxSize = 20;
    const xSpeedMin = 100;
    const xSpeedMax = -100;
    const ySpeedMin = -10;
    const ySpeedMax = 100;
    const minOpacity = 0.5;
    const maxOpacity = 1;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('span');
      particle.className = 'particle';
      const size = Math.random() * (maxSize - minSize) + minSize;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      const opacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;
      const xSpeed = Math.random() * (xSpeedMax - xSpeedMin) + xSpeedMin;
      const ySpeed = Math.random() * (ySpeedMax - ySpeedMin) + ySpeedMin;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.backgroundColor = color;
      particle.style.opacity = opacity;
      particle.style.transform = `rotate(${Math.random() * 360}deg)`;

      background.appendChild(particle);

      // Add animation for particle movement
      particle.style.animation = `move ${Math.random() * 20 + 10}s linear infinite`;
      particle.style.animationDelay = `-${Math.random() * 20}s`;
      particle.style.setProperty('--tx', `${xSpeed}vw`);
      particle.style.setProperty('--ty', `${ySpeed}vh`);
    }
  }, []);

  return <div id="custom-background" className="custom-background"></div>;
};

export default Background;
