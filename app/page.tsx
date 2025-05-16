'use client'

import About_us from './_components/about'
import Hero from './_components/home'
import Navbar from './_components/navbar'
import Products from './_components/products'
import Service from './_components/service'

function Page() {
	return (
		<div className='w-full p-0 m-0 mx-auto'>
			<div className='fixed top-0 left-0 w-full z-10'>
				<Navbar />
			</div>
			<Hero />
			<About_us />
			<Service />
			<Products />
			{/* <FAQ /> */}
			{/* <Contact /> */}
		</div>
	)
}

export default Page
