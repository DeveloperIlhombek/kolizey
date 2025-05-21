import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPhoneAlt, FaTelegramPlane } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { TfiEmail } from 'react-icons/tfi'
import { TiSocialFacebook, TiSocialYoutube } from 'react-icons/ti'

const socialLinks = [
	{
		id: 1,
		name: 'Facebook',
		icon: <TiSocialFacebook />,
		url: 'https://www.facebook.com/ilxomdeveloper',
	},
	{
		id: 2,
		name: 'Instagram',
		icon: <FaInstagram />,
		url: 'https://www.instagram.com/ilxomdeveloper/',
	},
	{
		id: 3,
		name: 'Telegram',
		icon: <FaTelegramPlane />,
		url: 'https://t.me/ilxomdeveloper',
	},
	{
		id: 4,
		name: 'Youtube',
		icon: <TiSocialYoutube />,
		url: 'https://www.youtube.com/@ilxomdeveloper',
	},
]

export function ContactInfo() {
	return (
		<div className='px-4 md:px-8 lg:px-20 w-full h-auto py-2 md:h-[48px] bg-[#1C2752] flex flex-col md:flex-row items-center justify-between overflow-hidden'>
			<div className='text-white flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 font-bold font-spaceGrotesk text-sm md:text-base'>
				<p className='flex items-center justify-center gap-1'>
					<FaPhoneAlt className='w-3 h-3 md:w-4 md:h-4 inline-block' />
					<span className='font-roboto'> Phone: +998 77 123 21 15</span>
				</p>
				<p className='flex items-center justify-center gap-1'>
					<TfiEmail className='w-3 h-3 md:w-4 md:h-4' />
					<span>Email: ilxomdeveloper@gmail.com</span>
				</p>
			</div>
			<div className='flex items-center font-bold justify-center gap-2 my-2 md:my-0'>
				{socialLinks.map(link => (
					<motion.div
						key={link.id}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.95 }}
						transition={{ duration: 0.2 }}
					>
						<Link
							href={link.url}
							className={cn(
								'text-white size-5 mx-2 transition-all duration-200'
							)}
							aria-label={`${link.name} sahifamizga tashrif buyuring`}
							rel='noopener noreferrer'
							target='_blank'
						>
							{link.icon}
						</Link>
					</motion.div>
				))}
			</div>
		</div>
	)
}
