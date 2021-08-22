# Developer Onboarding

Welcome to **Project Lumiere!** 🎉

Our website, [projectlumiere.org](https://www.projectlumiere.org), is created with [Next.js](https://nextjs.org), a framework that builds on top of [React.js](https://reactjs.org). React is in turn built on top of JavaScript. It is styled with [TailwindCSS](https://tailwindcss.com), the utility-first CSS framworks. We are deployed 🚀 on [Vercel](https://vercel.com).

Due to a cutting-edge stack, contributors must be, at the very minimum, proficient in the following technologies:

1. JavaScript (React.js and JSX knowledge helpful)
2. Semantic HTML
3. CSS
4. Git and GitHub

## VS Code Setup

Please install [VS Code](https://code.visualstudio.com). Then install these extensions:

1. [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
2. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
3. [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
4. [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
5. [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
6. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
7. [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

These extensions provide the syntax highlighting, autocompletion, code formatting, and code sharing capabilities necessary for our workflow.

### VS Code Settings

Open `settings.json` and add the following lines to it:

```json
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "editor.wordWrap": "on",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true
}
```

These options make sure that codebase-wide conventions are followed (e.g. single quotes over double quotes). They also enable [Emmet](https://emmet.io) for React JSX, which results in better developer productivity.

## Node.js and NPM

Now onto the 🥳 next step! Please download the LTS version of [Node.js](https://nodejs.org). [NPM](https://www.npmjs.com), a package manager, comes bundled in with your Node.js installation.

After your installation is complete, please open Terminal (Mac/Linux) or Command Prompt (Windows 😭) and run the following 2 commands:

```bash
node -v
npm -v
```

> Let us know if you encountered any problems so far!

## Git

You will need a working [Git](https://git-scm.com) installation on your machine. After installing, run the following command to make sure Git is properly installed.

```bash
git --version
```

# Making your first contribution

You are now ready to `git clone` the repo code and start making commits of your own! 🆒

## Clone code from GitHub repo to your machine

In the Terminal or Command Prompt, `cd` to a directory you'd like the code to live on and run the following:

```bash
git clone https://github.com/AnthonyKuang/ProjectLumiere.git
```

After installation is complete, `cd` to `./ProjectLumiere` and then run the following:

```bash
npm install
```

This will install all the NPM packages that are listed as dependencies, as defined in `ProjectLumiere/package.json`.

## VS Code and Development Server

Next, open the ProjectLumiere folder in VS Code. Open the VS Code integrated terminal with `ctrl` + `~` and run the following to spin up the local [Next.js development server]():

```bash
npm run dev
```

In your browser, open http://localhost:3000 to view the application.

### Making Changes

The Next.js development server comes with live reloading, which means that your changes are live. Try editing the content in `/pages/index.js`. When you press `ctrl` + `s` to save, your change will immediately be reflected.

## Pushing your changes onto GitHub

Please checkout a new GitHub branch to commit your changes to. Run the command, replacing with your choice of a branch name:

```bash
git checkout -b ＜new branch name＞
```

Then, run the following commands to commit and push your code.

```base
git add .
git commit -m "<your commit message here>"
git push origin <new branch name>
```

That's it! Your code will now be pushed to a new branch, and upon my review, your branch will be merged into the production `main` branch. Your changes will then reflect on the website deployed on https://www.projectlumiere.org! 🚀

# Explanation of the code

Tips and resources for common questions about the codebase!

## File structure

- `/components` contains custom components that are used throughout the website.
- `/lib` contains any code related to third-party libraries, in addition to any utility functions.
- `/pages` is a Next.js-specific directory. Paths of our website are defined here. See https://nextjs.org/docs/basic-features/pages.
- `/public` is a Next.js-specific directory. It contains static resources, such as images. See https://nextjs.org/docs/basic-features/static-file-serving.
- `/styles` contains the CSS used to style our application. We use TailwindCSS, which is exported in `/styles/global.css`.

> There are comments on many files that describe the use case with links to resources!

## Next.js

Because of Next.js and their Webpack config, there are some optimizations and *magic* 🧙 happening behind the scenes that greatly benefit the developer experience, but can be confusing at the start.

- HTML `<image>` tags are replaced by the `<Image />` component imported from [`next/image`](https://nextjs.org/docs/basic-features/image-optimization). This component is heavily optimized and reduces load time.
- HTML `<a>` tags are replaced by the `<Link />` component imported from [`next/link`](https://nextjs.org/docs/api-reference/next/link). This component allows other pages to be prerendered, resulting in a faster website.
- Page paths can be defined in the `/pages` directory. Note that there are a variety of *special* pages, namely `pages/_app.js`, `pages/_document.js`, `pages/404.js`, and `pages/500.js`.
- Data fetching and pre-rendering are huge topics in Next.js, but are complicated without a solid background in React. If you are interested, however, please read https://nextjs.org/docs/basic-features/data-fetching.
  - `getStaticProps`, `getStaticPaths`, `getServerSideProps`, Static Site Generation (SSG), Server Side Rendering (SSR), Incremental Static Regeneration (ISR) are all covered here

## TailwindCSS

Utility CSS classes such as px-4 and mr-12 that allow you to style JSX without ever touching a CSS file. The code written can look a little messy, but is super easy to maintain because the JSX and CSS are all in the same place! The aim of using TailwindCSS is to keep the learning curve low from a vanilla CSS background while having an incredible developer experience.

TailwindCSS + Next.js produces files like these:

```jsx
export default function Home() {
  return (
    <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
      <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white hover:text-purple-400'>This is an H1!</h1>
    </div>
  )
}
```

> Note the use of className in JSX to pass in TailwindCSS classes

TailwindCSS includes classes for CSS Flexbox, CSS Grid, responsive breakpoints, dark mode variants, event variants, z-index, and many more use cases. Please refer to the [official documentation](https://tailwindcss.com) to learn more!

# Learning

We highly recommend a background in HTML, CSS, and JavaScript. The framework we use, Next.js, is full-featured and complex - it powers industry-leading companies such as TikTok, Twitch, AT&T, and many [others](https://nextjs.org/showcase).

## Resources to level up as a developer! 🦸

Official documentation is usually the best and most comprehensive resource. We recommend these resources if you need support in a specific area:

- Roadmap for learning resources: [roadmap.sh](https://roadmap.sh)
- HTML: [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- CSS: [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- JavaScript: [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- React: [FreeCodeCamp Crash Course](https://www.youtube.com/watch?v=4UZrsTqkcW4)
- React Hooks: [Ben Awad](https://www.youtube.com/watch?v=f687hBjwFcM)
- Next.js: [Next.js Learn Course](https://nextjs.org/learn)
- TailwindCSS: [TailwindCSS Documentation](https://tailwindcss.com)

> Some of the best web development YouTube channels that I've come across are [Ben Awad](https://www.youtube.com/user/99baddawg), [Lee Robinson](https://www.youtube.com/user/MaStaleee), and [Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)
