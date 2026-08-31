import './App.css';

function App() {
  return (
    <>
    <header>
      <h1>C-BEEMS</h1>
      <nav aria-label="Main Navigation">
        <a href="#home">Home</a>
        <a href="#lessons">Lessons</a>
        <a href="#about">About</a>
      </nav>

      <button type="button">Language</button>
    </header>

    <main id="home">
      <section>
        <h2>Learn English with C-BEEMS</h2>
        <p>Simple lessons to help you practice English.</p>
        <a href="#lessons">Explore lessons</a>
      </section>

      <section id="lessons">
        <h2>Lessons</h2>
        <p>Choose a lesson and begin learning.</p>
        </section>

        <section id="about">
          <h2>About C-BEEMS</h2>
          <p>C-BEEMS supports learners with clear and accessible lessons.</p>
        </section>
    </main>

    <footer>
      <p>© 2026 C-BEEMS</p>
    </footer>
    </>
  )
}

export default App