import React from 'react'
import SkillCard from './SkillCard'
import Tailwind from '../images/skills/tailwind.png'
import Figma from '../images/skills/figma.png'
import Flutter from '../images/skills/flutter.png'
import Swift from '../images/skills/swift.png'
import HTML from '../images/skills/html.png'
import Python from '../images/skills/python.png'
import Typescript from '../images/skills/typescript.png'
import ReactImage from '../images/skills/react.png'
import Unity from '../images/skills/unity.png'
import CSharp from '../images/skills/csharp.png'
import Dart from '../images/skills/dart.png'
import Canva from '../images/skills/canva.png'
import Linux from '../images/skills/linux.png'
import Firebase from '../images/skills/firebase.png'
import Supabase from '../images/skills/supabase.png'
import Git from '../images/skills/git.png'
import Deno from '../images/skills/deno.png'
import Bash from '../images/skills/bash.png'


const Skills = () => {
  return (
    <div id='skills' className='mt-8'>
      <h2 className='text-[var(--primary)] tracking-[1px] text-center text-4xl'>SKILLS</h2>
      <div className='mx-4'>
        <div className='overflow-hidden w-full'>
          <div className='flex space-x-4 animate-slideRight'>
            <SkillCard image={Tailwind} name='Tailwind'/>
            <SkillCard image={Figma} name='Figma' />
            <SkillCard image={Flutter} name='Flutter' />
            <SkillCard image={Swift} name='Swift' />
            <SkillCard image={HTML} name='HTML' />
            <SkillCard image={Python} name='Python' />
            <SkillCard image={Tailwind} name='Tailwind'/>
            <SkillCard image={Figma} name='Figma' />
            <SkillCard image={Flutter} name='Flutter' />
            <SkillCard image={Swift} name='Swift' />
            <SkillCard image={HTML} name='HTML' />
            <SkillCard image={Python} name='Python' />
          </div>
        </div>
        <div className='overflow-clip w-full'>
          <div className='flex space-x-4 animate-slideLeft'>
            <SkillCard image={Typescript} name='Typescript' />
            <SkillCard image={ReactImage} name='React' />
            <SkillCard image={Unity} name='Unity' />
            <SkillCard image={CSharp} name='C#' />
            <SkillCard image={Dart} name='Dart' />
            <SkillCard image={Canva} name='Canva' />
            <SkillCard image={Typescript} name='Typescript' />
            <SkillCard image={ReactImage} name='React' />
            <SkillCard image={Unity} name='Unity' />
            <SkillCard image={CSharp} name='C#' />
            <SkillCard image={Dart} name='Dart' />
            <SkillCard image={Canva} name='Canva' />
          </div>
        </div>
        <div className='overflow-hidden w-full'>
          <div className='flex space-x-4 animate-slideRight'>
            <SkillCard image={Linux} name='Linux' />
            <SkillCard image={Firebase} name='Firebase' />
            <SkillCard image={Supabase} name='Supabase' />
            <SkillCard image={Git} name='Git' />
            <SkillCard image={Deno} name='Deno' />
            <SkillCard image={Bash} name='Bash' />
            <SkillCard image={Linux} name='Linux' />
            <SkillCard image={Firebase} name='Firebase' />
            <SkillCard image={Supabase} name='Supabase' />
            <SkillCard image={Git} name='Git' />
            <SkillCard image={Deno} name='Deno' />
            <SkillCard image={Bash} name='Bash' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills