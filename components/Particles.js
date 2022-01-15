import React from 'react'
import PropTypes from 'prop-types'
import ReactParticles from 'react-tsparticles'

function Particles(props) {
  return (
    <ReactParticles
      id="tsparticles"
      options={{
        fpsLimit: 60,
        particles: {
          links: {
            enable: true,
            distance: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            outModes: {
              default: 'bounce',
            },
          },
          size: {
            value: 1,
          },
        },
      }}
    />
  )
}

Particles.propTypes = {}

export default Particles
