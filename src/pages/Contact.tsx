import Input from "../components/Input"

function Contact() {
    return (
        <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto py-16">
                <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
                <div className="bg-card rounded-lg border p-6">
                    <form className="space-y-6">
                        <Input label="Name" placeholder="Your Name" name="name" type="text" key={Date.now()} />
                        <Input label="Email" placeholder="abc@gmail.com" name="email" type="email" key={Date.now()} />
                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm">
                                Message
                            </label>
                            <textarea
                                data-slot="textarea"
                                className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content w-full rounded-md border px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[150px] bg-background/50"
                                id="message"
                                name="message"
                                placeholder="Your message"
                                required
                                defaultValue={""}
                            />
                        </div>
                        <button
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full"
                            type="submit"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact