'use client'

import ContactDialog from '@/components/shared/contact-dialog'
import { LanguageSwitcher } from '@/components/shared/language-switcher'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MobileMenu } from './mobile-menu'

const navlinks = [
	{ id: 1, name: 'Home', url: '/' },
	{ id: 2, name: 'About', url: '#about' },
	{ id: 3, name: 'Service', url: '#service' },
	{ id: 4, name: 'Products', url: '#products' },
	{ id: 5, name: 'FAQ', url: '#faq' },
	{ id: 6, name: 'Contact', url: '#contact' },
]

export function Navigation() {
	const [activeLink, setActiveLink] = useState('/')
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<motion.nav
			className={`w-full z-40 transition-all duration-300 ${
				scrolled
					? 'sticky top-0 shadow-md bg-[#FFB342] h-16 lg:h-[70px]'
					: 'h-16 lg:h-[80px] bg-[#FFB342]'
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5, type: 'spring', damping: 20 }}
		>
			<div className='w-[90%] h-full mx-auto flex justify-between lg:justify-around items-center border-b-2 border-[#f6a224] rounded-b-4xl'>
				<motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
					<Link href='/'>
						<Image
							src='/kolizeylogo.png'
							alt='kolizey'
							width={scrolled ? 150 : 180}
							height={scrolled ? 80 : 100}
							className='transition-all duration-300'
							priority
						/>
					</Link>
				</motion.div>

				<div className='hidden lg:flex items-center justify-center gap-6 xl:gap-10 font-bold font-spaceGrotesk'>
					{navlinks.map(link => (
						<motion.div
							key={link.id}
							whileHover={{ y: -2 }}
							transition={{ duration: 0.2 }}
						>
							<Link
								href={link.url}
								className={`relative py-2 px-1 ${
									activeLink === link.url ? 'text-primary' : 'text-black'
								}`}
								onClick={() => setActiveLink(link.url)}
							>
								{link.name}
								<motion.span
									className='absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full'
									initial={{ scaleX: 0 }}
									animate={{ scaleX: activeLink === link.url ? 1 : 0 }}
									transition={{ duration: 0.3 }}
								/>
							</Link>
						</motion.div>
					))}
				</div>

				<div className='hidden lg:flex items-center justify-center gap-4'>
					<LanguageSwitcher />
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{ duration: 0.2 }}
					>
						<ContactDialog
							trigger={
								<Button
									type='submit'
									className='bg-primary text-primary-foreground font-medium'
								>
									Bog&apos;lanish
								</Button>
							}
						/>
					</motion.div>
				</div>

				<MobileMenu />
			</div>
		</motion.nav>
	)
}
