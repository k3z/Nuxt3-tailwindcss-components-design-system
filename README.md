# Nuxt3 tailwindcss components design system

In this project, we will be utilizing the powerful combination of Vue3/Nuxt3, tailwindcss, and Histoire (https://histoire.dev/) to build reusable components for a comprehensive design system.

By combining the strengths of Vue3, Tailwindcss, and Histoire, we aim to create a fully functional design system with reusable components that can be easily integrated into various projects. This will not only improve development efficiency but also ensure consistency and maintainability throughout our applications.

## Requirements for components design

### Tailwind CSS

Tailwind CSS is a A utility-first CSS framework. It can scale with large teams. This framework almost completely eliminates the need to write style sheets. Documentation https://tailwindcss.com/

Please refer to the configuration file `tailwind.config.js` to complete the design system configuration.

Plugins

- Iconify icons with @egoist/tailwindcss-icons (https://github.com/egoist/tailwindcss-icons)
- Default form style @tailwindcss/forms (https://github.com/tailwindlabs/tailwindcss-forms)
- Base text styling @tailwindcss/typography (https://tailwindcss.com/docs/typography-plugin)

### Class Variance Authority

CSS-in-TS librariy for the atomic css age. A tool for building type-safe UI components; taking away all the worries of class names and StyleSheet composition. Documentation https://cva.style/docs

### Icons

Two icons bundle are available :

- Heroicons (https://icones.js.org/collection/heroicons)
- Font Awesome Solid (https://icones.js.org/collection/fa6-solid)

You can find othes icons bundles here https://icones.js.org/

## Run projet TL;DR

Run Nuxt developement server

```sh
npm run dev
```

Open http://localhost:5174/

In an new terminal tab run Histoire server

```sh
npm run story:dev
```

Open http://localhost:6006/

## Project Setup

```sh
npm install
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
