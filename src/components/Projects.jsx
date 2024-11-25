import React from 'react'
import ProjectCard from './ProjectCard'
import SpeakUP from '../images/projects/speakup.png'
import GhostSamurai from '../images/projects/ghostsamurai.png'
import Cyberpatriots from '../images/projects/cyberpatriots.png'
import NASA from '../images/projects/nasa.png'
import Flutter from '../images/projects/technologies/flutter.svg'
import Deno from '../images/projects/technologies/deno.svg'
import Typescript from '../images/projects/technologies/typescript.svg'
import Supabase from '../images/projects/technologies/supabase.svg'
import Dart from '../images/projects/technologies/dart.svg'
import Figma from '../images/projects/technologies/figma.svg'
import Git from '../images/projects/technologies/git.svg'
import Unity from '../images/projects/technologies/unity.svg'
import Linux from '../images/projects/technologies/linux.svg'
import Bash from '../images/projects/technologies/bash.svg'

const Projects = () => {
  return (
    <div id='projects' className='mt-8'>
      <h2 className='mt-3 mb-3 text-center text-[var(--primary)] text-4xl tracking-[1px]'>PROJECTS</h2>
      <div className='grid grid-cols-1 min-[800px]:grid-cols-2 gap-4 px-4'>
        <ProjectCard image={SpeakUP} name='SpeakUP' tags={['Mobile', 'Artificial Intelligence', 'API Integrations', 'Full-Stack']} technologies={[['Flutter', Flutter], ['Dart', Dart], ['Figma', Figma], ['Deno', Deno], ['Typescript', Typescript], ['Supabase', Supabase], ['Git', Git],]} hoverText='CLICK TO GO TO REPO' link='https://github.com/SpeakUP-Mobile' description='An AI-Interview coach designed for IOS and Android. Submitted as a part of the Congressional App Challenge 2024.'/>
        <ProjectCard image={GhostSamurai} name='Ghost Samurai' tags={['Game Development', 'Competition']} technologies={[['Unity', Unity], ['Git', Git]]} hoverText='CLICK TO GO TO REPO' link='https://github.com/JoelBiswas/ghost-samurai' description='A 2D combat-based video game played with a mouse. Won first place at the Georgia State Technology Competition (GaSTC).'/>
        <ProjectCard image={Cyberpatriots} name='Cyberpatriots' tags={['Cybersecurity', 'Competition']} technologies={[['Linux', Linux], ['Bash', Bash]]} hoverText='CLICK TO GO TO WEBSITE' link='https://www.uscyberpatriot.org/' description='Competed in a national cybersecurity competition in which teams of six compete to fix vulnerabilities in virtual machines.'/>
        <ProjectCard image={NASA} name='NASA App Development Competiton' tags={['Competition', 'In-Progress']} technologies={[['Unity', Unity], ['Git', Git]]} hoverText='CLICK TO GO TO REPO' link='https://gitlab.com/lambert-stem-in-space/lambert-adc-2025' description='Simulation of the flight path of NASA’s Artemis II mission around the moon. Created with a team for NASA’s annual challenge.'/>
      </div>
    </div>
  )
}

export default Projects