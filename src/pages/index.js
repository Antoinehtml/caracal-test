import { Heading, Image } from '@chakra-ui/react';

import Navbar from '_comps/Navbar';
import Landing from '_comps/Landing';
import Features from '_comps/Features';

const Home = ({post}) => (
	<>
			<Navbar />
			<Landing />
			<Features />
	</>
);

export default Home;

export async function getStaticProps() {
	// ? fetch data from process.env.NEXT_PUBLIC_WORDPRESS_URL and pass the content to the page via props
	
	const post = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_URL, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	}).then(response => response.json())
	  
	console.log(post)

	return {
		props: {
			post
		},
	};
}
