import { Button } from '@/components/ui/button'

function Contacts() {
	return (
		<div className='min-h-screen bg-white py-20'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-amber-500 mb-4'>Contact Us</h2>
					<p className='text-gray-600 max-w-2xl mx-auto'>
						Get in touch with us for quotes, custom orders, or any questions
						about our products and services.
					</p>
				</div>

				<div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
					{/* Contact Form */}
					<div className='bg-gray-50 p-8 rounded-lg'>
						<h3 className='text-2xl font-semibold mb-6'>Send us a Message</h3>
						<form className='space-y-4'>
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-gray-700 mb-1'
								>
									Name
								</label>
								<input
									type='text'
									id='name'
									className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500'
								/>
							</div>
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-700 mb-1'
								>
									Email
								</label>
								<input
									type='email'
									id='email'
									className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500'
								/>
							</div>
							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-gray-700 mb-1'
								>
									Message
								</label>
								<textarea
									id='message'
									rows={4}
									className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500'
								></textarea>
							</div>
							<Button className='w-full bg-amber-500 text-white'>
								Send Message
							</Button>
						</form>
					</div>

					{/* Contact Information */}
					<div className='bg-gray-50 p-8 rounded-lg'>
						<h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
						<div className='space-y-6'>
							<div>
								<h4 className='font-semibold text-lg mb-2'>Address</h4>
								<p className='text-gray-600'>
									123 Architecture Avenue
									<br />
									Design District
									<br />
									City, State 12345
								</p>
							</div>
							<div>
								<h4 className='font-semibold text-lg mb-2'>Phone</h4>
								<p className='text-gray-600'>+1 (555) 123-4567</p>
							</div>
							<div>
								<h4 className='font-semibold text-lg mb-2'>Email</h4>
								<p className='text-gray-600'>info@romancolumns.com</p>
							</div>
							<div>
								<h4 className='font-semibold text-lg mb-2'>Business Hours</h4>
								<p className='text-gray-600'>
									Monday - Friday: 9:00 AM - 6:00 PM
									<br />
									Saturday: 10:00 AM - 4:00 PM
									<br />
									Sunday: Closed
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts
