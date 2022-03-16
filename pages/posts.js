import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import placeholder from '../public/images/placeholder.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="Soon 0" thumbnail={placeholder} href="/" />
          <GridItem title="Soon 1" thumbnail={placeholder} href="/" />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="Soon 2" thumbnail={placeholder} href="/" />
          <GridItem title="Soon 3" thumbnail={placeholder} href="/" />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="Soon 4" thumbnail={placeholder} href="/" />
          <GridItem title="Soon 5" thumbnail={placeholder} href="/" />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
