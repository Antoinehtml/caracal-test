import Container from '_comps/Layout/Container';
import Col from '_comps/Layout/Col'

import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react";
import Image from 'next/image'

import theme from '_comps/Theme';

const Body = () => {
    const customColors = theme.colors.brand
    const customFontSizes = theme.fonts.size
    
    return (
        <Container backgroundColor={customColors.primary50}>
            <Col colStart={[2, 2, 3, 3, 3]} colEnd={[26, 26, 25, 25, 25]} mt={16} mb={[16, 16, 24 ,24 , 24]}>
                <Flex position="relative" direction={["column", "column", "row", "row", "row"]} justify="flex-start" h="640px">
                    <Flex direction="column" justify="center" zIndex="1" w={["100%", "100%", "100%", "800px", "800px"]}>
                        <Heading as="h1" color={customColors.primary900} fontSize={[customFontSizes.xl, customFontSizes.xl, customFontSizes.title, customFontSizes.title, customFontSizes.title]} lineHeight={["44px", "44px", "44px", "72px", "72px"]} mb={[4, 4, 4, 6, 6]}>
                            Customer service software blablabla
                        </Heading>
                        <Text mb={[8, 8, 12, 12, 12]} fontSize={customFontSizes.md} color={customColors.primary700}>
                            text
                        </Text>
                        <Flex direction={["column", "column", "row", "row", "row"]} mb={2}>
                            <Input 
                                placeholder='Enter your email'
                                width={["100%", "100%", "360px", "360px", "360px"]}
                                height="48px"
                                backgroundColor="white"
                                color={customColors.gray500}
                                fontSize={customFontSizes.sm}
                                borderRadius="8px"
                                mr={0, 0, 4, 4, 4}
                            />
                            <Text display={["flex", "flex", "none", "none", "none"]} fontSize={customFontSizes.smaller} color={customColors.primary500} mt={[2, 2, 0, 0, 0]}>
                                policy
                            </Text>
                            <Button
                                width="128px"
                                height="48px"
                                borderRadius="8px"
                                backgroundColor={customColors.primary600}
                                color="white"
                                fontSize={customFontSizes.sm}
                                mt={[4, 4, 0, 0, 0]}
                                mb={[8, 8, 0, 0, 0]}
                            >
                                Get Started
                            </Button>
                        </Flex>
                        <Text display={["none", "none", "flex", "flex", "flex"]} fontSize={customFontSizes.smaller} color={customColors.primary500}>
                            policy
                        </Text>
                    </Flex>
                    <Flex 
                        position={["relative", "relative", "absolute", "absolute", "absolute"]} 
                        right="0" 
                        top="0" 
                        zIndex="0"
                        width={["100%", "560px", "560px", "560px", "560px"]}
                        height={["100%", "640px", "640px", "640px", "640px"]}
                    >
                        <Image 
                            src="/landing-image.png"
                            alt="image homepage"
                            layout="fill"
                        />
                    </Flex>
                    <Flex display={["none", "none", "flex", "flex", "flex"]} position="absolute" right="33%" bottom="89px">
                        <Image 
                            src="/landing-arrow.png"
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

export default Body;
