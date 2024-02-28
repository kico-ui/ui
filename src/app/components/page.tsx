import LandingPage from "@/components/landing-page"
import LinkedCards from "@/components/linked-cards"
import { Header } from "@/components/ui/header"

const ComponentPage = () => {
  return (
    <div className="container min-h-screen">
      <LandingPage
        title="Explore Component Library: Build with Ease"
        description=" Discover a comprehensive collection of pre-designed components for
          your projects. Our library offers everything you need to streamline
          development."
        gridEffect
      />

      <div className="pb-24">
        <Header>Crafting Your Framework</Header>
        <LinkedCards />
      </div>
    </div>
  )
}

export default ComponentPage
