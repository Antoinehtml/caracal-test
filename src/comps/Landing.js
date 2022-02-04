import Container from '_comps/Layout/Container';
import Col from '_comps/Layout/Col'

import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react";

import NextLink from 'next/link'
import Image from 'next/image'

import theme from '_comps/Theme';

const Landing = () => {
    const customColors = theme.colors.brand
    const customFontSizes = theme.fonts.size
    
    return (
        <Container backgroundColor={customColors.primary50}>
            <Col colStart={[2, null, 3, null, null]} colEnd={[26, null, 25, null, null]} mt={16} mb={[16, null, 24 ,null , null]}>
                <Flex position="relative" direction={["column", null, "row", null, null]} justify="flex-start" minHeight="640px">
                    <Flex direction="column" zIndex="1" w={["100%", null, null, "800px", null]}>
                        <Heading 
                            as="h1" 
                            color={customColors.primary900} 
                            fontSize={[customFontSizes.xl, null, customFontSizes.title, null, null]} 
                            lineHeight={["44px", null, "72px", null, null]} 
                            mb={[4, 4, 4, 6, 6]}
                            mt={[0, null, 32, null, null]}
                            fontWeight="semibold"
                            w={["90%", null, null, "800px", null]}
                        >
                            Customer service software for customer-first teams
                        </Heading>
                        <Text mb={[8, 8, 12, 12, 12]} fontSize={customFontSizes.lg} fontWeight="normal" color={customColors.primary700} maxWidth="530px">
                            The best customer service software for customer-first teams. 
                            Industry-leading email and live chat support.
                        </Text>
                        <Flex direction={["column", null, "row", null, null]} mb={2}>
                            <Input 
                                placeholder='Enter your email'
                                width={["100%", null, "360px", null, null]}
                                height="48px"
                                backgroundColor="white"
                                color={customColors.gray500}
                                fontSize={customFontSizes.sm}
                                borderRadius="8px"
                                mr={0, 0, 4, 4, 4}
                            />
                            <Flex>
                                <Text 
                                    display={["flex", null, "none", null, null]}
                                    fontSize={customFontSizes.smaller} 
                                    color={customColors.primary500} 
                                    mt={[2, 2, 0, 0, 0]}
                                >
                                    We care about your data in our&nbsp; 
                                </Text>
                                <NextLink href="/" passHref>
                                    <Text
                                        display={["flex", null, "none", null, null]}
                                        fontSize={customFontSizes.smaller} 
                                        color={customColors.primary500} 
                                        mt={[2, 2, 0, 0, 0]}
                                        textDecoration="underline"
                                    >
                                        privacy policy
                                    </Text>
                                </NextLink>
                            </Flex>
                            <Button
                                width={["100%", null, "128px", null, null]}
                                height="48px"
                                borderRadius="8px"
                                backgroundColor={customColors.primary600}
                                color="white"
                                fontSize={customFontSizes.sm}
                                mt={[4, null, 0, null, null]}
                                mb={[16, null, 0, null, null]}
                            >
                                Get Started
                            </Button>
                        </Flex>
                        <Flex>
                            <Text 
                                display={["none", null, "flex", null, null]}
                                fontSize={customFontSizes.smaller} 
                                color={customColors.primary500} 
                                mt={[2, 2, 0, 0, 0]}
                            >
                                We care about your data in our&nbsp;
                            </Text>
                            <NextLink href="/" passHref>
                                <Text
                                    display={["none", null, "flex", null, null]}
                                    fontSize={customFontSizes.smaller} 
                                    color={customColors.primary500} 
                                    mt={[2, 2, 0, 0, 0]}
                                    textDecoration="underline"
                                >
                                    privacy policy
                                </Text>
                            </NextLink>
                        </Flex>
                    </Flex>
                    <Flex 
                        display={["none", null, "flex", null, null]}
                        position="absolute"
                        top="0" 
                        right="0"
                        zIndex="0"
                    >
                        <Image 
                            src="/landing-image.jpeg"
                            alt="image homepage"
                            width="560px"
                            height="640px"
                        />
                    </Flex>
                    <Flex 
                        display={["flex", null, "none", null, null]}
                        position="relative"
                    >
                        <Image 
                            src="/landing-image-mobile.jpeg"
                            alt="image homepage"
                            width="343px"
                            height="240px"
                        />
                    </Flex>
                    <Flex display={["none", null, "flex", null, null]} position="absolute" right="394.27px" bottom="89.27px">
                        <Image 
                            src="/landing-arrow.svg"
                            alt="arrow homepage"
                            width="332.37px"
                            height="99.38px"
                        />
                    </Flex>
                </Flex>
            </Col>
        </Container>
    )
};

export default Landing;
