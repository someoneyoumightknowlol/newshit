document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    const container = document.getElementById('container');
    
    container.style.transform = `rotateX(${y * 30}deg) rotateY(${x * 30}deg)`;
  });
  