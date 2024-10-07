import { Metadata } from 'next'

import { getAboutUs } from '@lib/data/fetch'
import { Banner } from '@modules/content/components/banner'
import { BasicContentSection } from '@modules/content/components/basic-content-section'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'At Solace, we deliver innovative products designed to meet your needs with quality and care.',
}

export default async function AboutUsPage() {
  const {
    data: { Banner: bannerData, OurStory, WhyUs, OurCraftsmanship, Numbers },
  } = await getAboutUs()

  return (
    <>
      {bannerData && <Banner data={bannerData} />}
      {OurStory && <BasicContentSection data={OurStory} />}
      {OurCraftsmanship && <BasicContentSection data={OurCraftsmanship} />}
    </>
  )
}