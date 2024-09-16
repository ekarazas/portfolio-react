const particlesConfig = {
  background: {
    color: {
      value: "#10151f",
    },
  },
  fpsLimit: 120,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: false,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
    },
    modes: {
      push: {
        distance: 200,
        duration: 15,
      },
      grab: {
        distance: 180,
      },
    },
  },
  particles: {
    color: {
      value: "#FFFFFF",
    },
    links: {
      color: "#FFFFFF",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 150,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};

export default particlesConfig;
