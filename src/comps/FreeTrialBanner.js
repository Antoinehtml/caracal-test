import Col from '_comps/Layout/Col'

import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import Image from 'next/image'

import theme from '_comps/Theme';

const FreeTrialBanner = () => {
    const customColors = theme.colors.brand
    const customFontSizes = theme.fonts.size

    return (
        <Col gridRow={[8, null, 5, null, null]} colStart={[2, null, 3, null, null]} colEnd={[26, null, 25, null, null]} mb={[10, null, 0, null, null]}>
            <Flex 
                direction={["column", null, "row", null, null]}
                justify="space-between" 
                align="flex-start"
                backgroundColor={customColors.primary800}
                borderRadius="16px"
                p={["40px 24px", null, 16, null, null]}
            >
                <Flex direction="column" mb={[8, null, 0, null, null]}>
                    <Flex align="center">
                        <Heading
                            as="h1"
                            fontWeight="semibold"
                            fontSize={customFontSizes.l}
                            color={"white"}
                            mb={4}
                        >
                            Start your&nbsp;
                        </Heading>
                        <Heading
                            display={["none", null, "flex", null, null]}
                            as="h1"
                            fontWeight="semibold"
                            fontSize={customFontSizes.l}
                            color={"white"}
                            mb={4}
                        >
                            30-day&nbsp;
                        </Heading>
                        <Heading
                            as="h1"
                            fontWeight="semibold"
                            fontSize={customFontSizes.l}
                            color={"white"}
                            mb={4}
                        >
                           free trial
                        </Heading>
                    </Flex>
                    <Text
                        fontWeight="normal"
                        fontSize={[customFontSizes.md, null, customFontSizes.lg, null, null]}
                        color={customColors.primary200}
                    >
                        Get up and running in less than 5 minutes.
                    </Text>
                </Flex>
                <Flex 
                    direction={["column-reverse", null, "row", null, null]}
                    justify={["center", null, "flex-end", null, null]}
                    align="center"
                    w={["100%", null, "50%", null, null]}
                >
                    <Button
                        width={["100%", null, "128px", null, null]}
                        height="48px"
                        borderRadius="8px"
                        color={customColors.gray700}
                        fontSize={customFontSizes.sm}
                        mr={[0, null, 3, null, null]}
                    >
                        Learn More
                    </Button>
                    <Button
                        width={["100%", null, "128px", null, null]}
                        height="48px"
                        borderRadius="8px"
                        backgroundColor={customColors.primary600}
                        color="white"
                        fontSize={customFontSizes.sm}
                        mb={[3, null, 0, null, null]}
                    >
                        Get started
                    </Button>
                </Flex>
            </Flex> 
        </Col>
    )
};

export default FreeTrialBanner;
