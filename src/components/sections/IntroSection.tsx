import Button from "../Button"
interface Prop {
    title: string;
    description: string;
    src: string;
}
function IntroSection({ title, description, src }: Prop) {
    return (
        <section className="container mx-auto px-4 pt-8 md:pt-16">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-5xl font-bold tracking-tight mb-6">
                    {title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-12">
                    {description}
                </p>
                <div className="w-full max-w-4xl mb-12">
                    <video
                        src={src}
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

export default IntroSection