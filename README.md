# CSCI-435-SE.github.io

Source for the CSCI 435/535 (Software Engineering) site, William & Mary, Fall 2026.

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
mkdocs.yml                 Site config, nav, W&M theme palette, plugins
docs/index.md               Home page
docs/syllabus.md             Syllabus page
docs/schedule.md              Schedule page
docs/projects.md               Projects page
docs/sprints.md                  Sprints page (placeholder -- fill in before Sprint 0)
docs/presentations.md             Presentations page (placeholder -- fill in before first showcase)
docs/resources.md                  Resources page
docs/stylesheets/extra.css          W&M color/font overrides
docs/assets/                         Logo/favicon
```

## Password-protecting a page

The [mkdocs-encryptcontent-plugin](https://github.com/vsalvino/mkdocs-encryptcontent) is installed and
configured in `mkdocs.yml`, but no page is protected yet. To protect a page, add this to the top of its
`.md` file:

```yaml
---
encrypted: true
password: your-password-here
---
```

## Updating the site

Every page is a plain markdown file under `docs/`. To update content, edit the relevant `.md` file,
preview locally with `mkdocs serve`, then commit and push to `main` -- the site rebuilds and redeploys
automatically. Adding a new page: create the `.md` file under `docs/`, then add it to the `nav:` list
in `mkdocs.yml`.

## Caching / seeing stale pages after a deploy

GitHub Pages is served through a CDN, and browsers cache pages and assets locally too, so a page can
look unchanged right after you push. Two things to know:

- **Page content (HTML):** the CDN cache is short-lived (on the order of minutes). If a page looks
  stale right after a deploy, wait a couple of minutes, then do a hard refresh
  (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows/Linux) to bypass your browser's own cache.
- **The stylesheet (`extra.css`):** browsers tend to cache this more aggressively since its filename
  never changes. It's referenced in `mkdocs.yml` as `stylesheets/extra.css?v=3` -- whenever you edit
  `extra.css` and want to guarantee everyone sees the update immediately, bump that version number
  (`?v=4`, `?v=5`, ...) in `mkdocs.yml`. Changing the URL forces browsers to treat it as a new file
  instead of serving a cached copy.

GitHub Pages doesn't offer a setting to disable caching outright (it's a static host, no custom
response headers) -- the version-query trick above is the standard workaround for CSS/JS, and a hard
refresh + brief wait handles page content.
