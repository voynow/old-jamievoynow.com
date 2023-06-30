function Contact() {
    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <p>You can reach me at email@example.com</p>
        </section>
    );
}
export default Contact;
``9. **Integrate Components into App.js**: Now, import all these components into your `App.js` file and include them within the return statement to render them on the page.

```jsx
import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

function App() {
    return (
        <div className="App">
            <Header />
            <AboutMe />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
}

export default App;
