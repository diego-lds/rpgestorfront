'use client';

import { useSidebar } from '@/store';
import Image from 'next/image';
import React from 'react';

const SidebarLogo = ({ hovered }: { hovered?: boolean }) => {
	const { sidebarType, setCollapsed, collapsed } = useSidebar();
	return (
		<div className='px-4 py-4 '>
			<div className=' flex items-center'>
				<div className='flex flex-1 items-center gap-x-3  '>
					<Image
						src='/brand.png'
						alt='RPGestor'
						width={30}
						height={30}
						className='h-auto w-auto'
					/>
					{(!collapsed || hovered) && (
						<div className='flex-1  text-xl text-[#092b2a]  font-semibold'>
							RPGestor
						</div>
					)}
				</div>
				{sidebarType === 'classic' && (!collapsed || hovered) && (
					<div className='flex-none lg:block hidden'>
						<div
							onClick={() => setCollapsed(!collapsed)}
							className={`h-4 w-4 border-[1.5px] border-default-900 dark:border-default-200 rounded-full transition-all duration-150
          ${
						collapsed
							? ''
							: 'ring-2 ring-inset ring-offset-4 ring-default-900  bg-default-900  dark:ring-offset-default-300'
					}
          `}
						></div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SidebarLogo;
