'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Header from './Header'
import WhatsAppButton from '../ui/WhatsAppButton'
import Footer from './Footer'

export default function LayoutWrapper({ children, clinicInfo, navigation }) {
    const pathname = usePathname()

    const isStudio = pathname.startsWith('/studio')

    return (
        <>
            {!isStudio && (
                <Header clinicInfo={clinicInfo} navigation={navigation} />
            )}

            <main className="flex-1">{children}</main>

            {!isStudio && <WhatsAppButton phone="+91-98765-43210" />}

            {!isStudio && (
                <Footer clinicInfo={clinicInfo} navigation={navigation} />
            )}
        </>
    )
}
