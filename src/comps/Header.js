import Col from '_comps/Layout/Col'

import { Flex, Heading, Text } from "@chakra-ui/react";

import theme from '_comps/Theme';

const Header = () => {
    const customColors = theme.colors.brand
    const customFontSizes = theme.fonts.size

    return (
        <>
            <Col colStart={[2, null, 3, null, null]} colEnd={[26, null, 25, null, null]} mt={24} >
                <Flex direction="column" justify="center" align="center" mb={[12, 12, 24, 24, 24]}>
                        <Heading 
                            fontSize={[customFontSizes.smaller, null, customFontSizes.sm, null, null]} 
                            fontWeight="semibold" 
                            color={customColors.primary700} 
                            mb={3}
                            >
                            Features
                        </Heading>
                        <Heading 
                            fontSize={[customFontSizes.l, null, customFontSizes.xl, null, null]} 
                            fontWeight="semibold" 
                            mb={[4, 4, 5, 5, 5]}
                            textAlign="center"
                            >
                            Beautiful analytics to grow smarter
                        </Heading>
                        <Text 
                            fontSize={[customFontSizes.md, null, customFontSizes.lg, null, null]} 
                            fontWeight="normal" 
                            color={customColors.gray500} 
                            maxWidth="768px"
                            textAlign="center"
                            mb={[4, 4, 5, 5, 5]}
                            >
                            Powerful, self-serve product and growth analytics to help you convert, engage, 
                            and retain more users. Trusted by over 4,000 startups.
                        </Text>
                </Flex>
            </Col>
        </>
    )   
} 

export default Header;
