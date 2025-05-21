import ContactDialog from '@/components/shared/contact-dialog'
import { LanguageSwitcher } from '@/components/shared/language-switcher'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
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
const navlinks = [
	{ id: 1, name: 'Home', url: '/' },
	{ id: 2, name: 'About', url: '#about' },
	{ id: 3, name: 'Service', url: '#service' },
	{ id: 4, name: 'Products', url: '#products' },
	{ id: 5, name: 'FAQ', url: '#faq' },
	{ id: 6, name: 'Contact', url: '#contact' },
]

function Navbar() {
	return (
		<section className='flex flex-col m-0 p-0'>
			{/* Top bar */}
			<div className='px-20 w-full h-[48px] bg-[#1C2752] flex items-center justify-between overflow-hidden'>
				<div className='text-white flex items-center justify-center gap-4 font-bold font-spaceGrotesk'>
					<p className='flex items-center justify-center gap-1'>
						<FaPhoneAlt className='w-4 h-4 inline-block' />
						<span className='font-roboto'> Phone: +998 77 123 21 15</span>
					</p>
					<p className='flex items-center justify-center gap-1'>
						<TfiEmail /> <span>Email: ilxomdeveloper@gmail.com</span>
					</p>
				</div>
				<div className='flex items-center font-bold justify-center gap-2'>
					{socialLinks.map(link => (
						<Link
							key={link.id}
							href={link.url}
							className={cn(
								'text-white size-5 mx-2 transition-all duration-200 hover:scale-145'
							)}
							aria-label={`${link.name} sahifamizga tashrif buyuring`}
							rel='noopener noreferrer'
						>
							{link.icon}
						</Link>
					))}
				</div>
			</div>
			{/* Navbar */}
			<nav className='h-[80px] w-[90%] mx-auto flex justify-around items-center bg-[#FFB342] border-b-2 border-[#f6a224] rounded-b-4xl'>
				<h1 className='text-3xl font-bold'>
					<Image
						src='/kolizeylogo.png'
						alt='kolizey'
						width={180}
						height={100}
					/>
				</h1>
				<div className='flex items-center justify-center gap-10 font-bold font-spaceGrotesk'>
					{navlinks.map(link => (
						<Link key={link.id} href={link.url} className=''>
							{link.name}
						</Link>
					))}
				</div>
				<div className='flex items-center justify-center gap-4'>
					<LanguageSwitcher />
					<ContactDialog
						trigger={
							<Button
								type='submit'
								className='bg-primary text-primary-foreground'
							>
								Bog&apos;lanish
							</Button>
						}
					/>
				</div>
			</nav>
		</section>
	)
}

export default Navbar
