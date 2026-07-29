# CSCI-435-SE.github.io

Source for the CSCI 435 (Software Engineering Project Course) site, William & Mary, Fall 2026.

Built with [MkDocs](https://www.mkdocs.org/) + [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/),
themed with W&M's official brand colors and fonts.

## Local preview

```bash
pip install -r requirements.txt
mkdocs serve
```

Then open http://127.0.0.1:8000

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it via
GitHub Pages (native Pages deployment, no `gh-pages` branch needed). See the repo's Settings > Pages
and set the source to "GitHub Actions" (one-time setup).

## Structure

```
mkdocs.yml              Site config, nav, W&M theme palette
docs/index.md            Home page
docs/schedule.md          Schedule page
docs/projects.md          Projects page
docs/stylesheets/extra.css   W&M color/font overrides
docs/assets/               Logo/favicon
```
