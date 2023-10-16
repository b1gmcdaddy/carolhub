import React from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function ParticleBg() {

    async function loadParticles(main){
        await loadFull(main);
    }
  return (
    <Particles 
        id='tsparticles'
        init={loadParticles}
        options={{
            fullScreen: {
                zIndex: -1,
            },
            background: {
                color: {
                    value: "#000000",
                },
            },
            fpsLimit: 120,
           
            particles: {
                color: {
                    value: "#ffff",
                },
                links: {
                    color: "#ffa31a",
                    distance: 150,
                    enable: true,
                    opacity: 0.8,
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
                        area: 800,
                    },
                    value: 35,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
    />
  )
}

export default ParticleBg