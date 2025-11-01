import type { Metadata } from 'next'
import type { Locale } from 'next-intl'
import type { CollectionPage, WithContext } from 'schema-dts'

import { getTranslations } from 'next-intl/server'

import JsonLd from '@/components/json-ld'
import LifeEvents from '@/components/lifeevents/lifeevents'
import PageHeader from '@/components/page-header'
import { MY_NAME } from '@/lib/constants'
import { createMetadata } from '@/lib/metadata'
import { getBaseUrl } from '@/utils/get-base-url'
import { getLocalizedPath } from '@/utils/get-localized-path'

type PageProps = {
  params: Promise<{
    locale: string
  }>
}

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const { params } = props
  const { locale } = await params

  const t = await getTranslations({ locale: locale as Locale })
  const title = t('common.labels.lifeevents')
  const description = t('lifeevents.description')

  return createMetadata({
    pathname: '/lifeevents',
    title,
    description,
    locale
  })
}

const Page = async (props: PageProps) => {
  const { params } = props
  const { locale } = await params

  // Use getTranslations on the server instead of useTranslations
  const t = await getTranslations({ locale: locale as Locale })
  const title = t('common.labels.lifeevents')
  const description = t('lifeevents.description')
  const url = getLocalizedPath({ locale, pathname: '/lifeevents' })

  const jsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': url,
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: MY_NAME,
      url: getBaseUrl()
    },
    inLanguage: locale
  }

  return (
    <>
      <JsonLd json={jsonLd} />
      <PageHeader title={title} description={description} />
      <LifeEvents />
    </>
  )
}

export default Page
