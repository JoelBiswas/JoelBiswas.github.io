import React from 'react'
import Arrow from '../images/home/arrow.png'
import CircularHero from './CircularHero'

const Home = () => {
  return (
    <div id='home' className='flex justify-evenly flex-gap-3 items-center mx-4 md:ml-24 pt-24 flex-col md:flex-row'>
      <div className='w-full md:w-2/3 flex flex-col justify-center items-center'>
        <div>
          <h1 className='text-left'>Hey,</h1>
          <div className='flex gap-3'>
            <h1>I am
              <span className='text-[var(--primary)] ml-2 text-[46px]'>Joel Biswas</span></h1>
          </div>
          <div className='overflow-clip h-4 md:h-5 lg:h-8 flex items-center'>
            <div className='animate-rotate-text-small md:animate-rotate-text-medium lg:animate-rotate-text-large'>
              <h2 className='mt-1 text-xl md:text-2xl lg:text-3xl opacity-15'>Full Stack Developer</h2>
              <h2 className='mt-1 text-xl md:text-2xl lg:text-3xl opacity-15'>Mobile Developer</h2>
              <h2 className='mt-1 text-xl md:text-2xl lg:text-3xl opacity-15'>Web Developer</h2>
              <h2 className='mt-1 text-xl md:text-2xl lg:text-3xl opacity-15'>Backend Developer</h2>
              <h2 className='mt-1 text-xl md:text-2xl lg:text-3xl opacity-15'>Game Developer</h2>
              <h2 className='mt-1 text-xl md:text-2xl lg:text-3xl opacity-15'>Cybersecurity Enthusiast</h2>
              <h2 className='mt-1 text-xl md:text-2xl lg:text-3xl opacity-15'>Full Stack Developer</h2>
            </div>
          </div>
          <p className='mt-6 md:mt-4 leading-6 text-[18px] max-w-[370px]'>I am an aspiring programmer who loves learning. I enjoy building mobile apps using Flutter, web apps using React and TailwindCSS, and video games using the Unity Game Engine. I am constantly seeking new opportunities to use and expand my skills!</p>
          <button>
            <a href="#projects">
              <div className='flex justify-center align-middle rounded-sm bg-[var(--primary)] w-[150px] h-[42px] my-4 px-2 py-2 drop-shadow-custom  hover:scale-[120%] transition-transform duration-300 ease-in-out'>
                <p className='text-[var(--light)] text-xl text-center mr-4'>Projects</p>
                <img src={Arrow} alt='Forward Arrow' className='w-[30px] h-[20px] mt-1'/>
              </div>
            </a>
          </button>
        </div>
      </div>
      <div className='w-full my-6 md:my-0 flex justify-center items-center'>
        <CircularHero />
      </div>
    </div>
  )
}

export default Home