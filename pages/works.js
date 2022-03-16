import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import placeholder from '../public/images/placeholder.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="work1"
            title="Work 1"
            thumbnail={placeholder}
          ></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="work2"
            title="Work 2"
            thumbnail={placeholder}
          ></WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="Work 3"
            title="Work 3"
            thumbnail={placeholder}
          ></WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="work4"
            thumbnail={placeholder}
            title="Work 4"
          ></WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}></Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="Work 5"
            thumbnail={placeholder}
            title="Work 5"
          ></WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="work6"
            thumbnail={placeholder}
            title="Work 6"
          ></WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="work7"
            thumbnail={placeholder}
            title="Work 7"
          ></WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="work8"
            thumbnail={placeholder}
            title="Work 8"
          ></WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="work 9"
            thumbnail={placeholder}
            title="Work 9"
          ></WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
