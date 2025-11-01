import type { Metadata } from 'next'
import type { Locale } from 'next-intl'
import type { CollectionPage, WithContext } from 'schema-dts'

import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import BucketList from '@/components/bucketlist/bucketlist'
import JsonLd from '@/components/json-ld'
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
  const title = t('common.labels.bucketlist')
  const description = t('bucketlist.description')

  return createMetadata({
    pathname: '/bucketlist',
    title,
    description,
    locale
  })
}

const Page = (props: PageProps) => {
  const { params } = props
  const { locale } = use(params)

  setRequestLocale(locale as Locale)

  const t = useTranslations()
  const title = t('common.labels.bucketlist')
  const description = t('bucketlist.description')
  const url = getLocalizedPath({ locale, pathname: '/bucketlist' })

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
      <BucketList />
    </>
  )
}

export default Page
