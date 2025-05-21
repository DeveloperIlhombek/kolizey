'use client'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { Building2, Clock, Loader2, Mail, Phone } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

async function sendMessage(values: {
	username: string
	phone: string
	email: string
	message: string
}) {
	const telegrambotid = process.env.NEXT_PUBLIC_TELEGRAM_BOT_API
	const telegramchatid = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

	if (!telegrambotid || !telegramchatid) {
		throw new Error('Server sozlamalarida xatolik')
	}

	const response = await fetch(
		`https://api.telegram.org/bot${telegrambotid}/sendMessage`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: telegramchatid,
				text: `Yangi xabar:\nIsm: ${values.username}\nTel: ${values.phone}\nEmail: ${values.email}\nXabar: ${values.message}`,
			}),
		}
	)

	if (!response.ok) {
		throw new Error('Xabar yuborishda xatolik')
	}

	return { message: 'Xabar yuborildi' }
}

export const ContactSection = () => {
	const [isLoading, setIsLoading] = useState(false)

	const formSchema = z.object({
		username: z
			.string()
			.min(2, { message: "Ism kamida 2 ta belgidan iborat bo'lishi kerak" }),
		phone: z
			.string()
			.min(9, { message: "Telefon raqami noto'g'ri kiritilgan" })
			.regex(/^\+?[1-9]\d{1,14}$/, {
				message: "Telefon raqami faqat raqamlardan iborat bo'lishi kerak",
			}),
		email: z.string().email({ message: "Noto'g'ri email formati" }),
		message: z
			.string()
			.min(3, { message: "Xabar kamida 3 ta belgidan iborat bo'lishi kerak" }),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			phone: '',
			email: '',
			message: '',
		},
	})

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			setIsLoading(true)
			await sendMessage(values)
			toast.success('Xabaringiz muvaffaqiyatli yuborildi!')
			form.reset()
		} catch (error) {
			toast.error(
				"Xabar yuborishda xatolik yuz berdi. Internet aloqangizni tekshiring va qayta urinib ko'ring."
			)
			console.error('Xabar yuborishda xatolik:', error)
		} finally {
			setIsLoading(false)
		}
	}
	const inputClass =
		'border-[#1C2752]/20 focus:border-[#FFB342] focus:ring-[#FFB342]'

	return (
		<section id='contact' className='container py-24 sm:py-32 '>
			<section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div>
					<div className='mb-4'>
						<h2 className='text-lg  text-primary mb-2 tracking-wider'>
							Contact
						</h2>

						<h2 className='text-3xl md:text-4xl  font-bold'>Connect With Us</h2>
					</div>
					<div className='flex flex-col items-center gap-4'></div>
					<p className='mb-8 text-muted-foreground lg:w-5/6'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						ipsam sint enim exercitationem ex autem corrupti quas tenetur
					</p>

					<div className='flex flex-col gap-4'>
						<div>
							<div className='flex gap-2 mb-1'>
								<Building2 />
								<div className='font-bold'>Find us</div>
							</div>

							<div>Samarqamd sh</div>
						</div>

						<div>
							<div className='flex gap-2 mb-1'>
								<Phone />
								<div className='font-bold'>Call us</div>
							</div>

							<div>+998 99 123 45 67</div>
						</div>

						<div>
							<div className='flex gap-2 mb-1'>
								<Mail />
								<div className='font-bold'>ilxomdevelop@gmail.com</div>
							</div>

							<div>leomirandadev@gmail.com</div>
						</div>

						<div>
							<div className='flex gap-2'>
								<Clock />
								<div className='font-bold'>Visit us</div>
							</div>

							<div>
								<div>Dushanba - Shanba</div>
								<div>8:00 - 18:00</div>
							</div>
						</div>
					</div>
				</div>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='p-6 space-y-4'
					>
						<FormField
							control={form.control}
							name='username'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-sm font-medium text-gray-700'>
										Ismingiz
									</FormLabel>
									<FormControl>
										<Input
											placeholder="To'liq ismingiz"
											className={inputClass}
											{...field}
											aria-label='Ismingizni kiriting'
										/>
									</FormControl>
									<FormMessage className='text-red-500 text-sm' />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='phone'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-sm font-medium text-gray-700'>
										Telefon raqamingiz
									</FormLabel>
									<FormControl>
										<Input
											placeholder='+998 XX XXX XX XX'
											type='tel'
											className={inputClass}
											{...field}
											aria-label='Telefon raqamingizni kiriting'
										/>
									</FormControl>
									<FormMessage className='text-red-500 text-sm' />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-sm font-medium text-gray-700'>
										Email manzilingiz
									</FormLabel>
									<FormControl>
										<Input
											placeholder='email@example.com'
											type='email'
											className={inputClass}
											{...field}
											aria-label='Email manzilingizni kiriting'
										/>
									</FormControl>
									<FormMessage className='text-red-500 text-sm' />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='message'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-sm font-medium text-gray-700'>
										Xabaringiz
									</FormLabel>
									<FormControl>
										<Textarea
											placeholder='Xabaringizni yozing...'
											rows={5}
											className={`min-h-[100px] ${inputClass}`}
											{...field}
											aria-label='Xabaringizni kiriting'
										/>
									</FormControl>
									<FormMessage className='text-red-500 text-sm' />
								</FormItem>
							)}
						/>

						<Button
							type='submit'
							disabled={isLoading}
							className='bg-[#FFB342] hover:bg-[#1C2752] text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 w-full'
							aria-label={isLoading ? 'Xabar yuborilmoqda' : 'Xabarni yuborish'}
						>
							{isLoading ? (
								<>
									<Loader2 className='mr-2 h-4 w-4 animate-spin' />
									Yuborilmoqda...
								</>
							) : (
								'Xabarni yuborish'
							)}
						</Button>
					</form>
				</Form>
			</section>
		</section>
	)
}
