import React from 'react'
import Card from './Card'
import skills from '../data/skills'

const SkillPage = () => {
  return (
    <div className='p-2 grid grid-cols-3 gap-4 scroll-auto max-lg:grid-cols-2 max-sm:grid-cols-1 lg:mt-[50px]'>
      {skills?.map((skill, index) => (
        <Card key={index} icon={skill.icon} title={skill.title} details={skill.details} />
      ))}
    </div>
  )
}

export default SkillPage