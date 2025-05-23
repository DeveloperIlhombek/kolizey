'use client'

import ContactDialog from '@/components/shared/contact-dialog'
import { LanguageSwitcher } from '@/components/shared/language-switcher'
import { SquigglyUnderline } from '@/components/shared/underline-navbar'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MobileMenu } from './mobile-menu'

export function Navigation() {
	//const [activeLink, setActiveLink] = useState('/')
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
			className={`w-full mx-auto z-100 transition-all duration-300 ${
				scrolled
					? 'sticky top-0 shadow-md  bg-white/90 h-16 lg:h-[70px] '
					: 'h-16 lg:h-[80px] bg-white/90 shadow-2xl'
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5, type: 'tween', damping: 20 }}
		>
			<div className='w-full h-full mx-auto flex justify-between lg:justify-around items-center border-2 border-t-0 border-[#f6a224] rounded-b-4xl'>
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
					<SquigglyUnderline />
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
