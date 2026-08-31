# Mon 31 Aug

I removed the original Vite example from `App.tsx` and created the first simple version of the C-BEEMS homepage.

The original template contained the Vite and React logos, documentation links and a counter. These were useful examples, but they were not needed for the C-BEEMS website.

I kept the CSS import, because this allows the `App` component to use styles from `App.css`

```tsx
import './App.css'
```

## Creating the page structure

I created the main structure using semantic HTML elements

```tsx
<>
    <header>...</header>
    <main>...</main>
    <footer>...</footer>
</>
```

The React Fragment allows the component to return the header, main content and footer together without adding an unnecessary wrapper element.

The header contains the website name, navigation links and a language button:

```tsx
<header>
    <h1>C-BEEMS</h1>

    <nav aria-label="Main Navigation">
        <a href="#home">Home</a>
        <a href="#lessons">Lessons</a>
        <a href="#about">About</a>
    </nav>

    <button type="button">Language</button>
</header>
```

The `aria-label` describes the purpose of the navigation for screen-reader users.

## Main content

I added three main content areas:
- A home page introduction
- A lessons introduction
- An About section

Each navigation link uses an anchor ID. For example:

```tsx
<a href="#lessons">Lessons</a>
```

This link connects to:

```tsx
<section id="lessons">
    <h2>Lessons</h2>
    <p>Choose a lesson and begin learning.</p>
</section>
```

When the link is selected, the browser moves to the element with matching ID.

## Footer

I added a simple footer at the bottom of the page:

```tsx
<footer>
    <p>© 2026 C-BEEMS</p>
</footer>
```

The footer can later contain contact information, privacy information and other useful links.

## Testing the Page

After I saved `App.tsx`, Vite automatically updated the page in the browser using Hot Module Replacement.

I checked that:
- The original Vite example was removed
- The C-BEEMS title appeared
- The navigation links moved to the correct sections
- The page contained a header, main contet and footer
- The browser and terminal did not show any errors

## How I Used AI

I used AI to inspect the original `App.tsx` file and plan a simple semantic structure for the first C-BEEMS page.

AI helped me:
- Identify which Vite template code could be removed
- Create the header, navigation, main sections and footer
- Use IDs to connect navigation links to page sections
- Understand the purpose of `aria-label`
- Check that the new React component was structure correctly
- Decide that the language button functionality should be 
    added later

## Final Summary

I replaced the Vite example with the first simple C-BEEMS homepage. The page now has meaningful content and a clear semantic structure, but it still uses the old template styles.

## Next Goal

Remove the old Vite styles from `App.css` and `index.css`, then create a simple responsive design for the C-BEEMS homepage.