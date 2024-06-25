'use client';

import { filterCityAtom, filterTypeAtom } from '@/app/_store/filter';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

const Filters = () => {
	// State to store unique cities and types
	const [cities, setCities] = useState<string[]>([]);
	const [types, setTypes] = useState<string[]>([]);

	// State to store expanded state of icon sidebar
	const [filterCity, setFilterCity] = useAtom(filterCityAtom);
	const [filterType, setFilterType] = useAtom(filterTypeAtom);

	// Temporary mock API to fetch data
	// This will be replaced with actual API call TRPC query
	useEffect(() => {
		fetch('https://6666bf60a2f8516ff7a4b553.mockapi.io/api/v1/sportvenues')
			.then((response) => response.json())
			.then((data) => {
				const uniqueCities = [
					...new Set(data.map((item: { city: string }) => item.city)),
				];
				const uniqueTypes = [
					...new Set(
						data.map(
							(item: { tags: { label: string }[] }) =>
								item.tags[0]?.label
						)
					),
				];
				setCities(uniqueCities as string[]);
				setTypes(uniqueTypes as string[]);
			});
	}, []);

	return (
		<div className='flex justify-between gap-4 max-w-md p-4'>
			<div className='relative flex-1'>
				<select
					value={filterCity}
					onChange={(e) => setFilterCity(e.target.value)}
					className='block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
					<option value='' disabled selected>
						Filter on city
					</option>
					<option value=''>All</option>
					{cities.map((city, index) => (
						<option
							key={index}
							value={city}
							className='border-b border-primary'>
							{city}
						</option>
					))}
				</select>

				{filterCity ? (
					<button
						onClick={() => {
							setFilterCity('');
						}}
						className='absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
						<svg
							className='fill-current h-4 w-4'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'>
							<path
								fillRule='evenodd'
								d='M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm5 13.586L13.586 15 10 11.414 6.414 15 5 13.586 8.586 10 5 6.414 6.414 5 10 8.586 13.586 5 15 6.414 11.414 10 15 13.586 13.586 10z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				) : (
					<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
						<svg
							className='fill-current h-4 w-4'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'>
							<path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
						</svg>
					</div>
				)}
			</div>

			<div className='relative flex-1'>
				<select
					onChange={(e) => setFilterType(e.target.value)}
					value={filterType}
					className='block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
					<option value='' disabled selected>
						Filter on type
					</option>
					<option value=''>All</option>
					{types.map((type, index) => (
						<option key={index} value={type}>
							{type}
						</option>
					))}
				</select>

				{filterType ? (
					<button
						onClick={() => {
							setFilterType('');
						}}
						className='absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
						<svg
							className='fill-current h-4 w-4'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'>
							<path
								fillRule='evenodd'
								d='M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm5 13.586L13.586 15 10 11.414 6.414 15 5 13.586 8.586 10 5 6.414 6.414 5 10 8.586 13.586 5 15 6.414 11.414 10 15 13.586 13.586 10z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				) : (
					<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
						<svg
							className='fill-current h-4 w-4'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'>
							<path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
						</svg>
					</div>
				)}
			</div>
		</div>
	);
};

export default Filters;
