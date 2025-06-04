
function Button() {
    return (
        <button
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary shadow-xs hover:bg-primary/90 h-10 rounded-md has-[>svg]:px-4 cursor-pointer text-black text-lg px-8 py-6"
            style={{ backgroundColor: "rgb(239, 244, 131)" }}
        >
            <a href="/contact">Request Demo</a>
        </button>
    )
}

export default Button