import React from 'react';
import Figma from '../images/skills/figma.png'
import Typescript from '../images/home/typescript.png'
import Flutter from '../images/skills/flutter.png'
import ReactImage from '../images/skills/react.png'
import Unity from '../images/skills/unity.png'
import Tailwind from '../images/skills/tailwind.png'
import Swift from '../images/skills/swift.png'
import CSharp from '../images/skills/csharp.png'
import Face from '../images/home/face.png'

const CircularHero = () => {
  return (
    <div className='relative'>
      <div className="relative flex justify-center items-center bg-[var(--primary)] rounded-full w-[var(--hero-diameter)] h-[var(--hero-diameter)] animate-spin-slow">
        <div class='absolute -top-[var(--hero-moon-radius)] flex items-center drop-shadow-custom animate-spin-slow-reverse'>
          <div className="hover:scale-[1.2] transition-transform duration-300 ease-in-out">
            <img src={Typescript} alt="TypeScript" className="w-[var(--hero-moon-diameter)] h-[var(--hero-moon-diameter)] rounded-full object-cover" />
          </div>
        </div>
        <div className='absolute -left-[var(--hero-moon-radius)] flex items-center drop-shadow-custom animate-spin-slow-reverse'>
          <div className="hover:scale-[1.2] transition-transform duration-300 ease-in-out">
            <img src={Flutter} alt="Flutter" className="w-[var(--hero-moon-diameter)] h-[var(--hero-moon-diameter)] rounded-full object-cover" />
          </div>
        </div>
        <div className="absolute -right-[var(--hero-moon-radius)] flex items-center drop-shadow-custom animate-spin-slow-reverse">
          <div className='hover:scale-[1.2] transition-transform duration-300 ease-in-out'>
            <img src={Figma} alt="Figma" className="w-[var(--hero-moon-diameter)] h-[var(--hero-moon-diameter)] rounded-full object-cover" />
          </div>
        </div>
        <div className="absolute flex items-center -bottom-[var(--hero-moon-radius)] drop-shadow-custom animate-spin-slow-reverse">
          <div className='hover:scale-[1.2] transition-transform duration-300 ease-in-out'>
            <img src={ReactImage} alt="React" className="w-[var(--hero-moon-diameter)] h-[var(--hero-moon-diameter)] rounded-full object-cover" />
          </div>
        </div>
        <div className="absolute -top-[var(--hero-moon-offset)] -right-[var(--hero-moon-offset)] flex justify-start items-center drop-shadow-custom animate-spin-slow-reverse">
          <div className='hover:scale-[1.2] transition-transform duration-300 ease-in-out'>
            <img src={Unity} alt="Unity" className="w-[var(--hero-moon-diameter)] h-[var(--hero-moon-diameter)] rounded-full object-cover" />
          </div>
        </div>
        <div className="absolute -bottom-[var(--hero-moon-offset)] -right-[var(--hero-moon-offset)] flex justify-start items-center drop-shadow-custom animate-spin-slow-reverse">
          <div className='hover:scale-[1.2] transition-transform duration-300 ease-in-out'>
            <img src={Swift} alt="Swift" className="w-[var(--hero-moon-diameter)] h-[var(--hero-moon-diameter)] rounded-full object-cover" />
          </div>
        </div>
        <div className="absolute -left-[var(--hero-moon-offset)] -bottom-[var(--hero-moon-offset)] flex justify-start items-center drop-shadow-custom animate-spin-slow-reverse">
          <div className='hover:scale-[1.2] transition-transform duration-300 ease-in-out'>
            <img src={Tailwind} alt="Tailwind" className="w-[var(--hero-moon-diameter)] h-[var(--hero-moon-diameter)] rounded-full object-cover" />
          </div>
        </div>
        <div className="absolute -top-[var(--hero-moon-offset)] -left-[var(--hero-moon-offset)] flex justify-start items-center drop-shadow-custom animate-spin-slow-reverse">
          <div className='hover:scale-[1.2] transition-transform duration-300 ease-in-out'>
            <img src={CSharp} alt="C Sharp" className="w-[var(--hero-moon-diameter)] h-[var(--hero-moon-diameter)] rounded-full object-cover" />
          </div>
        </div>
      </div>
      <div className="absolute -top-0 rounded-full max-[550px]:m-8 m-10 overflow-clip drop-shadow-custom flex items-center justify-center">
        <img src={Face} alt="Joel Biswas" className="object-cover w-full" />
      </div>
    </div>
  );
};

export default CircularHero;
