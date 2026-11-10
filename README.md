# Media Frame — website

The public introduction and download page for Media Frame:
https://gripsoftapps.github.io/Media-Frame-Info/

Media Frame is available for Android tablets, phones and Android TV OS. The app is free to try for **7 days**, followed by a one-time purchase. The developer confirmed seven days on 2026-11-04 to match the app’s current trial duration; this supersedes the earlier fourteen-day wording.

## Site structure

- `index.html`: accessible, English-first content, download links, a dated What's New section, integration details and FAQ. Core content and native expandable sections work without JavaScript.
- `styles.css`: responsive layouts, dark olive/charcoal palette and warm accents.
- `app.js`: Swedish translations, language selection and the nine-image display-style gallery.
- `assets/`: optimized WebP images and PNG icons derived from developer-supplied media.

Swedish browsers start in Swedish; other browsers start in English. The language switch remembers a preference locally. Use `?lang=sv` or `?lang=en` to share a language-specific link. The canonical QR destination remains the root URL above.

When adding copy, write the English text in HTML with a `data-i18n` key and add the same key to `swedish` in `app.js`. Gallery captions are maintained in the `looks` object. When `app.js` changes, update its content-hash query in the HTML script URL so browsers fetch the current version.

The thumbnail order is the slideshow order: CD & Case, Reel-to-Reel, Vinyl, Retro-Cassette, Album-focused, CD Player, EQ Bars, Oscilloscope, and Vinyl & Cover. The gallery starts with the first thumbnail and advances every 5 seconds while its display is visible. Selecting a thumbnail resets the timer. Playback waits while the gallery is offscreen or the tab is hidden, and reduced-motion preferences disable automatic playback. There is no slideshow hint or pause/start control. Without JavaScript, the initial image and caption remain visible.

## Content

The first visit introduces the display, gives a clear Google Play download link, and explains the two setup paths: Music Recognition (“Lyssna själv!”) and connected sources. The What's New section is maintained in English and Swedish and states build-specific availability; Cambridge Audio StreamMagic is explicitly marked experimental and not yet present in the public Play Store or current Android TV package. The gallery shows nine real app screenshots, including EQ bars, an oscilloscope and vinyl with an album cover. A dedicated highlight explains music-video backgrounds behind themes and animations. The main feature list explains extensive theme customization and built-in settings sync across multiple devices. Detailed integrations and FAQs sit further down the page.

Music Recognition uses a phone or tablet microphone and is not available in the Android TV version. Direct connections, controls, metadata and display features vary by source and device. Spotify is described through Last.fm scrobbling rather than promising direct Spotify sign-in in every build. Naim, Eversolo and experimental Cambridge Audio StreamMagic are separate integration entries. Google devices (Nest, Hub and supported streamers) appear under music as well as video. MSI Afterburner is presented as a live performance information display. The FAQ describes iOS / Apple support as planned, without a release date.

The YouTube channel is https://www.youtube.com/@MediaFrameApp.
The Google Play listing is https://play.google.com/store/apps/details?id=com.anonymous.mediaframe.
Support is MediaFrameApp@protonmail.com.
Privacy information is linked to the existing Media-Frame-Legal site.

## Deployment and validation

This is a buildless static site. The existing `.github/workflows/static.yml` deploys the repository to GitHub Pages on pushes to `main`. No extra host, package installation or build is required.

Before publishing, check `node --check app.js`, local asset/anchor references, both languages, all gallery options and expandable sections. Review narrow phone, tablet and desktop layouts. Prefer optimized, locally hosted images and preserve visible focus indicators and reduced-motion support.

The 2026-11-03 redesign was reviewed at 320, 390, 768, 1024 and desktop widths, with browser checks of language switching, all gallery selections, keyboard operation of FAQ, and the three Google Play links.
