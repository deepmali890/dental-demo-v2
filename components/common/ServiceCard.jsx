import { ArrowRight, Plus } from "lucide-react"
import Link from "next/link"
import * as Icons from 'lucide-react'
import SanityImage from "@/components/ui/SanityImage"

function getLucideIcon(name) {
    if (!name) return Icons.FileQuestion

    const formatted =
        name.charAt(0).toUpperCase() + name.slice(1)

    return Icons[formatted] || Icons.Tooth
}

export default function ServiceCard({ service, highlighted = false }) {


    const price =
        service?.pricing?.showPrice &&
        typeof service?.pricing?.startingFrom === 'number'
            ? service.pricing.startingFrom.toLocaleString()
            : null

    const Icon = getLucideIcon(service.icon)

    return (
        <Link
            href={`/services/${service.slug || ''}`}
            className={`group relative flex flex-col bg-white rounded-2xl p-5 border transition-all duration-300 
            hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]
            ${highlighted 
                ? 'border-blue-200 shadow-md' 
                : 'border-slate-100 hover:border-blue-100'
            }`}
        >

            {/* Image */}
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-slate-50">

                {service?.coverImage?.asset ? (
                    <SanityImage
                        image={service.coverImage}
                        fill
                        sizes="(max-width:768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-blue-50/30">
                        <Icon size={32} className="text-blue-600" />
                    </div>
                )}

                <div className="absolute top-3 right-3 h-8 w-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm translate-y-1 group-hover:translate-y-0">
                    <Plus size={16} className="text-blue-600" />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1">

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {service.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6">
                    {service.shortDescription}
                </p>

                {/* Bottom */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">

                    {price ? (
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                                From
                            </span>
                            <span className="text-sm font-bold text-blue-600">
                                ₹{price}
                            </span>
                        </div>
                    ) : (
                        <Icon size={18} className="text-slate-400" />
                    )}

                    <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <ArrowRight size={14} />
                    </div>
                </div>
            </div>
        </Link>
    )
}