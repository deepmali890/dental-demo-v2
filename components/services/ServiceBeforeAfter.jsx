import React from 'react'
import SanityImage from '../ui/SanityImage'

const ServiceBeforeAfter = ({ service }) => {
    return (
        <div>
            {service.beforeAfterCases?.length > 0 && (
                <section className="section bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10">
                            <span className="section-label">Real Results</span>
                            <h2 className="section-title">Before & After</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.beforeAfterCases.map(c => (
                                <div key={c._id} className="bg-white rounded-2xl overflow-hidden shadow-md">
                                    <div className="grid grid-cols-2 gap-0.5 bg-gray-200">
                                        <div className="relative aspect-square">
                                            <SanityImage image={c.beforeImage} width={300} height={300} fill className="object-cover" />
                                            <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">Before</span>
                                        </div>
                                        <div className="relative aspect-square">
                                            <SanityImage image={c.afterImage} width={300} height={300} fill className="object-cover" />
                                            <span className="absolute bottom-2 left-2 bg-brand-600/90 text-white text-xs px-2 py-0.5 rounded">After</span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 text-sm">{c.title}</h3>
                                        {c.treatmentDuration && <p className="text-xs text-gray-400 mt-1">Duration: {c.treatmentDuration}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}

export default ServiceBeforeAfter
