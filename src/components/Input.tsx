interface Prop {
    label: string;
    placeholder: string;
    name: string;
    type: "email" | "text"
}
function Input({ label, name, placeholder, type }: Prop) {
    return (
        <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
                {label}
            </label>
            <input
                data-slot="input"
                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-background/50"
                id="email"
                placeholder={placeholder}
                required
                type={type}
                name={name}
            />
        </div>
    )
}

export default Input