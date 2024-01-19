import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import Portofolio from '@/components/Portofolio'
import Skills from '@/components/Skills'
import data from '../dummy/data'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner name={data.name} />
      <Skills skils={data.skill} />
      <Portofolio projects={data.portofolio} />
    </main>
  )
}
