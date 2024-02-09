'use client'
import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {useInView} from 'react-intersection-observer'

import { experiencesData } from '@/lib/data';

const Experience = () => {
  const [timeline, settimeline] = useState(false)
  const { ref, inView } = useInView({
    threshold: .3
  })

  useEffect(() => {
    if(inView) {
      settimeline(true)
    } 
  }, [inView])

  return (
    <section id='experience' ref={ref} className='py-24 flex flex-col justify-center items-center text-white'>
        <h2 className='text-3xl font-medium capitalize mb-16'>My Experience</h2>
        <VerticalTimeline
          
        >
          {
            experiencesData.map((experience, i) => {
              return (
                <React.Fragment key={i}>
                <VerticalTimelineElement
                  visible={timeline}
                  contentStyle={{
                    background: 'transparent',
                    boxShadow: 'none',
                    border: '2px solid #fff',
                    textAlign: 'left',
                  }}
                  contentArrowStyle={{
                    borderRight: '.4rem solid #fff'
                  }}
                  date={experience.date}
                  dateClassName='text-gray-100'
                  icon={experience.icon}
                  iconStyle={{
                    background: 'linear-gradient(45deg, navy, magenta)'
                  }}
                >
                  <h3 className='text-gray-100 font-semibold capitalize'>{experience.title}</h3>
                  <p className='!text-sm font-normal !mt-0 text-blue-400'>{experience.location}</p>
                  <p className='text-gray-200'>{experience.description}</p>
                </VerticalTimelineElement>
              </React.Fragment>
              )
            })
          }
        </VerticalTimeline>
    </section>
  )
}

export default Experience
