import Container from '_comps/Layout/Container';
import Col from '_comps/Layout/Col'

import { Flex, Heading, Text, Box, UnorderedList, ListItem } from "@chakra-ui/react";
import Image from 'next/image'

import theme from '_comps/Theme';

const Features = () => {
    const customColors = theme.colors.brand
    const customFontSizes = theme.fonts.size

    return (
        <Container mb={[10, null, 24, null, null]}>
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
            <Col colStart={[2, null, 3, null, null]} colEnd={[26, null, 13, null, null]}>               
                    <Flex 
                        direction="column" 
                        justify="center" 
                        align="flex-start" 
                        h={["100%", null, "512px", null, null]}
                        mb={10}
                    >
                        <Box mb={6}>
                            <Image 
                                src="/featured-icon.svg"
                                alt="message img"
                                width="48px"
                                height="48px"
                            />
                        </Box>
                        <Heading 
                            as="h1" 
                            fontSize={[customFontSizes.large ,null, customFontSizes.l, null, null]}
                            fontWeight="semibold"
                            mb={[2, null, 4, null, null]}
                        >
                            Share team inboxes
                        </Heading>
                        <Text 
                            fontSize={[customFontSizes.sm, null, customFontSizes.md, null, null]}
                            fontWeight="normal"
                            color={customColors.gray500}
                            mb={8}
                        >
                            Whether you have a team of 2 or 200, our shared team inboxes 
                            keep everyone on the same page and in the loop.
                        </Text>
                        <Flex maxWidth="335px" pr={[2, null, "0", null, null]} pl={[2, null, "0", null, null]}>
                            <UnorderedList margin="0">
                                <ListItem display="flex" align="center">
                                    <Box mr={3} position="relative" minWidth="28px" h="28px">

                                        <Image 
                                            src="/check-icon.svg"
                                            layout="fill"
                                            objectFit="cover"
                                            height="28px"
                                        />
                                    </Box>
                                    <Text 
                                        fontSize={[customFontSizes.sm, null, customFontSizes.md, null, null]}
                                        fontWeight="normal"
                                        textAlign="start"
                                        color={customColors.gray500}
                                        mb={5}  
                                    >
                                        Leverage automation to move fast
                                    </Text>
                                </ListItem>
                                <ListItem display="flex" align="center">
                                    <Box mr={3} position="relative" minWidth="28px" h="28px">
                                        <Image 
                                            src="/check-icon.svg"
                                            alt=""
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </Box>
                                    <Text 
                                        fontSize={[customFontSizes.sm, null, customFontSizes.md, null, null]}
                                        fontWeight="normal"
                                        textAlign="start"
                                        color={customColors.gray500}
                                        mb={5} 
                                    >
                                        Always give customers a human to chat to
                                    </Text>
                                </ListItem>
                                <ListItem display="flex" align="center">
                                    <Box mr={3} position="relative" minWidth="28px" h="28px">
                                        <Image 
                                            src="/check-icon.svg"
                                            alt=""
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </Box>
                                    <Text
                                        fontSize={[customFontSizes.sm, null, customFontSizes.md, null, null]}
                                        fontWeight="normal"
                                        textAlign="start"
                                        color={customColors.gray500}
                                    >
                                        Automate customer support and close leads faster
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Flex>
                    </Flex>
            </Col>
            <Col colStart={[1, null, 14, null, null]} colEnd={27} >
                <Flex 
                    display={["none", null, "flex", null, null]}
                    position="relative"
                >
                    <Image 
                        src="/mockup-wrap.jpeg"
                        alt="mockup"
                        width="768px"
                        height="512px"
                    />
                </Flex>
                <Flex 
                    display={["flex", null, "none", null, null]}
                    position="relative" 
                >
                    <Image 
                        src="/mockup-mobile.jpeg"
                        alt="mockup"
                        width="375px"
                        height="276px"
                    />
                </Flex>
            </Col>
        </Container>
    )
};

export default Features;
