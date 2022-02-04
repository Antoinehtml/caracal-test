import Col from '_comps/Layout/Col'
import MotionBox from 'src/MotionBox'

import { Flex, Heading, Text, Box, UnorderedList, ListItem } from "@chakra-ui/react";
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-hook-inview'
import { useEffect } from 'react'

import Image from 'next/image'

import theme from '_comps/Theme';



const Deliver = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

    const customColors = theme.colors.brand
    const customFontSizes = theme.fonts.size

    return (
        <>      
            <Col gridRow={[4, null, 3, null, null]} colStart={[2, null, 14, null, null]} colEnd={26, null, 25} mb={[10, null, 0, null, null]}>               
                    <MotionBox 
                        display="flex"
                        flexDirection="column" 
                        justifyContent={["flex-start", null, "center", null, null ]}
                        alignItems="flex-start" 
                        h={["auto", null, "512px", null, null]}
                        maxWidth={["335px", null, "504px", null, null]}
                        initial="hidden"
                        ref={ref}
                        animate={controls}
                        variants={{
                            hidden: {
                                opacity: 0
                            },
                            visible: {
                                opacity: 1,
                                transition: {
                                    duration: 2,
                                    delay: 1
                                }
                            }
                        }}
                    >
                        <Box mb={6}>
                            <Image 
                                src="/deliver-icon.svg"
                                alt="deliver img"
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
                            Deliver instant answers
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
                        <Flex pr={[2, null, "0", null, null]} pl={[2, null, "0", null, null]}>
                            <UnorderedList margin="0">
                                <ListItem display="flex" align="center">
                                    <Box mr={3} position="relative" minWidth="28px" h="28px">

                                        <Image 
                                            src="/check-icon.svg"
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
                    </MotionBox>
            </Col>
            <Col gridRow={[5, null, 3, null, null]} colStart={[1, null, 1, null, null]} colEnd={[27, null, 13, null, null]} mb={[12, null, 24, null, null]}>
                <Flex 
                    display={["none", null, "flex", null, null]}
                    position="relative"
                    height="512px"
                >
                    <Image 
                        src="/deliver-mockup.jpeg"
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
                        src="/deliver-mockup-mobile.jpeg"
                        alt="mockup"
                        width="375px"
                        height="276px"
                    />
                </Flex>
            </Col>
        </>
    )
};

export default Deliver;
