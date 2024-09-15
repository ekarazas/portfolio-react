import React, { useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import particlesConfig from '../config/particle-config';

const ParticlesBackground = (props) => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  return <Particles id={props.id} options={particlesConfig} />;
};

export default ParticlesBackground;
