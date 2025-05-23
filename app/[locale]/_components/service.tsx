import { cn } from '@/lib/utils'
import Image from 'next/image'

export function Service() {
	return (
		<div className='relative flex flex-col h-1/2 w-full items-center justify-center bg-white dark:bg-slate-950'>
			<div
				className={cn(
					'absolute inset-0',
					'[background-size:40px_40px]',
					'[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
					'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
				)}
			/>
			{/* Radial gradient for the container to give a faded look */}
			<div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black'></div>
			<div className='relative font-bold text-3xl text-amber-500'>Service</div>
			<div className='relative flex container bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-muted-foreground sm:text-xl '>
				<p>
					Backgrounds ddd Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Consequatur enim illum quis adipisci dolorum nemo, eveniet,
					possimus magni illo repellat aut, ipsa exercitationem ea provident
					expedita dolorem labore nihil impedit ullam corrupti at quas omnis ie!
				</p>
				<Image src='/worker.png' alt='rasm' width={400} height={400} />
			</div>
		</div>
	)
}
