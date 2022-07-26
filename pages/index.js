
import Header from "../components/Header"
import Layout from "../components/Layout"
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import Projects from '../components/Projects'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <Layout pageTitle="Oliver Armstrong Dev">
      <Hero />
      <About />
      <Projects />
    </Layout>
  )
}
