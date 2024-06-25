'use client';

import { useAtom } from 'jotai';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import GoogleMaps from '../_components/widgets/GoogleMaps';
import { filterCityAtom, filterTypeAtom } from '../_store/filter';

interface DataItem {
	tags: any;
	id: number;
	images: string;
	companyName: string;
	street: string;
	city: string;
}

export default function Home() {
	const [dataArray, setDataArray] = useState<DataItem[]>([]);
	const [layout, setLayout] = useState<'grid' | 'horizontal'>('grid');
	const [selectedData, setSelectedData] = useState<DataItem | null>(null);
	const [limit, setLimit] = useState(6);

	// State to store expanded state of icon sidebar
	const [filterCity, setFilterCity] = useAtom(filterCityAtom);
	const [filterType, setFilterType] = useAtom(filterTypeAtom);

	// Filter data based on selected city and type
	const filteredDataArray = dataArray.filter((item) => {
		if (
			(filterCity === '' || filterCity === 'All') &&
			(filterType === '' || filterType === 'All')
		)
			return true;
		if (filterCity !== '' && filterCity !== 'All' && item.city !== filterCity)
			return false;
		if (
			filterType !== '' &&
			filterType !== 'All' &&
			item.tags[0]?.label !== filterType
		)
			return false;
		return true;
	});

	// Increase limit when "See More" button is clicked
	const handleSeeMore = () => {
		setLimit((prev) => prev + 6);
	};

	// Temporary mock API to fetch data
	// This will be replaced with actual API call TRPC query
	useEffect(() => {
		fetch('https://6666bf60a2f8516ff7a4b553.mockapi.io/api/v1/sportvenues')
			.then((response) => response.json())
			.then((data) => {
				setDataArray(data);
			});
	}, []);

	return (
		<main className='flex min-h-screen justify-between p-4 gap-4'>
			<div className='space-y-4 w-2/5'>
				{/* Layout buttons to switch between grid and horizontal layout */}
				<div className='bg-gray-300 rounded-lg p-2 w-fit'>
					<button
						onClick={() => setLayout('grid')}
						className={`font-bold py-2 px-4 rounded text-xs ${
							layout === 'grid' ? 'bg-gray-100' : 'bg-gray'
						}`}>
						Grid
					</button>
					<button
						onClick={() => setLayout('horizontal')}
						className={`font-bold py-2 px-4 rounded text-xs ${
							layout === 'horizontal' ? 'bg-gray-100' : 'bg-gray'
						}`}>
						Horizontal
					</button>
				</div>

				{/* Data array to display list of items */}
				<div
					className={
						layout === 'grid'
							? 'grid grid-cols-3 gap-4'
							: 'flex flex-col gap-4 justify-center items-center'
					}>
					{filteredDataArray?.slice(0, limit)?.map((item) => (
						<div key={item.id} className='h-full flex flex-col'>
							<div className='w-full'>
								<Image
									src={item.images}
									width={400}
									height={400}
									alt={item.companyName}
								/>
								<h2 className='font-bold truncate'>
									{item.companyName}
								</h2>
								<p className='text-gray-400 truncate'>{`${item.street}, ${item.city}, `}</p>
							</div>
							<button
								className='bg-primary text-white p-2 mt-auto'
								onClick={() => setSelectedData(item)}>
								View location
							</button>
						</div>
					))}
				</div>
				<button
					onClick={handleSeeMore}
					className='bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block'>
					See More
				</button>
			</div>

			<GoogleMaps data={dataArray} />
		</main>
	);
}
