import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { companies } from '../../data'

export async function getStaticPaths() {
  return {
    paths: companies.map(c => ({ params: { slug: c.id } })),
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  return { props: { slug: params.slug } }
}

export default function CompanyRedirect({ slug }) {
  const router = useRouter()
  useEffect(() => { router.replace('/#experience') }, [])
  return null
}
