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
                <Flex position="relative" direction={["column", null, "row", null, null]} justify="flex-start" h="640px">
                    <Flex direction="column" justify="center" zIndex="1" w={["100%", null, null, "800px", null]}>
                        <Heading 
                            as="h1" 
                            color={customColors.primary900} 
                            fontSize={[customFontSizes.xl, null, customFontSizes.title, null, null]} 
                            lineHeight={["44px", null, "72px", null, null]} mb={[4, 4, 4, 6, 6]}
                        >
                            Customer service software for customer-first teams
                        </Heading>
                        <Text mb={[8, 8, 12, 12, 12]} fontSize={customFontSizes.md} color={customColors.primary700} maxWidth="560px">
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
                                    We care about your data in our 
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
                                width="128px"
                                height="48px"
                                borderRadius="8px"
                                backgroundColor={customColors.primary600}
                                color="white"
                                fontSize={customFontSizes.sm}
                                mt={[4, null, 0, null, null]}
                                mb={[8, null, 0, null, null]}
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
                                We care about your data in our &nbsp;
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
                        position={["relative", null, "absolute", null, null]} 
                        right="0" 
                        top="0" 
                        zIndex="0"
                        width={["100%", null, "560px", null, null]}
                        height={["100%", null, "640px", null, null]}
                    >
                        <Image 
                            src="/landing-image.jpeg"
                            alt="image homepage"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                        />
                    </Flex>
                    <Flex display={["none", null, "flex", null, null]} position="absolute" right="33%" bottom="89px">
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
