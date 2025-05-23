'use client'

import { useEffect, useState } from 'react'

export default function ExitIntentPopup() {
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		const hasSeenPopup = sessionStorage.getItem('exitPopupShown')
		if (hasSeenPopup === 'true') return

		const handleMouseLeave = (e: MouseEvent) => {
			if (e.clientY < 10) {
				setShowModal(true)
			}
		}

		document.addEventListener('mouseout', handleMouseLeave)
		return () => {
			document.removeEventListener('mouseout', handleMouseLeave)
		}
	}, [])

	const closePopup = () => {
		setShowModal(false)
		sessionStorage.setItem('exitPopupShown', 'true') // faqat bir marta
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		alert('Rahmat! Maʼlumot yuborildi.')
		closePopup()
	}

	if (!showModal) return null

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
			<div className='bg-white p-6 rounded-2xl shadow-xl w-full max-w-md'>
				<h2 className='text-xl font-bold mb-4 text-center'>
					Sahifani tark etmoqchimisiz?
				</h2>
				<p className='mb-4 text-sm text-gray-600 text-center'>
					Iltimos, biz bilan aloqada qoling. Maʼlumotlaringizni qoldiring:
				</p>
				<form onSubmit={handleSubmit} className='space-y-4'>
					<input
						type='text'
						name='name'
						placeholder='Ismingiz'
						required
						className='w-full border border-gray-300 rounded px-3 py-2'
					/>
					<input
						type='email'
						name='email'
						placeholder='Email manzilingiz'
						required
						className='w-full border border-gray-300 rounded px-3 py-2'
					/>
					<textarea
						name='message'
						placeholder='Xabaringiz'
						rows={3}
						className='w-full border border-gray-300 rounded px-3 py-2'
					/>
					<div className='flex justify-end space-x-2'>
						<button
							type='button'
							onClick={closePopup}
							className='px-4 py-2 rounded bg-gray-300 hover:bg-gray-400'
						>
							Bekor qilish
						</button>
						<button
							type='submit'
							className='px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700'
						>
							Yuborish
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
