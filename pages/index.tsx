import Analyzer from '@/components/Analyzer'
import P from '@/components/P'

export default function Home(): JSX.Element {
  return (
    <main className="flex h-screen flex-col items-center p-24 bg-gray-100 bg-center bg-cover bgnore bg-opacity-50 relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=807')" }}>
      <div className="text-7xl font-bold mb-6">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          PsychoLinguistics!
        </span>
      </div>
      <Analyzer />
    </main>
  )
}