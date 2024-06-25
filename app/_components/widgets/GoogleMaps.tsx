import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const bounds = {
	ne: {
		lat: 50.01038826014866,
		lng: -118.6525866875,
	},
	sw: {
		lat: 32.698335045970396,
		lng: -92.0217273125,
	},
};

// Here is the GoogleMaps component
export default function GoogleMaps({ data }: { data: any[] }) {
	// Default props for Google Maps
	const defaultProps = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 11,
	};

	// Hier zou ik dus de bounds van de data array kunnen berekenen
	// en die als default props kunnen meegeven aan GoogleMapReact

	return (
		// Important! Always set the container height explicitly
		<div className='w-4/5'>
			<GoogleMapReact
				bootstrapURLKeys={{ key: '' }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}>
				{/* Loop through the data array and display markers */}
				{/* {data?.map((item) => (
					<AnyReactComponent
						key={item.id}
						lat={item.latitude}
						lng={item.longitude}
						text={item.companyName}
					/>
				))} */}
			</GoogleMapReact>
		</div>
	);
}
