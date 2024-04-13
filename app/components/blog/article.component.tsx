import React from 'react'
import Image from 'next/image'

const Article = () => {
  return (
    <div className='blog-article p-2 md:p-0'>
      <Image className='rounded-md' src="/assets/discover-banner.png" alt='blog-image' width={1920} height={400}/>
      <p className="text-sm my-12">Navigating the Tides of Fashion: Fashion is a dynamic reflection of culture, constantly shifting and evolving with the times. From the flamboyant styles of the Roaring Twenties to the minimalist chic of the 1990s, each era leaves its indelible mark on the sartorial landscape. Yet amidst this ever-changing tide, certain elements endure, weaving a timeless thread through the fabric of fashion. The little black dress, the crisp white shirt, the impeccably tailored suit – these iconic pieces transcend trends, serving as timeless staples in every wardrobe. As we navigate the currents of fashion, it's essential to strike a balance between embracing the latest trends and honoring the enduring classics, crafting a personal style that is both of-the-moment and timeless.</p>
      <p className="text-sm my-12">The Power of Personal Style: Style is more than just clothing; it's a form of self-expression, a way to communicate our personality, values, and aspirations to the world. Whether we're drawn to bold patterns and vibrant colors or prefer the understated elegance of neutrals, our fashion choices speak volumes about who we are and how we want to be perceived. Embracing our personal style empowers us to celebrate our individuality, to express ourselves authentically and unapologetically. It's not about conforming to external standards of beauty or following the latest trends; it's about finding the confidence to wear what makes us feel most like ourselves. As we cultivate our personal style, we cultivate a deeper sense of self-awareness and self-acceptance, embracing the beauty of our uniqueness and celebrating the diversity of expression that makes fashion such a rich and vibrant tapestry.</p>
      <div className="blog-images pr-3 md:pr-0 flex gap-3">
        <Image className='rounded-md w-1/2' src="/assets/blog-1.png" alt='blog-image' width={1920} height={400}/>
        <Image className='rounded-md w-1/2' src="/assets/blog-2.png" alt='blog-image' width={1920} height={400}/>
      </div>
      <p className="text-sm my-12">Fashion Forward: Embracing Innovation and Creativity: At its core, fashion is an art form – a canvas upon which designers and creators weave together fabric, color, and texture to craft something beautiful and meaningful. Yet beyond its aesthetic appeal, fashion also has the power to inspire, to challenge, and to provoke thought. From avant-garde runway shows to boundary-pushing street style, fashion has the ability to push boundaries and challenge conventions, sparking conversations and driving cultural change. In an industry that thrives on innovation and creativity, there is always room for experimentation and exploration, for pushing the limits of what is possible and reimagining what fashion can be. As we look to the future of fashion, let us embrace the spirit of innovation and creativity, celebrating the bold visionaries who dare to dream and the fearless individuals who dare to wear their creations.</p>
    </div>
  )
}

export default Article
