import React from 'react'
import AboutCard from './AboutCard.jsx'

const About = () => {
  return (
    <div id='about' className='mt-8'>
      <h2 className='text-center text-4xl text-[var(--primary)] tracking-[1px]'>ABOUT</h2>
      <div className='md:flex items-center'>
        <div className='my-5 md:my-0 md:mb-0 md:ml-8 md:mr-4 w-full md:w-1/3 h-full flex flex-col gap-5 px-4 md:px-0'>
            <AboutCard name='Mobile Development' description='I create fast interactive expereinces for IOS and Android using Flutter.'/>
            <AboutCard name='Web Development' description='I create interactive and responsive websites (like this portfolio) using React and TailwindCSS.'/>
            <AboutCard name='UI/UX Development' description='I use Figma to design mobile applications as well as webpages.'/>
            <AboutCard name='Backend Development' description='I often work on full-stack apps using Firebase or Supabase, occasionally writing functions using Deno.'/>
            <AboutCard name='Game Development' description='I have always loved making fun and engaging games. I primarily use Unity and C#'/>
            <AboutCard name='Cybersecurity' description='I am an avid enthusiast in cybersecurity, and I hope to learn more.'/>
        </div>
        <div className='w-2/3 ml-4 mr-8 flex flex-col gap-5'>
          <div>
            <p className='text-lg mb-1'>Interests</p>
            <ul className='list-disc ml-5'>
              <li className='text-[var(--dark)] text-sm font-[Lekton]'><strong>App Development</strong> - I love to make mobile apps using Flutter and web apps using React and TailwindCSS</li>
              <li className='text-[var(--dark)] text-sm font-[Lekton]'><strong>Game Development</strong> - This is how my love of programming started. I love to make 2D and 3D games using the Unity Game Engine</li>
              <li className='text-[var(--dark)] text-sm font-[Lekton]'><strong>Cybersecurity</strong> - I have taken a cybersecurity course through the SANS foundation, obtained a certification (GFACT) and competed in the CyberPatriots competition.</li>
              <li className='text-[var(--dark)] text-sm font-[Lekton]'><strong>Robotics</strong> - I am part of my high school's robotic's team, working primarily on electrical systems and leadership duties</li>
            </ul>
          </div>
          <div>
            <p className='text-lg mb-1'>Activities I am a Part of</p>
            <ul className='list-disc ml-5'>
              <li className='text-[var(--dark)] text-sm font-[Lekton]'><strong>FIRST Robotics Competition (FRC)</strong> - Electrical Lead (2023-2024) and Gamma Captain (2024-2025)</li>
              <li className='text-[var(--dark)] text-sm font-[Lekton]'><strong>Lambert Cybersecurity Club</strong> - Training Lead (2024-2025) and Cyberpatriots Competitor (2024)</li>
              <li className='text-[var(--dark)] text-sm font-[Lekton]'><strong>Lambert RecSTEM</strong> - President (2024-2025). Working on organizing a school-wide hackathon</li>
              <li className='text-[var(--dark)] text-sm font-[Lekton]'><strong>Lambert STEM in Space</strong> - Programming Lead (2024-2025) and NASA App Development Challenge competitor (2024)</li>
              <li className='text-[var(--dark)] text-sm font-[Lekton]'><strong>Future Business Leaders of America (FBLA)</strong> - State-Level competitor</li>
            </ul>
          </div>
          <div>
            <p className='text-lg mb-1'>My Stack</p>
            <ul className='list-disc ml-6'>
              <li className='text-[var(--dark)] text-sm font-[Lekton]'><strong>Mobile Development</strong> - Flutter, Dart, Swift</li>
              <li className='text-[var(--dark)] text-sm font-[Lekton]'><strong>Web Development</strong> - React, TailwindCSS</li>
              <li className='text-[var(--dark)] text-sm font-[Lekton]'><strong>UI/UX Design</strong> - Figma, Canva</li>
              <li className='text-[var(--dark)] text-sm font-[Lekton]'><strong>Backend Development</strong> - Firebase, Supabse, Deno, Typescript</li>
              <li className='text-[var(--dark)] text-sm font-[Lekton]'><strong>Game Development</strong> - Unity, C#</li>
            </ul>
          </div>
          <div>
            <p className='text-lg mb-1'>Certifications</p>
            <ul className='list-disc ml-5'>
              <li className='text-[var(--dark)] font-bold text-sm font-[Lekton]'>GFACT Cybersecurity Certification</li>
            </ul>
          </div>
          <div>
            <p className='text-lg mb-1'>Awards</p>
            <ul className='list-disc ml-5'>
              <li className='text-[var(--dark)] text-sm font-[Lekton]'><strong>First place</strong> in Digital Game Design at the 2024 Georgia State Technology Competition (GaSTC)</li>
              <li className='text-[var(--dark)] text-sm font-[Lekton]'>Competed at the 2024 <strong>World Chapmionships</strong> for the First Robotics Competition after winning <strong>numerous awards</strong> at prior competitions.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About