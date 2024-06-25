import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './_components/layouts/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Bedrijf fitness',
	description:
		'Op zoek naar een sportlocatie? Wij hebben de beste sportlocaties voor u geselecteerd.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
