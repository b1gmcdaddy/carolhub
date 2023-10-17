import React, { useState } from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'


function ParticleBg() {
    const [isLightMode, setIsLightMode] = useState(false);

    async function loadParticles(main){
        await loadFull(main);
    }

  return (
    <div>
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
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
           
            particles: {
                color: {
                    value: isLightMode ? "#ffffff" : "#ffffff",
                },
                links: {
                    color: !isLightMode ? "#ffa31a" : "#ffffff",
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
                        area: 400,
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
    <FontAwesomeIcon icon={faLightbulb} onClick={() => setIsLightMode(!isLightMode)}
    size='2xl' title='Light/Dark Mode' className={`cursor-pointer fixed bottom-6 left-6 ${
        isLightMode ? 'text-white hover:text-hub-color' : 'text-hub-color hover:text-white'
    }`}/>
    </div>
  )
}

export default ParticleBg;