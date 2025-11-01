'use client'

import { motion, useInView } from 'motion/react'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

import { lifeEvents } from '@/config/lifeEvents'

const variants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
}

const Divider = () => {
  return <div className='my-8 w-full border border-gray-200 dark:border-gray-700' />
}

interface EventStepProps {
  title: string
  children: React.ReactNode
}

const EventStep = ({ title, children }: EventStepProps) => {
  return (
    <li className='mb-6 ml-2'>
      <div className='mb-2 flex items-start'>
        <BsPatchCheckFill className='mt-1 mr-3 size-4 shrink-0 text-foreground' />
        <p className='leading-relaxed font-medium text-foreground'>{title}</p>
      </div>
      <p className='ml-7 leading-relaxed text-muted-foreground'>{children}</p>
    </li>
  )
}

interface EventYearProps {
  year: string
  events: Array<{ titleKey: string; descriptionKey: string }>
}

const EventYear = ({ year, events }: EventYearProps) => {
  const t = useTranslations()

  return (
    <div>
      <h3 className='mb-6 text-xl font-bold tracking-tight text-foreground'>{year}</h3>
      <ul>
        {events.map((event, index) => (
          <EventStep key={index} title={t(event.titleKey as Parameters<typeof t>[0])}>
            {t(event.descriptionKey as Parameters<typeof t>[0])}
          </EventStep>
        ))}
      </ul>
    </div>
  )
}

export default function LifeEvents() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  // Sort years in descending order (newest first)
  const years = Object.keys(lifeEvents).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  if (years.length === 0) return null

  return (
    <motion.div
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={sectionRef}
      transition={{
        duration: 0.5
      }}
    >
      <motion.div
        className='mx-auto max-w-3xl'
        initial={{
          y: 40,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        {years.map((year, index) => (
          <div key={year}>
            {index !== 0 && <Divider />}
            <EventYear year={year} events={lifeEvents[year]} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
