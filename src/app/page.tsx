import { Header } from "@/components/ui/header"
import ComponentExamples from "@/components/component-examples"
import FeatureCards from "@/components/feature-cards"
import LandingPage from "@/components/landing-page"
import { PageActionLinks } from "@/components/page-actions"

export default function Home() {
  return (
    <section className="container">
      <LandingPage
        title="Make development easy"
        description="Beautifully designed components that you can copy and paste into
            your apps. Build complex components easy and responsive."
        gridEffect
      >
        <PageActionLinks />
      </LandingPage>
      <FeatureCards />
      <div className="h-full relative pb-24">
        <Header>Kico ui component examples</Header>
        <ComponentExamples />
      </div>
    </section>
  )
}
