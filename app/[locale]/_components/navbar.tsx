'use client'

import { motion } from 'framer-motion'
import { ContactInfo } from './contact-info'
import { Navigation } from './navigation'

function Navbar() {
	return (
		<motion.section
			className='flex flex-col m-0 p-0 sticky top-0 z-50'
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<ContactInfo />
			<div className='w-[90%] mx-auto'>
				<Navigation />
			</div>
		</motion.section>
	)
}

export default Navbar
