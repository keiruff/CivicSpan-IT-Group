interface HeroProps {
  title: string
  description: string
}

export default function Hero({ title, description }: HeroProps) {
  return (
    <section className="min-h-[360px] flex flex-col justify-center items-center text-center px-4 py-20 relative overflow-hidden bg-transparent mt-[82px] border-b border-green-500/10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
          {title}
        </h1>
        
        <p className="text-lg sm:text-xl text-neutral-light max-w-2xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
          {description}
        </p>
      </div>
    </section>
  )
}
