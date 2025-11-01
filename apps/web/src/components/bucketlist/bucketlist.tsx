'use client'

import { Check } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { bucketListItems } from './data'

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

interface BucketItemProps {
  title: string
  description?: string
  completed: boolean
  targetDate?: string
}

const BucketItem = ({ title, description, completed, targetDate }: BucketItemProps) => {
  return (
    <li className='mb-6 ml-2'>
      <div className='mb-2 flex items-start'>
        <div
          className={`
          mt-1 mr-3 flex size-4 shrink-0 items-center justify-center rounded-full border-2
          ${
            completed
              ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
              : 'border-gray-300 dark:border-white'
          }
        `}
        >
          {completed && <Check className='size-2.5' />}
        </div>
        <p
          className={`
          leading-relaxed font-medium
          ${completed ? 'text-black line-through dark:text-white' : 'text-foreground'}
        `}
        >
          {title}
        </p>
      </div>
      {(description || targetDate) && (
        <div className='ml-7 leading-relaxed'>
          {description && (
            <p
              className={`
              text-muted-foreground
              ${completed && 'text-green-600 dark:text-green-500'}
            `}
            >
              {description}
            </p>
          )}
          {targetDate && <p className='mt-1 text-sm text-muted-foreground'>Target: {targetDate}</p>}
        </div>
      )}
    </li>
  )
}

const BucketList = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const t = useTranslations()

  const completedCount = bucketListItems.filter((item) => item.completed).length
  const totalCount = bucketListItems.length

  if (bucketListItems.length === 0) return null

  // Group items by category
  const itemsByCategory = bucketListItems.reduce<Record<string, typeof bucketListItems>>((acc, item) => {
    const categoryKey = item.categoryKey
    if (!acc[categoryKey]) {
      acc[categoryKey] = []
    }
    acc[categoryKey].push(item)
    return acc
  }, {})

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
        {Object.entries(itemsByCategory).map(([categoryKey, items]) => (
          <div key={categoryKey} className='mb-8'>
            <h2 className='mb-6 border-b pb-2 text-2xl font-semibold text-foreground'>
              {t(`bucketlist.categories.${categoryKey as 'travel' | 'career' | 'personal' | 'creative'}`)}
            </h2>
            <ul>
              {items.map((item, index) => (
                <BucketItem
                  key={index}
                  title={t(item.titleKey as any)}
                  description={item.descriptionKey ? t(item.descriptionKey as any) : undefined}
                  completed={item.completed}
                  targetDate={item.targetDate}
                />
              ))}
            </ul>
          </div>
        ))}

        <Divider />

        <div className='text-right'>
          <p className='text-muted-foreground'>
            <strong>
              {completedCount} out of {totalCount}
            </strong>{' '}
            completed.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default BucketList
