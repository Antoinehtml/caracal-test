import Container from '_comps/Layout/Container';
import Col from '_comps/Layout/Col';

import { Heading, Flex, Box, Text, Button, IconButton } from '@chakra-ui/react';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

import NextLink from 'next/link'
import Image from 'next/image'


import theme from '_comps/Theme';

const Navbar = () => {
    const customColors = theme.colors.brand
    const customFontSizes = theme.fonts.size

    return (
        <Container backgroundColor={customColors.primary50}>
            <Col colStart={[2, 2, 3, 3, 3]} colEnd={[26, 26, 25, 25, 25]} >
                <Flex justify="space-between" align="center" maxHeight="100px">    
                    <Flex align="center" pt={7} pb={7}>
                        <Flex align="center" mr={10} cursor="pointer">
                            <Image 
                                src="/logo.svg"
                                alt='logo'
                                width="142px"
                                height="32px"
                                />
                        </Flex>
                        <Flex display={["none", "none", "flex", "flex", "flex"]}>
                            <Box mr={8} color={customColors.gray500}>
                                <NextLink href="/" passHref>
                                    Home
                                </NextLink>
                            </Box>
                            <Flex align="center" mr="32px" color={customColors.gray500} cursor="pointer">
                                <NextLink href="/products" passHref>
                                    <Text mr={2} fontSize={customFontSizes.sm}>
                                        Products    
                                    </Text>
                                </NextLink>
                                <Flex>   
                                    <Image 
                                        src="/icon-landing.png"
                                        alt="arrow bottom"
                                        width="10px"
                                        height="5px"
                                        />
                                </Flex>
                            </Flex>
                            <Flex align="center" mr={8} color={customColors.gray500} cursor="pointer">
                                <NextLink href="/resources" passHref>
                                    <Text mr={2} fontSize={customFontSizes.sm}>
                                        Resources    
                                    </Text>
                                </NextLink>
                                <Flex>   
                                    <Image 
                                        src="/icon-landing.png"
                                        alt="arrow bottom"
                                        width="10px"
                                        height="5px"
                                        />
                                </Flex>
                            </Flex>

                            <Box color={customColors.gray500} cursor="pointer">
                                <NextLink href="/pricing" passHref>
                                    <Text fontSize={customFontSizes.sm}>
                                        Pricing
                                    </Text>
                                </NextLink>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex display={["none", "none", "flex", "flex", "flex"]} align="center">
                        <Box mr={8} cursor="pointer">
                            <NextLink href="/login" passHref>
                                <Text color={customColors.gray500} fontSize={customFontSizes.sm}>
                                    Log in
                                </Text>
                            </NextLink>
                        </Box>
                        <Button w="94px" h="44px" borderRadius="8px" backgroundColor={customColors.primary600} color="white">
                            Sign up
                        </Button>
                    </Flex>
                    <Flex display={["flex", "flex", "none", "none", "none"]} cursor="pointer">
                        <Image 
                            src="/menu.png"
                            al="menu burger"
                            width="24px"
                            height="24px"
                        />
                    </Flex>
                </Flex>
            </Col>
        </Container>
    )
};

export default Navbar;
