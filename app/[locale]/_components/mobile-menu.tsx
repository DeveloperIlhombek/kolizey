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
	{ id: 5, name: 'FAQ', url: '#faq' },
	{ id: 6, name: 'Contact', url: '#contact' },
]

export function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false)

	// Close menu when window is resized to desktop view
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setIsOpen(false)
			}
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	// Prevent scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isOpen])

	return (
		<div className='lg:hidden'>
			<Button
				variant='ghost'
				size='icon'
				onClick={() => setIsOpen(true)}
				className='text-black'
			>
				<Menu size={24} />
				<span className='sr-only'>Open menu</span>
			</Button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className='fixed inset-0 bg-black/80 z-50 flex flex-col'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className='bg-[#FFB342] p-1 flex justify-between items-center'>
							<div className='flex items-center'>
								<Image
									src='/kolizeylogo.png'
									alt='kolizey'
									width={140}
									height={80}
								/>
							</div>
							<LanguageSwitcher />
							<Button
								variant='ghost'
								size='icon'
								onClick={() => setIsOpen(false)}
								className='text-black'
							>
								<X size={24} />
								<span className='sr-only'>Close menu</span>
							</Button>
						</div>

						<motion.div
							className='flex flex-col items-start p-6 bg-white flex-1 overflow-y-auto'
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ duration: 0.4, type: 'spring', damping: 25 }}
						>
							<nav className='w-full mb-6'>
								<ul className='space-y-4'>
									{navlinks.map(link => (
										<motion.li
											key={link.id}
											whileHover={{ x: 4 }}
											transition={{ duration: 0.2 }}
										>
											<Link
												href={link.url}
												className='text-xl font-bold block py-2 border-b border-gray-200'
												onClick={() => setIsOpen(false)}
											>
												{link.name}
											</Link>
										</motion.li>
									))}
								</ul>
							</nav>

							<div className='mt-auto w-full space-y-4'>
								<LanguageSwitcher />
								<ContactDialog
									trigger={
										<Button
											type='submit'
											className='bg-primary text-primary-foreground w-full'
										>
											Bog&apos;lanish
										</Button>
									}
								/>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
