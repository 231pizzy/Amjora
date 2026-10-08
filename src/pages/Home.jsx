import { SEO } from '@/components/ui/SEO'
import { organizationSchema, websiteSchema } from '@/lib/schema'
import { Hero } from '@/components/sections/Hero'
import { PhilosophyBanner } from '@/components/sections/PhilosophyBanner'
import { WhatWeBuild } from '@/components/sections/WhatWeBuild'
import { Ecosystem } from '@/components/sections/Ecosystem'
import { AmjoraWaySection } from '@/components/sections/AmjoraWaySection'
import { EngineeringExcellence } from '@/components/sections/EngineeringExcellence'
import { FinderCulture } from '@/components/sections/FinderCulture'
import { RoadmapSection } from '@/components/sections/RoadmapSection'
import { InsightsPreview } from '@/components/sections/InsightsPreview'
import { FinalCTA } from '@/components/sections/FinalCTA'

export function Home() {
  return (
    <>
      <SEO
        title="Amjora — Finding Ways"
        description="Amjora is a technology company building trusted software, payment infrastructure and AI solutions that improve lives and power businesses."
        path="/"
        jsonLd={[organizationSchema, websiteSchema]}
      />
      <Hero />
      <PhilosophyBanner />
      <WhatWeBuild />
      <Ecosystem />
      <AmjoraWaySection />
      <EngineeringExcellence />
      <FinderCulture />
      <RoadmapSection />
      <InsightsPreview />
      <FinalCTA />
    </>
  )
}

export default Home
