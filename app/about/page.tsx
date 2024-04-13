import React from 'react'
import { AboutComponents } from '../components/about'
import { GlobalComponents } from '../components/global'

const About = () => {
  return (
    <div className="container-fluid about">
      <AboutComponents.Hero />
      <div className="container mb-[450px] md:mb-[0px]">
        <GlobalComponents.Title className='green-purple' title='Unveiling Our Story' start='-=350px' end='-=350px'/>
        <GlobalComponents.Feature 
          isLeft={false}
          img='/assets/about-2.png'
          title='Exploring the Heartbeat of Our Brand'
          paragraph_1='At the core of our brand lies a vibrant tapestry woven with passion, innovation, and dedication. With each stitch and seam, we strive to encapsulate the essence of our ethos, delivering products that not only meet but exceed expectations. Our journey is one of relentless pursuit – of quality, of creativity, of authenticity.'
          paragraph_2='Through every collection, every design, we aim to ignite inspiration and forge connections, inviting you to join us on a voyage of discovery where style knows no bounds.'
        />
      </div>
      <div className="container-fluid hidden md:visible">
        <GlobalComponents.Banner img='/assets/vision-banner.png' text='Discover Our Vision' />
      </div>
      <div className="container mt-[100px] md:mt-[0px]">
        <GlobalComponents.Title className='purple-green' title='Signature Features' start='-=350px' end='-=350px' />
        <AboutComponents.Feature 
          title="Unveiling the Essence of Our Design Identity"
          paragraph_1="In this section, we delve deep into the heart of our brand's DNA, shining a light on the distinctive features that define our design ethos. From intricate craftsmanship to innovative technologies, each element has been meticulously curated to reflect our commitment to excellence and creativity."
          paragraph_2="Join us as we explore the unique characteristics that set our products apart, inviting you to discover the essence of our brand's identity and the stories behind each remarkable detail."
        />
        <AboutComponents.MultipleBanner />
      </div>
    </div>
  )
}

export default About
