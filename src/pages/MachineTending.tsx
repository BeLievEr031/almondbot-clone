import FeaturesSection from "../components/sections/FeaturesSection"
import IntroSection from "../components/sections/IntroSection"
import VideoSrc from "../assets/machine_tending.mp4"
import { LucideFactory, LucideZap, LucideBot, LucideRepeat, LucideShield, LucideSettings } from "lucide-react"
import CallToAction from "../components/sections/CallToAction"

const featuresArr = [
    {
        "title": "Universal Compatibility",
        "description": "Works with CNC machines, injection molders, and virtually any manufacturing equipment",
        "icon": LucideFactory
    },
    {
        "title": "Continuous Operation",
        "description": "24/7 unattended operation with automatic part handling and cycle management",
        "icon": LucideRepeat
    },
    {
        "title": "Fast Deployment",
        "description": "Quick setup and integration with existing machinery and workflows",
        "icon": LucideZap
    },
    {
        "title": "Adaptive Vision",
        "description": "AI-powered vision system that adapts to part variations and positioning",
        "icon": LucideBot
    },
    {
        "title": "Safety Integration",
        "description": "Advanced safety features that comply with industry standards",
        "icon": LucideShield
    },
    {
        "title": "Intelligent Error Handling",
        "description": "Automatically detects and resolves common operational issues",
        "icon": LucideSettings
    }
]

function MachineTending() {
    return (
        <>
            <IntroSection title="AI-powered machine tending" description="Automate loading/unloading of any machine with vision that adapts to part variations" src={VideoSrc} />
            <FeaturesSection
                features={featuresArr}
                title="Machine Tending Features"
            />
            <CallToAction
                heading="Ready to automate your machine operations?"
                description="Get started with Almond Bot machine tending today"
            />
        </>
    )
}

export default MachineTending