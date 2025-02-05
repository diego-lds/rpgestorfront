'use client';

import { Bell } from '@/components/svg';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { notifications } from './notification-data';

const NotificationMessage = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
					className='relative md:h-9 md:w-9 h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-800
          data-[state=open]:bg-gray-100  dark:data-[state=open]:bg-gray-800
           hover:text-blue-500 text-gray-500 dark:text-gray-400  rounded-full'
				>
					<Bell className='h-5 w-5' />
					<Badge className='w-4 h-4 p-0 text-xs font-medium items-center justify-center absolute left-[calc(100%-18px)] bottom-[calc(100%-16px)] ring-2 ring-white'>
						3
					</Badge>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='z-[999] mx-4 lg:w-[400px] p-0'
			>
				<DropdownMenuLabel className='w-full h-full bg-primary bg-no-repeat p-4 flex items-center'>
					<span className='text-base font-semibold text-white flex-1'>
						Notificações
					</span>
					<span className='text-xs font-medium text-white flex-0 cursor-pointer hover:underline hover:decoration-gray-300'>
						Marcar todas como lidas
					</span>
				</DropdownMenuLabel>
				<div className='h-[300px] xl:h-[350px]'>
					<ScrollArea className='h-full'>
						{notifications.map((item, index) => (
							<DropdownMenuItem
								key={`notificacao-${index}`}
								className='flex gap-9 py-2 px-4 cursor-pointer dark:hover:bg-gray-700'
							>
								<div className='flex-1 flex items-center gap-2'>
									<Avatar className='h-10 w-10 rounded'>
										<AvatarImage src={item.avatar.src} />
										<AvatarFallback>NA</AvatarFallback>
									</Avatar>
									<div>
										<div className='text-sm font-medium text-gray-900 dark:text-gray-100 mb-[2px] whitespace-nowrap'>
											{item.fullName}
										</div>
										<div className='text-xs text-gray-600 dark:text-gray-400 truncate max-w-[100px] lg:max-w-[185px]'>
											{item.message}
										</div>
									</div>
								</div>
								<div
									className={cn(
										'text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap',
										{
											'text-gray-400': !item.unreadmessage,
										}
									)}
								>
									{item.date}
								</div>
								<div
									className={cn('w-2 h-2 rounded-full mr-2', {
										'bg-blue-500': !item.unreadmessage,
									})}
								></div>
							</DropdownMenuItem>
						))}
					</ScrollArea>
				</div>
				<DropdownMenuSeparator />
				<div className='m-4 mt-5'>
					<Button asChild className='w-full'>
						<Link href='/dashboard'>Ver Todas</Link>
					</Button>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default NotificationMessage;
