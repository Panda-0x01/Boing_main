import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Features from '../components/Features'
import Documentation from '../components/Documentation'
import GitHubSection from '../components/GitHubSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="dark">
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <main className="flex-1 lg:ml-72 min-w-0 relative">
          <Header />
          <Features />
          <Documentation />
          <GitHubSection />
          <Footer />
        </main>
      </div>
    </div>
  )
}