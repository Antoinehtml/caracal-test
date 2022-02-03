import Container from '_comps/Layout/Container'


import Header from './Header'
import Share from "./Share";

const Features = () => {
    return (
        <Container mb={[10, null, 24, null, null]}> 
            <Header />   
            <Share />
           
        </Container>
    )
};

export default Features;
