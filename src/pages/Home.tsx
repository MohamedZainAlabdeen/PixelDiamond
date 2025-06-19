import { Hero, LayoutBody, LayoutSidebar } from "../components"

const Home = () => {
  return (
    <>
      <Hero />
      <main className="mainContainer my-20 grid grid-cols-4 gap-4">
        {/* layout-body */}
        <section className="md:col-span-3 col-span-4">
          <LayoutBody />
        </section>
        {/* layout-sidebar */}
        <aside className="md:block hidden">
          <LayoutSidebar />
        </aside>
      </main>
    </>
  )
}

export default Home
