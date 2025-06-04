import AutomatSection from "../components/sections/AutomatSection"
import HeroSection from "../components/sections/HeroSection"
import PartnersSection from "../components/sections/PartnersSection"
import PricingSection from "../components/sections/PricingSection"
import UseCaseSection from "../components/sections/UseCaseSection"


function Home() {
    return (
        <>
            <HeroSection />
            <UseCaseSection />
            <PricingSection />
            <AutomatSection />
            <PartnersSection />
        </>
    )
}

export default Home