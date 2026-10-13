# krishna1594.github.io

Personal portfolio + blog. Plain Jekyll, built automatically by GitHub Pages — no theme, no build tools.

## Publish a blog post (2 minutes)

1. Copy `_drafts/post-template.md` into `_posts/` and rename it `YYYY-MM-DD-short-name.md`
   (e.g. `2026-10-20-ultrasound-qc.md`). The URL becomes `/blog/short-name`.
2. Fill in the front matter, write in Markdown, commit and push. Live in ~1 minute.

## Add a project

Create a file in `_projects/`. Two kinds:

- **Links out** (Tableau, GitHub, Medium): set `external_url` — no body needed.
- **Case study on this site**: leave out `external_url` and write the write-up below the front matter.

```yaml
---
name: Project title
tools: [SQL, Tableau]
image: "https://…/cover.png"     # 16:9 looks best
description: One or two sentences shown on the card.
external_url: "https://…"        # optional
---
```

Projects appear in filename order.

## Edit the rest

| What | Where |
|---|---|
| Name, email, social links, résumé link | `_config.yml` |
| Toolkit chips on the home page | `_data/skills.yml` |
| Experience timeline | `_data/timeline.yml` |
| Home page copy | `index.html` |
| About page copy | `about.html` |
| Colours | top of `assets/css/main.css` (`--accent` re-themes everything) |

Embeds that still work inside posts:
`{% raw %}{% include elements/video.html id="YOUTUBE_ID" %}{% endraw %}` and
`{% raw %}{% include elements/button.html link="https://…" text="Learn more" %}{% endraw %}`.

## Preview locally (optional)

```
bundle install
bundle exec jekyll serve
```
