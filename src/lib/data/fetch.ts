import { HeroBannerData } from 'types/strapi'

export const fetchStrapiClient = async (
  endpoint: string,
  params?: RequestInit
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}${endpoint}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_READ_TOKEN}`,
      },
      ...params,
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response
}

// Homepage data
export const getHeroBannerData = async (): Promise<HeroBannerData> => {
  const res = await fetchStrapiClient(
    `/api/homepage?populate[1]=HeroBanner&populate[2]=HeroBanner.CTA&populate[3]=HeroBanner.Image`,
    {
      next: { tags: ['hero-banner'] },
    }
  )

  return res.json()
}