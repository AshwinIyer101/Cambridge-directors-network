import { NextPage } from 'next'
import Head from 'next/head'
import { NavigationMenuDemo } from '@/components/navigation-menu-demo'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Cambridge Directors Network</title>
        <meta name="description" content="Explore dynamic cluster maps of directors in companies within the Cambridge cluster." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Cambridge Directors Network</h1>
          <NavigationMenuDemo />
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg h-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to the Cambridge Directors Network</h2>
              <p className="text-lg text-gray-600 mb-4">
                Linked above are a series of cluster mappings of directors in the Cambridge cluster of companies. The companies are split into Bio-tech and Hi-tech clusters for ease of analysis, each node represents a person and each connection represents a company they sit on the board of together.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                The graph allows for a visualisation of the people in the cluster and their connections. The individuals are colour-coded by the amount of companies they sit on the boards of according to the legend on the left. The nodes can also be clicked and moved to highlight connections and the names of the individuals.
              </p>
              <p className="text-lg text-gray-600">
                Each sector has a cluster-overview that contains every company but only individuals sitting on two or more boards. These are further broken down into sub-clusters and offshoots from the main cluster where every individual in that cluster of companies is graphed. Finally, the key individuals cluster graphs the 20-25 most highly connected people in the sector and the connections between them. All data is up to date as of 02/08/24.
              </p>
              <p className="text-lg text-gray-600">
                Use the dropdown menus on the top right to navigate to the different clusters.
              </p>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  )
}

export default Home
