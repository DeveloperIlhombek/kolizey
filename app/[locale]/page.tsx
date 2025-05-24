'use client'

//import ExitIntentPopup from '@/components/shared/exitIntentPopup'
import { About } from './_components/about'
import { ContactSection } from './_components/contacts'
import Footer from './_components/footer'
import Hero from './_components/home'
import Navbar from './_components/navbar'
import { Products } from './_components/products'
import { Service } from './_components/service'

function Page() {
	return (
		<div className='w-full p-0 m-0 mx-auto'>
			<div className='fixed top-0 left-0 w-full z-10'>
				<Navbar />
			</div>
			{/* <ExitIntentPopup /> */}
			<Hero />
			<About />
			<hr />
			<Service />
			<Products />
			<ContactSection />
			<Footer />
		</div>
	)
}

export default Page
