'use client'

import { NextStudio } from 'next-sanity/studio'

export default function StudioClient({ config }) {
  return <NextStudio config={config} />
}