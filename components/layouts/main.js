import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelNameLoader from '../voxel-name-loader'

const LazyVoxelName = dynamic(() => import('../voxel-name'), {
  ssr: false,
  loading: () => <VoxelNameLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Viola's homepage" />
        <meta name="author" content="Viola Prokopchuk" />
        <meta name="author" content="Viola Prokopchuk" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta property="og:site_name" content="Viola's Voloshyn's Homepage" />
        <meta property="og:type" content="website" />
        <title>Viola Prokopchuk- Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelName />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
