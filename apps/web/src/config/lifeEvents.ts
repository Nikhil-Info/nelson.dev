export interface LifeEvent {
  titleKey: string
  descriptionKey: string
}

export type LifeEventsData = Record<string, LifeEvent[]>

export const lifeEvents: LifeEventsData = {
  '2025': [
    {
      titleKey: 'lifeevents.2025.icip.title',
      descriptionKey: 'lifeevents.2025.icip.description'
    },
    {
      titleKey: 'lifeevents.2025.ijcnn.title',
      descriptionKey: 'lifeevents.2025.ijcnn.description'
    }
  ],
  '2024': [
    {
      titleKey: 'lifeevents.2024.ccds.title',
      descriptionKey: 'lifeevents.2024.ccds.description'
    },
    {
      titleKey: 'lifeevents.2024.travel.title',
      descriptionKey: 'lifeevents.2024.travel.description'
    },
    {
      titleKey: 'lifeevents.2024.icip.title',
      descriptionKey: 'lifeevents.2024.icip.description'
    }
  ],
  '2023': [
    {
      titleKey: 'lifeevents.2023.ijcnn.title',
      descriptionKey: 'lifeevents.2023.ijcnn.description'
    }
  ],
  '2022': [
    {
      titleKey: 'lifeevents.2022.ccds.title',
      descriptionKey: 'lifeevents.2022.ccds.description'
    }
  ],
  '2021': [
    {
      titleKey: 'lifeevents.2021.graduation.title',
      descriptionKey: 'lifeevents.2021.graduation.description'
    }
  ],
  '2020': [
    {
      titleKey: 'lifeevents.2020.iub.title',
      descriptionKey: 'lifeevents.2020.iub.description'
    }
  ],
  '2017': [
    {
      titleKey: 'lifeevents.2017.admission.title',
      descriptionKey: 'lifeevents.2017.admission.description'
    }
  ]
}
