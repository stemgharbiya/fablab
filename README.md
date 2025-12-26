# Gharbiya FabLab Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Welcome to the Gharbiya FabLab documentation repository! This website serves as a comprehensive resource for our digital fabrication laboratory, providing information about our equipment, software tools, learning resources, and community projects.

## Features

- **Digital Fabrication Equipment**: Detailed guides for our laser cutter, 3D printer, vinyl cutter, and CNC router
- **Software Resources**: Instructions for CAD/CAM tools and machine-specific software
- **Learning Materials**: Educational challenges and tutorials for various technologies
- **Inventory Management**: Comprehensive listings of components, materials, and tools
- **Community Projects**: Showcases of student work and team achievements
- **Blog**: Latest updates, tutorials, and community stories

## Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions workflow for deployment
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── blog/           # Blog posts
│   │   └── docs/           # Documentation pages
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

- Triggers on pushes to the `main` branch
- Builds the site using Astro
- Deploys to GitHub Pages
- Validates all internal links

## Contributing

We welcome contributions from our community! If you'd like to contribute:

1.  **Fork the repository**
2.  **Create your feature branch** using a descriptive prefix:
    ```bash
    git checkout -b <type>/short-description
    ```
    Common branch types:
    - `docs/` - for changes to documentation (e.g., `docs/add-laser-guide`)
    - `feat/` - for new features or sections (e.g., `feat/add-project-gallery`)
    - `fix/` - for bug fixes (e.g., `fix/broken-image-link`)
    - `deploy/` - for changes to deployment or infrastructure
3.  **Commit your changes** with a clear message:
    ```bash
    git commit -m '<type>: brief description of changes'
    ```
4.  **Push to the branch**:
    ```bash
    git push origin <your-branch-name>
    ```
5.  **Open a Pull Request** on GitHub with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
Copyright (c) 2025 STEM Gharbiya.

## Contact

- **FabLab Website**: [https://stemgharbiya.github.io/fablab/](https://stemgharbiya.github.io/fablab/)
- **GitHub Repository**: [https://github.com/stemgharbiya/fablab](https://github.com/stemgharbiya/fablab)

## Acknowledgments

- Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build/)
- Hosted on [GitHub Pages](https://pages.github.com/)
- Enhanced with [Starlight Blog](https://github.com/HiDeoo/starlight-blog) and [Starlight Theme Nova](https://github.com/ocavue/starlight-theme-nova)
