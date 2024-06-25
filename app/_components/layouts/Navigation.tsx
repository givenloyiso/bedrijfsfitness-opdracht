import Link from 'next/link';

// The navigation links
const links = [
	{ id: 1, label: 'Sport Venues', href: '/', active: true },
	{ id: 2, label: 'About us', href: '/about-us', active: false },
	{ id: 3, label: 'Sign up', href: '/sign-up', active: false },
];

// The Navigation component
const Navigation = () => {
	return (
		<ul className='flex items-center gap-6'>
			{links?.map((link) => (
				<li
					key={link.id}
					className='font-bold flex flex-col items-center group h-8'>
					<Link href={link.href}>{link.label}</Link>
					<span className='w-8 h-1 bg-primary hidden group-hover:block' />
				</li>
			))}
		</ul>
	);
};

export default Navigation;
