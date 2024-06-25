import Image from 'next/image';
import Link from 'next/link';
import Filters from './Filters';
import Navigation from './Navigation';

const Header = () => {
	const imageUrl =
		'https://s3-alpha-sig.figma.com/img/0702/bafa/e48aa2c845d01ae0a3258d80b0dcc0bd?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nQgSAE~G-WwwJMxrp1Wz-xHWKDg1~AcV-Zsn8Kq8K0ogDiL37~IsyrULOIhsyOlZqD1w61q~g6nCeFv~AE7GCRKVgRilf9oj85Lj49YTKu-qs97ZcWwSmz3MNXmNigdR4MllG5nEjuTnk-azMBTISpBeqGm0ShBQF82ChxFih-DasdLpEJNnn8M-f6KFJnFl0YiD~IOznHQRvTq0NDQ1dVenPzVLU8A5Fg8MCwevhvPQ1t1VMAAx06PmbJP16Ah0TB~CmsVWuyG4CxXtkVv-sGAjLYFAyOR6uiuyrvyOzeTQGVcGTVEZa9MhT76aVUWDbdDnqq3LSwd5PeusGFCabA__';
	return (
		<div className='flex flex-col w-full border-b'>
			<nav className='flex items-center gap-20 py-6 px-4 border-b'>
				{/* The logo */}
				<Link href='/'>
					<Image
						src={imageUrl}
						alt='logo'
						width={140}
						height={30}
						quality={100}
					/>
				</Link>

				{/* The navigation links */}
				<Navigation />
			</nav>

			{/* The filters */}
			<Filters />
		</div>
	);
};

export default Header;
