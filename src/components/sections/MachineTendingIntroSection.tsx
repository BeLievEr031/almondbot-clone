import VideoSrc from "../../assets/machine_tending.mp4"
import Button from "../Button"
function MachineTendingIntroSection() {
    return (
        <section className="container mx-auto px-4 pt-8 md:pt-16">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-5xl font-bold tracking-tight mb-6">
                    AI-powered machine tending
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-12">
                    Automate loading/unloading of any machine with vision that adapts to part
                    variations
                </p>
                <div className="w-full max-w-4xl mb-12">
                    <video
                        src={VideoSrc}
                        className="w-full rounded-lg shadow-xl"
                        autoPlay
                        loop
                        playsInline
                        controlsList="nodownload"
                    />
                </div>
                <div className="flex gap-4 mb-12">
                    <Button />
                </div>
            </div>
        </section>

    )
}

export default MachineTendingIntroSection