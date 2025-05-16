import { useState } from 'react'

type FAQItem = {
	id: number
	question: string
	answer: string
}

const faqData: FAQItem[] = [
	{
		id: 1,
		question: 'What types of column molds do you offer?',
		answer:
			'We offer a comprehensive range of Roman column molds including Doric, Ionic, and Corinthian styles. Each mold is crafted with precision to ensure authentic classical architectural details.',
	},
	{
		id: 2,
		question: 'Do you provide custom column manufacturing services?',
		answer:
			'Yes, we specialize in custom column manufacturing. Our team can create columns to your exact specifications, including size, style, and decorative elements.',
	},
	{
		id: 3,
		question: 'What materials do you use for the molds?',
		answer:
			'Our molds are made from high-quality, durable materials designed for multiple uses. We use industrial-grade polymers that ensure precise detail reproduction and long-lasting performance.',
	},
	{
		id: 4,
		question: 'Do you offer installation services?',
		answer:
			'Yes, we provide professional installation services. Our experienced team ensures proper placement and secure installation of all columns.',
	},
	{
		id: 5,
		question: 'What is the typical turnaround time for custom orders?',
		answer:
			'Custom order turnaround times typically range from 2-4 weeks, depending on the complexity and quantity of the order. Well provide a specific timeline during consultation.',
	},
]

function Faq() {
	const [openItem, setOpenItem] = useState<number | null>(null)

	const toggleItem = (id: number) => {
		setOpenItem(openItem === id ? null : id)
	}

	return (
		<div className='min-h-screen bg-gray-50 py-20'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-amber-500 mb-4'>
						Frequently Asked Questions
					</h2>
					<p className='text-gray-600 max-w-2xl mx-auto'>
						Find answers to common questions about our products and services.
					</p>
				</div>

				<div className='max-w-3xl mx-auto'>
					{faqData.map(item => (
						<div
							key={item.id}
							className='mb-4 border border-gray-200 rounded-lg bg-white'
						>
							<button
								className='w-full px-6 py-4 text-left flex justify-between items-center'
								onClick={() => toggleItem(item.id)}
							>
								<span className='font-semibold text-lg'>{item.question}</span>
								<span className='text-2xl'>
									{openItem === item.id ? '−' : '+'}
								</span>
							</button>
							{openItem === item.id && (
								<div className='px-6 py-4 border-t border-gray-200'>
									<p className='text-gray-600'>{item.answer}</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Faq
