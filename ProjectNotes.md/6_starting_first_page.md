# Mon 31 Aug

Today I started the Vite development server using:

```bash
npm run dev
```

Vite created a local website at:

```text
http://127.0.0.1:5173/
```

The development server allows me to preview the website while working. When I save a code change, Vite can update the page without creating a new production builf each time.

## Semantic HTML

Before replacing the Vite template, I learned about semantic HTML. Semantic elements describe the purpose of different parts of a page.

```tsx
<header>Website header</header>
<nav>Main navigation</nav>
<main>Main page content</main>
<section>A group of related content</section>
<footer>Website footer</footer>
```

Using semantic elements makes the code easier to understand and also help screen readers and search engines understand the page.

A basic React page can have this structure:

```tsx
<>
    <header>
    <nav>...<nav>
    <header>

    <main>
        <section>...</section>
    </main>

    <footer>...</footer>
</>
```

The empty `<>` and `</>` tags are a React Fragment. They allow a component to return several elements without adding an unnecessary HTML element.

## Headings

I learned that headings should follow a logical order:

```tsx
<h1>Main page title</h1>
<h2>Section title</h2>
<h3>Smaller subsection title</h3>
```

The heading level represents the structure of the content, not only the visual size of the text.

## Links and Buttons

A link moves the user to another page or location:

```tsx
<a href="#lessons">Explore lessons</a>
```

The `#lessons` value connects to an element with the matching ID:

```tsx
<section id="lessons">
    <h2>Lessons</h2>
</section>
```

A button is different because it perfroms an action:

```tsx
<button type="button">Change language</button>
```

For example, opening the lessons section should use a link, while changing between English and Indian should use a button.

## How I used AI

I used AI to start the Vite development server and check that the original template loaded correctly in a local browser.

The first attempt could not open the local port because of environment restrictions. AI identified the permisson problem, requested permisson to run the local server, and then confirmed that page displayed the Vite heading, counter and documentation links.

AI also explained semantic HTML, heading structure, page links and the difference between links and buttons.

## Next GOAL

My next step is to remove the Vite example from `App.tsx` and type a simple C-BEEMS page containing a header, navigation, main content, lessons introducton and footer.