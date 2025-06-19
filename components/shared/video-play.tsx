'use client'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { useRef, useState } from 'react'

function VideoPlay({ trigger }: { trigger: React.ReactNode }) {
	const [open, setOpen] = useState(false)
	const triggerRef = useRef<HTMLButtonElement>(null)

	return (
		<div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild ref={triggerRef}>
					{trigger}
				</DialogTrigger>
				<DialogContent className='sm:max-w-[720px]'>
					<DialogHeader>
						<DialogTitle>YouTube Video</DialogTitle>
					</DialogHeader>
					<div className='aspect-video'>
						<iframe
							width='100%'
							height='100%'
							src='https://www.youtube.com/embed/baaMhmISp44?si=JY3e9JW0MbX77Gwx'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
							loading='lazy'
						/>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default VideoPlay
