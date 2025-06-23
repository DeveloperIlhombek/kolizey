'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AnimatePresence, motion } from 'framer-motion'
import { XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ExitIntentPopup() {
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		// Popup oldin ko'rsatilganmi, tekshirish
		const hasSeenPopup = localStorage.getItem('exitPopupShown')
		if (hasSeenPopup === 'true') {
			return
		}

		// Foydalanuvchi sahifadan chiqmoqchi bo'lganida
		const handleMouseLeave = (e: MouseEvent) => {
			if (e.clientY <= 10 && !showModal) {
				setShowModal(true)
			}
		}

		// 2 soniya kechikish bilan hodisani qo'shish
		const timer = setTimeout(() => {
			document.addEventListener('mouseleave', handleMouseLeave)
		}, 2000)

		// Tozalash funksiyasi
		return () => {
			clearTimeout(timer)
			document.removeEventListener('mouseleave', handleMouseLeave)
		}
	}, [showModal]) // showModal o'zgarishini kuzatish

	const closePopup = () => {
		setShowModal(false)
		localStorage.setItem('exitPopupShown', 'true') // Popup ko'rsatildi deb belgilash
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			message: formData.get('message'),
		}

		// Ma'lumotlarni serverga yuborish
		console.log("Yuborilgan ma'lumotlar:", data)
		alert("Rahmat! Ma'lumot yuborildi.")
		closePopup()
	}

	return (
		<AnimatePresence>
			{showModal && (
				<motion.div
					className='fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					<motion.div
						className='bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 relative'
						initial={{ scale: 0.8, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.8, opacity: 0, y: 20 }}
						transition={{ duration: 0.3, ease: 'backOut' }}
					>
						<Button
							variant='ghost'
							size='icon'
							className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
							onClick={closePopup}
						>
							<XIcon className='h-5 w-5' />
						</Button>

						<div className='text-center mb-6'>
							<h2 className='text-2xl font-bold mb-2 text-gray-900'>
								Sahifani tark etmoqchimisiz?
							</h2>
							<p className='text-gray-600'>
								Iltimos, biz bilan aloqada qoling. Ma&apos;lumotlaringizni
								qoldiring va biz sizga eng yaxshi takliflarimizni yuboramiz.
							</p>
						</div>

						<form onSubmit={handleSubmit} className='space-y-4'>
							<div>
								<Input
									type='text'
									name='name'
									placeholder='Ismingiz'
									required
									className='w-full'
								/>
							</div>
							<div>
								<Input
									type='email'
									name='email'
									placeholder='Email manzilingiz'
									required
									className='w-full'
								/>
							</div>
							<div>
								<Textarea
									name='message'
									placeholder='Xabaringiz (ixtiyoriy)'
									rows={3}
									className='w-full resize-none'
								/>
							</div>
							<div className='flex gap-3 pt-4'>
								<Button
									type='button'
									variant='outline'
									onClick={closePopup}
									className='flex-1'
								>
									Bekor qilish
								</Button>
								<Button
									type='submit'
									className='flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold'
								>
									Yuborish
								</Button>
							</div>
						</form>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
