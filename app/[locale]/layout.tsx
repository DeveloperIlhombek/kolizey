import { Toaster } from '@/components/ui/sonner'
import { Locale } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Roboto, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import './globals.css'

const roboto = Roboto({
	subsets: ['latin', 'cyrillic'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-roboto',
})

const spaceGrotesk = SpaceGrotesk({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}) {
	// `locale` ni tekshiramiz
	const { locale } = await params

	if (!routing.locales.includes(locale as Locale)) {
		notFound()
	}
	const messages = await getMessages()

	return (
		<html lang={locale} className='dark' suppressHydrationWarning>
			<body
				className={`${roboto.variable} ${spaceGrotesk.variable} antialiased`}
			>
				<NextIntlClientProvider messages={messages}>
					<Toaster position='top-center' />
					{children}
					<Script
						id='replain-widget'
						strategy='afterInteractive'
						dangerouslySetInnerHTML={{
							__html: `
			window.replainSettings = { id: '7de5b43d-e33a-4487-8199-918701d94981' };
(function(u){var s=document.createElement('script');s.async=true;s.src=u;
var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
})('https://widget.replain.cc/dist/client.js');
		`,
						}}
					/>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
