'use client'

import ContactDialog from '@/components/shared/contact-dialog'
import { LanguageSwitcher } from '@/components/shared/language-switcher'
import { SquigglyUnderline } from '@/components/shared/underline-navbar'
import { Button } from '@/components/ui/button'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MobileMenu } from './mobile-menu'

export function Navigation() {
	const [scrolled, setScrolled] = useState(false)
	const [isHovered, setIsHovered] = useState(false)

	const { scrollY } = useScroll()
	const height = useTransform(scrollY, [0, 100], [80, 60])
	//const logoSize = useTransform(scrollY, [0, 100], [180, 150])
	const opacity = useTransform(scrollY, [0, 50], [1, 0.9])
	const shadow = useTransform(
		scrollY,
		[0, 50],
		['0 4px 20px rgba(0,0,0,0.1)', '0 2px 10px rgba(0,0,0,0.08)']
	)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navVariants = {
		hidden: { y: -100, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				damping: 20,
				stiffness: 100,
			},
		},
	}

	const logoVariants = {
		normal: { scale: 1 },
		hover: {
			scale: 1.05,
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 10,
			},
		},
	}

	const buttonVariants = {
		initial: { scale: 1 },
		hover: {
			scale: 1.05,
			boxShadow: '0 4px 15px rgb(199, 176, 99)',
		},
		tap: { scale: 0.98 },
	}

	return (
		<motion.nav
			className={`w-full mx-auto z-50 backdrop-blur-sm`}
			style={{
				height,
				opacity,
				boxShadow: shadow,
				position: 'sticky',
				top: 0,
				background: 'rgb(199, 176, 99)',
			}}
			variants={navVariants}
			initial='hidden'
			animate='visible'
		>
			<div className='max-w-7xl w-full h-full mx-auto px-4 flex justify-between items-center'>
				<motion.div
					variants={logoVariants}
					initial='normal'
					whileHover='hover'
					transition={{ duration: 0.2 }}
				>
					<Link href='/' className='flex items-center'>
						<AnimatePresence mode='wait'>
							<motion.div
								key={scrolled ? 'small' : 'large'}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<Image
									src='/kolizeylogo.png'
									alt='kolizey'
									width={150}
									height={80}
									className='transition-all duration-300'
									priority
								/>
							</motion.div>
						</AnimatePresence>
					</Link>
				</motion.div>

				<div className='hidden lg:flex items-center justify-center gap-6 xl:gap-10 font-bold font-spaceGrotesk'>
					<SquigglyUnderline />
				</div>

				<div className='hidden lg:flex items-center justify-center gap-4'>
					<LanguageSwitcher />
					<motion.div
						variants={buttonVariants}
						whileHover='hover'
						whileTap='tap'
						onHoverStart={() => setIsHovered(true)}
						onHoverEnd={() => setIsHovered(false)}
					>
						<ContactDialog
							trigger={
								<Button
									type='submit'
									className='bg-primary text-primary-foreground font-medium relative overflow-hidden'
								>
									<AnimatePresence>
										{isHovered && (
											<motion.span
												className='absolute inset-0 bg-blue-500 opacity-80'
												initial={{ x: '-100%' }}
												animate={{ x: '100%' }}
												exit={{ x: '100%' }}
												transition={{ duration: 0.6 }}
											/>
										)}
									</AnimatePresence>
									<span className='relative z-10'>Bog&apos;lanish</span>
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
