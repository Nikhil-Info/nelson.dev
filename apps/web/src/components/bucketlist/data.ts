export interface BucketListItem {
  titleKey: string
  descriptionKey?: string
  categoryKey: 'travel' | 'career' | 'personal' | 'creative'
  completed: boolean
  targetDate?: string
}

export const bucketListItems: BucketListItem[] = [
  // Travel & Adventure
  {
    titleKey: 'bucketlist.items.japan.title',
    descriptionKey: 'bucketlist.items.japan.description',
    categoryKey: 'travel',
    completed: false,
    targetDate: '2025'
  },
  {
    titleKey: 'bucketlist.items.iceland.title',
    categoryKey: 'travel',
    completed: false,
    targetDate: '2026'
  },
  {
    titleKey: 'bucketlist.items.seasia.title',
    categoryKey: 'travel',
    completed: false
  },

  // Career & Learning
  {
    titleKey: 'bucketlist.items.opensource.title',
    descriptionKey: 'bucketlist.items.opensource.description',
    categoryKey: 'career',
    completed: false,
    targetDate: '2024'
  },
  {
    titleKey: 'bucketlist.items.conference.title',
    categoryKey: 'career',
    completed: false
  },
  {
    titleKey: 'bucketlist.items.newlanguage.title',
    descriptionKey: 'bucketlist.items.newlanguage.description',
    categoryKey: 'career',
    completed: false,
    targetDate: '2024'
  },

  // Personal Development
  {
    titleKey: 'bucketlist.items.marathon.title',
    categoryKey: 'personal',
    completed: false,
    targetDate: '2025'
  },
  {
    titleKey: 'bucketlist.items.guitar.title',
    categoryKey: 'personal',
    completed: false
  },
  {
    titleKey: 'bucketlist.items.books.title',
    categoryKey: 'personal',
    completed: false,
    targetDate: '2024'
  },

  // Creative Projects
  {
    titleKey: 'bucketlist.items.saas.title',
    descriptionKey: 'bucketlist.items.saas.description',
    categoryKey: 'creative',
    completed: false,
    targetDate: '2025'
  },
  {
    titleKey: 'bucketlist.items.blogpost.title',
    categoryKey: 'creative',
    completed: false
  },
  {
    titleKey: 'bucketlist.items.npmpackage.title',
    categoryKey: 'creative',
    completed: false
  },

  // Completed Items
  {
    titleKey: 'bucketlist.items.portfolio.title',
    descriptionKey: 'bucketlist.items.portfolio.description',
    categoryKey: 'creative',
    completed: true
  },
  {
    titleKey: 'bucketlist.items.react.title',
    categoryKey: 'career',
    completed: true
  }
]
