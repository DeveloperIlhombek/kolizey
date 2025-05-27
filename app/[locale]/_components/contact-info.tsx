import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import Link from 'next/link'
import { FaPhoneAlt, FaTelegramPlane } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
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
		<div className='px-2 md:px-8 lg:px-20 w-full h-[48px] bg-[#1C2752] flex items-center justify-between overflow-hidden whitespace-nowrap'>
			<div className='text-white flex items-center gap-4 font-bold text-xs sm:text-sm md:text-base'>
				<p className='flex items-center gap-1'>
					<FaPhoneAlt className='w-3 h-3 md:w-4 md:h-4' />
					<span className='font-roboto'> Phone: +998 77 555 55 55</span>
				</p>
				<p className='flex items-center gap-1'>
					<Instagram className='w-3 h-3 md:w-4 md:h-4' />
					<span>kolizey instagram</span>
				</p>
			</div>
			<div className='flex items-center gap-2'>
				{socialLinks.map(link => (
					<motion.div
						key={link.id}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.95 }}
						transition={{ duration: 0.2 }}
					>
						<Link
							href={link.url}
							className={cn('text-white w-5 h-5')}
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
