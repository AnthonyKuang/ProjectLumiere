# Developer Onboarding

Welcome to **Project Lumiere!** 🎉

Our website, [projectlumiere.org](https://www.projectlumiere.org), is created with [Next.js](https://nextjs.org), a framework that builds on top of [React.js](https://reactjs.org). React is in turn built on top of JavaScript. It is styled with [TailwindCSS](https://tailwindcss.com), the utility-first CSS framworks. We are deployed 🚀 on [Vercel](https://vercel.com).

## Prerequisites for Developers

Due to a cutting-edge stack, contributors must be, at the very minimum, proficient in the following technologies:

1. JavaScript (React.js knowledge preferred)
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

These extensions provide the syntax highlighting, code suggestions, language recognition, code formatting, and code sharing necessary for our workflow.

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

### Github

At this point, you will have been added as a contributor to this repo.

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

Next, open the ProjectLumiere folder in VS Code. Open the VS Code integrated terminal with `ctrl + ~` and run the following to spin up the local [Next.js development server]():

```bash
npm run dev
```

On your browser, open http://localhost:3000 to view the application.
