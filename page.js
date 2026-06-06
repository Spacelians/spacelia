export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white flex flex-col items-center">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        
        <h1 className="text-6xl font-bold text-cyan-400">
          Spacelia
        </h1>

        <p className="mt-4 text-xl text-gray-300">
          A Borderless Digital Nation
        </p>

        <p className="mt-2 text-gray-500">
          Beyond Borders, Beyond Earth
        </p>

        <button className="mt-8 px-6 py-3 bg-cyan-400 text-black rounded-xl hover:bg-cyan-300 transition">
          Join Citizenship
        </button>

      </section>

      {/* PROBLEM */}
      <section className="py-20 px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-bold">The Problem</h2>
        <p className="mt-4 text-gray-400">
          Humanity has no unified digital identity, no global participation system,
          and no borderless governance structure.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="py-20 px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-cyan-400">The Solution</h2>
        <p className="mt-4 text-gray-300">
          Spacelia creates a global digital nation where anyone can become a citizen,
          vote, and participate in governance.
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 grid md:grid-cols-3 gap-6 max-w-5xl">
        
        <div className="bg-[#0B122A] p-6 rounded-xl">
          <h3 className="text-xl font-bold">Digital Citizenship</h3>
          <p className="text-gray-400 mt-2">Global identity for every human</p>
        </div>

        <div className="bg-[#0B122A] p-6 rounded-xl">
          <h3 className="text-xl font-bold">Voting System</h3>
          <p className="text-gray-400 mt-2">Transparent global decisions</p>
        </div>

        <div className="bg-[#0B122A] p-6 rounded-xl">
          <h3 className="text-xl font-bold">AI Governance</h3>
          <p className="text-gray-400 mt-2">Smart policy analysis</p>
        </div>

      </section>

      {/* JOIN */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Become a Citizen</h2>
        <p className="text-gray-400 mt-2">Join the first borderless digital nation</p>

        <button className="mt-6 px-6 py-3 bg-cyan-400 text-black rounded-xl">
          Sign Up
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-gray-600 text-sm">
        Spacelia © 2026 — A Digital Nation Project
      </footer>

    </main>
  );
}
