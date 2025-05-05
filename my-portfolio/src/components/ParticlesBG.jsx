import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBG = () => {
  const init = useCallback(async (engine) => {
    await loadSlim(engine); //          tiny bundle
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: '#0e0e0e' },
        particles: {
          color: { value: '#00c8c8' },
          links: { enable: true, color: '#00c8c8', opacity: 0.25 },
          move: { enable: true, speed: 0.4 },
          number: { value: 60, density: { enable: true, area: 900 } },
          opacity: { value: 0.4 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } }
        },
        interactivity: {
          events: { onHover: { enable: true, mode: 'repulse' } },
          modes: { repulse: { distance: 120 } }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticlesBG;
