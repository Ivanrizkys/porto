import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import Portofolio from '@/components/Portofolio'
import Skills from '@/components/Skills'
import { getUser } from '@/service/index'

export default async function Home() {
  const data = await getUser()

  return (
    <main>
      <Navbar />
      <Banner name={data.name} />
      <Skills skils={data.skill} />
      <Portofolio projects={data.portofolio} />
    </main>
  )
}
