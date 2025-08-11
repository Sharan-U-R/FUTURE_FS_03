import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'TV & Home - Apple',
  description: 'Explore Apple TV 4K, HomePod, and accessories for your home entertainment.',
}

export default function TVPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-16 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-semibold text-black mb-6">
            TV & Home
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Entertainment and smart home products from Apple.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-semibold mb-4">Apple TV 4K</h2>
              <p className="text-xl text-gray-300 mb-6">The Apple experience you love. Now on the big screen.</p>
              <button className="bg-apple-blue hover:bg-blue-600 px-6 py-3 rounded-full font-medium transition-colors">
                Learn more
              </button>
            </div>
            
            <div className="bg-apple-lightgray rounded-3xl p-8">
              <h2 className="text-3xl font-semibold mb-4 text-black">HomePod</h2>
              <p className="text-xl text-gray-600 mb-6">Immersive, high-fidelity audio. Intelligent assistant. Smart home hub.</p>
              <button className="bg-apple-blue hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}