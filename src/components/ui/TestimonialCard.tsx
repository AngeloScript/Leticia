import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  imageUrl?: string
  rating?: number
}

export function TestimonialCard({ name, role, content, imageUrl, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-2xl p-6 shadow-md border border-neutral-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex gap-1 mb-4 text-accent">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? "fill-accent" : "fill-neutral-200 text-neutral-200"}`} />
        ))}
      </div>
      <p className="text-neutral-700 italic mb-6 flex-grow leading-relaxed">&quot;{content}&quot;</p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden shrink-0 border-2 border-primary/20">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-primary font-bold text-xl">{name.charAt(0)}</span>
          )}
        </div>
        <div>
          <h4 className="font-bold text-neutral-900">{name}</h4>
          <p className="text-sm text-neutral-500">{role}</p>
        </div>
      </div>
    </div>
  )
}
