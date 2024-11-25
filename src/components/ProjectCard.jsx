import React, { useState} from 'react'
import { motion } from "framer-motion";
import ProjectTag from './ProjectTag'
import ProjectTechnology from './ProjectTechnology'

const ProjectCard = (props) => {
  const tags = props.tags
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a href={props.link} target='_blank' rel='noopener noreferrer' className='block'>
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className='relative'>
        <img src={props.image} alt={props.name} className='rounded-t-[4px]'/>
          {isHovered ? (
            <div className='absolute top-0 h-full w-full flex justify-center items-center'>
              <motion.div transition={{ duration: 0.2 }} initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} className='absolute h-full w-full bg-black' />
              <p className='text-lg text-[var(--light)] z-10 opacity-100'>{props.hoverText}</p>
            </div>) : (
            <div></div>
          )}
      </div>
      <div className='bg-[var(--primary)] rounded-b-[4px] p-4 w-full min-[800px]:h-[250px] min-[850px]:h-[230px] min-[990px]:h-[200px] min-[1320px]:h-[170px]'>
        <h2 className='text-[var(--light)] text-2xl underline'>{props.name}</h2>
        <div className='flex gap-2 mb-3 flex-wrap'>
          {props.tags?.map((tag, index) => (
            <ProjectTag name={tag} key={index} />
          ))}
        </div>
        <div className='flex items-center mb-4'>
          <p className='text-[var(--light)] text-sm'>{ props.description}</p>
        </div>
        <div className='flex items-center'>
          <div className='flex gap-2 flex-wrap'>
            {props.technologies?.map((technology, index) => (
              <ProjectTechnology name={technology[0]} image={technology[1]} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </a>
  )
}

export default ProjectCard