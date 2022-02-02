import { Heading, Image } from '@chakra-ui/react';

import Navbar from '_comps/Navbar';
import Body from '_comps/Body';

const Home = () => (
	<>
			<Navbar />
			<Body />

	</>
);

export default Home;

export async function getStaticProps() {
	// ? fetch data from process.env.NEXT_PUBLIC_WORDPRESS_URL and pass the content to the page via props

	return {
		props: {
			// ? add your fetched data here
		},
	};
}
