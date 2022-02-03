import Container from '_comps/Layout/Container'

import Header from './Header'
import Share from "./Share"
import Deliver from './Deliver'
import Manage from './Manage'

const Features = () => {
    return (
        <Container mb={[10, null, 24, null, null]}> 
            <Header />   
            <Share />
            <Deliver />
            <Manage />
        </Container>
    )
};

export default Features;
