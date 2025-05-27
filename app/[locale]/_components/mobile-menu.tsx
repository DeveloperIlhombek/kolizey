'use client'

import ContactDialog from '@/components/shared/contact-dialog'
import { LanguageSwitcher } from '@/components/shared/language-switcher'
import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navlinks = [
	{ id: 1, name: 'Home', url: '/' },
	{ id: 2, name: 'About', url: '#about' },
	{ id: 3, name: 'Service', url: '#service' },
	{ id: 4, name: 'Products', url: '#products' },
	{ id: 6, name: 'Contact', url: '#contact' },
]

export function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setIsOpen(false)
			}
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
			document.documentElement.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
			document.documentElement.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
			document.documentElement.style.overflow = 'auto'
		}
	}, [isOpen])

	const menuVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.3,
				when: 'beforeChildren',
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.2,
				when: 'afterChildren',
			},
		},
	}

	const panelVariants = {
		hidden: { x: '100%' },
		visible: {
			x: 0,
			transition: {
				type: 'spring',
				damping: 25,
				stiffness: 300,
			},
		},
		exit: {
			x: '100%',
			transition: {
				type: 'spring',
				damping: 30,
				stiffness: 300,
			},
		},
	}

	const linkVariants = {
		hidden: { opacity: 0, x: 20 },
		visible: (i: number) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.05 * i,
				duration: 0.3,
			},
		}),
		hover: {
			x: 8,
			color: '#f6a224',
			transition: { duration: 0.2 },
		},
	}

	return (
		<div className='lg:hidden'>
			<motion.button
				onClick={() => setIsOpen(true)}
				whileTap={{ scale: 0.95 }}
				className='p-2 text-black focus:outline-none'
			>
				<Menu size={24} />
				<span className='sr-only'>Open menu</span>
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className='fixed inset-0 z-50 flex flex-col h-screen'
						variants={menuVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
					>
						{/* Overlay */}
						<motion.div
							className='absolute inset-0 bg-black/60'
							onClick={() => setIsOpen(false)}
						/>

						{/* Menu Panel */}
						<motion.div
							className='relative ml-auto w-full max-w-xs h-full bg-white shadow-xl flex flex-col'
							variants={panelVariants}
						>
							{/* Header */}
							<div className='bg-[#b1ada8] p-2 flex justify-between items-center'>
								<motion.div
									initial={{ scale: 0.9 }}
									animate={{ scale: 1 }}
									transition={{ type: 'spring', stiffness: 400 }}
								>
									<Image
										src='/kolizeylogo.png'
										alt='kolizey'
										width={140}
										height={80}
										className='object-contain'
									/>
								</motion.div>

								<div className='flex items-center gap-2'>
									<LanguageSwitcher />
									<motion.button
										onClick={() => setIsOpen(false)}
										whileHover={{ rotate: 90, scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										className='p-1 text-black rounded-full focus:outline-none'
									>
										<X size={24} />
										<span className='sr-only'>Close menu</span>
									</motion.button>
								</div>
							</div>

							{/* Content Area */}
							<div className='flex-1 flex flex-col overflow-hidden'>
								{/* Scrollable Content */}
								<motion.div
									className='flex-1 overflow-y-auto p-4'
									initial='hidden'
									animate='visible'
								>
									<nav className='w-full mb-4'>
										<ul className='space-y-3'>
											{navlinks.map((link, i) => (
												<motion.li
													key={link.id}
													custom={i}
													variants={linkVariants}
													whileHover='hover'
												>
													<Link
														href={link.url}
														className='text-lg font-bold block py-3 border-b border-gray-100 hover:text-[#f6a224] transition-colors'
														onClick={() => setIsOpen(false)}
													>
														{link.name}
													</Link>
												</motion.li>
											))}
										</ul>
									</nav>
								</motion.div>

								{/* Fixed Bottom Section */}
								<motion.div
									className='p-4 bg-white border-t border-gray-200'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}
								>
									<ContactDialog
										trigger={
											<Button
												type='submit'
												className='w-full bg-[#f6a224] hover:bg-[#e6951d] text-white font-bold py-3 shadow-md hover:shadow-lg transition-all'
											>
												Bog&apos;lanish
											</Button>
										}
									/>
								</motion.div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
