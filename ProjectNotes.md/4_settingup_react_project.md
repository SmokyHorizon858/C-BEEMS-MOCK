# Sat 29 Aug
I prepared the development environment and created the initial React project.
## What I learned

### Node.js and npm
I learned that Node.js allows JavaScript-related tools to run on my computer instead of only inside a browser.
npm is the package manager included with Node.js. It can download and manage packages such as React, TypeScript and Vite.

I checked their versions using:

```bash
node --version
npm --version
```

The installed version were:

```text
Node.js: v26.0.0
npm: 11.12.1
```
### Creating the Project with Vite

I used Vite to generate the starting structure of the project:

```bash
npm create vite@lastest beems-website -- --template react-ts
```

In this command:

- `npm create vite@lastest` runs the lastest Vite project creator.
- `beems-website` is the name of the project folder.
- `--template react-ts` selects the React and TypeScript template.

Vite create the project files, but the required packages still needed to be downloaded.

### Installing Dependencies

Inside the project folder, I used:

```bash
npm install
```

This command reads `package.json` and installs the required dependencies.

After installaton, I noticed two important items:

- `node_modules` contains the downloaded packages.
- `package-lock.json` records the exact package versions.

### Testing the Project Build

I tested the initial project using:

```bash
npm run build
```

This command first checks the TypeScript code and then asks Vite to create a production build.

The build completed successfully. The generated website files were placed in the `dist` folder. This comfirmed that the starting project was working before I changed any code.

## Project Structure

I looked at some of the main files and folders:

```text
beems-website/
|-- public/
|-- src/
|   |-- assets/
|   |-- App.css
|   |-- App.tsx
|   |-- index.css
|   |__ main.tsx
|-- index.html
|-- package.json
|-- package-lock.json
|-- vite.config.ts
```

My current understanding is:

- `src` contains most of the code I will write.
- `App.tsx` contains the main React component.
- `App.css` contains styles related to the main component.
- `index.css` contains general styles for the whole website.
- `public` stores static files.
- `package.json` records the project dependencies and available npm commands.
- `vite.config.ts` contains Vite configuration.

## React Code Basics

I learned that React pages are build using components (similar to Vue). A Component is usually a function that returns JSX.

JSX looks similar to HTML, but it is written inside JavaScript or TypeScript.

Example:

```tsx
function Welcome() {
    return (
        <section className="welcome">
            <h1>Welcome to C-BEEMS</h1>
            <p>Supporting Indian immigrant parents in Australia.</p>
        </section>
    )
}

export default Welcome
```

From this example, I learned:

- `function Welcome()` creates a component called `Welcome`.
- `return` describes what the component displays.
- `<section>`, `<h1>` and `<p>` are JSX elements.
- `className` is used instead of the HTML `class` attribute.
- `export default` allows the component to be imported into another file.
- JSX elements must be correctly nested and closed.
- React component names normally begin with a capital letter


A component can be imported with:

```tsx
import Welcome from `./Welcome'
```

It can then be displayed inside another component:

```tsx
function App() {
    return (
        <main>
            <Welcome />
        </main>
    )
}
```

`<Welcome />` is an example of using a custom React component.

## How I used AI

- Chck whether Node.js and npm were installed.
- Explain the purpose of Node.js, npm, Vite and React.
- Explain each terminal command before running it.
- Create the React and TypeScript project using Vite.
- Install the package listed in `package.json`.
- Check the generated project structure.
- Run the production build and confirm that it completed successfully.
- Explain basic React concepts such as JSX, components, imports and exports.

## Final Summary
Node.js provides the local environment, npm manages packages, React is used to build the interface, and Vite helps create, run and build the project.

## Next Goal
read the existing `App.tsx` file, understand the template code, and make my first small React change.