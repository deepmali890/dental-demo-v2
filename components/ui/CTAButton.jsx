import Link from 'next/link'
import React from 'react'

export default function CTAButton({ data, className = 'btn-primary', children }) {
    if (!data?.label) return null

    const label = children || data.label
    const style = data.style || 'primary'
    const target = data.openInNewTab ? '_blank' : undefined

    const styleClasses = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        ghost: 'btn-ghost',
        link: 'text-brand-600 hover:underline font-medium',
    }

    const finalClass = className || styleClasses[style] || 'btn-primary'

    // Phone Link
    if (data.linkType === 'phone' && data.phoneNumber) {
        return (
            <a href={`tel:${data.phoneNumber}`} className={finalClass}>
                {label}
            </a>
        )
    }

    // WhatsApp link
    if (data.linkType === 'whatsapp' && data.phoneNumber) {
        const num = data.phoneNumber.replace(/\D/g, '')
        return (
            <a href={`https://wa.me/${num}`} target="_blank" rel="noopener noreferrer" className={finalClass}>
                {label}
            </a>
        )
    }

    // Email link
    if (data.linkType === 'email' && data.emailAddress) {
        return (
            <a href={`mailto:${data.emailAddress}`} className={finalClass}>
                {label}
            </a>
        )
    }

    // External URL
    if (data.linkType === 'external' && data.externalUrl) {
        return (
            <a href={data.externalUrl} target={target} rel="noopener noreferrer" className={finalClass}>
                {label}
            </a>
        )
    }

    // Anchor
    if (data.linkType === 'anchor' && data.anchorId) {
        return (
            <a href={data.anchorId} className={finalClass}>
                {label}
            </a>
        )
    }

    // Internal link (default)
    const href = data.internalLink || '/'
    return (
        <Link href={href} target={target} className={finalClass}>
            {label}
        </Link>
    )

}
