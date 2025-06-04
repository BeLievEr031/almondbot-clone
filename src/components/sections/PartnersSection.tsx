import GoogleImgSrc from "../../assets/google.webp"
import BerkeleyImgSrc from "../../assets/berkeley.webp"
import DoordashImgSrc from "../../assets/doordash.webp"

function PartnersSection() {
    return (
        <section className="container mx-auto px-4 pt-24 pb-8">
            <div className="flex flex-col items-center">
                <p className="text-muted-foreground mb-4">Built by engineers from</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    <Image alt="Google" src={GoogleImgSrc} />
                    <Image alt="DoorDash" src={DoordashImgSrc} />
                    <Image alt="UC Berkeley" src={BerkeleyImgSrc} />
                </div>
            </div>
        </section>

    )
}

interface ImgProp {
    alt: string;
    width?: number;
    height?: number;
    src: string;
}

function Image({ alt, src, height = 0, width = 125 }: ImgProp) {
    return <img
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
        decoding="async"
        data-nimg={1}
        className="opacity-80 hover:opacity-100 transition-opacity brightness-175"
        style={{ color: "transparent" }}
        src={src}
    />
}

export default PartnersSection