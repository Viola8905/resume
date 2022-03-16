import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I'm a front-end developer based in Ukraine!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Viola Prokopchuk
          </Heading>
          <p> ( Front-End Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/avatar.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>Viola is growing front-end developer </Paragraph>
       
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Uzhhorod (west of Ukraine)
        </BioSection>

        <BioSection>
          <BioYear>2020</BioYear>
          Entered the Faculty of Applied Mathematics and Cybernetics of Uzhgorod
          National University
        </BioSection>
        <BioSection>
          <BioYear>2022 ...to present</BioYear>
          Self-educating in such areas as Programming, Math, Languages.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Resume
        </Heading>
        <BioSection>
          <Paragraph>
            I am a developing Front-end Developer. At the moment, I have no
            experience in commercial development. Currently, my work consists
            entirely of learning the basic technology stack: <br />
            <strong>
              React, Redux, Typescript, Node.js, MongoDB, Express, SQL{' '}
            </strong>
            and related pet projects like: <br />
            - Post's gallery; <br />
            - Shop; <br />
            - HTML / CSS Layouts; <br />
            ...and others <br />
            All examples of my projects as time goes on will go out in my GitHub
            profile. I'm on the lookout for a company where I can develop my
            hard and soft skills through training on hands-on tasks, and
            teamwork.
          </Paragraph>
        </BioSection>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          My advantages
        </Heading>
        <BioSection>
          <Paragraph>
            My advantages over other candidates are: - Purposefulness;
            <br />
            - The amount of time I devote to learning/development;
            <br />
            - Emotional stability;
            <br />
            - Friendliness;
            <br />
            - Willingness to constantly evolve and look for better solutions in
            projects;
            <br />
            - Responsibility for deadlines;
            <br />- Sophomore of Applied Mathematics Faculty (Bachelor's
            degree);
          </Paragraph>
        </BioSection>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Volleyball, Movies , Educating , Traveling.</Paragraph>
      </Section>

      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Viola8905" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @viola8905
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href="https://www.instagram.com/_violon_chel/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @_violon_chel
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link>
              <Button variant="ghost" colorScheme="teal">
                viola89055@gmail.com
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
