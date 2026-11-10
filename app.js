/* Static GitHub Pages site. No analytics, external scripts or runtime dependencies. */
"use strict";

const english = {};
document.querySelectorAll("[data-i18n]").forEach((el) => { english[el.dataset.i18n] = el.textContent; });
document.querySelectorAll("[data-i18n-alt]").forEach((el) => { english[el.dataset.i18nAlt] = el.alt; });
document.querySelectorAll("[data-i18n-aria]").forEach((el) => { english[el.dataset.i18nAria] = el.getAttribute("aria-label"); });

const swedish = {
  navWhatsNew: "Nyheter",
  releaseEyebrow: "Senaste uppdateringen · 10 november 2026",
  releaseTitle: "Nyheter i Media Frame",
  releaseIntro: "En sammanfattning av förbättringar mellan 27 oktober och 10 november 2026, i Android-appen och dess anslutningsfunktioner.",
  releaseVersion: "Senaste utvecklingsbygget · v0.1.2507h",
  releaseBluosTitle: "Nytt: Cyrus / BluOS-integration (experimentell)",
  releaseBluosText: "Visa Nu spelas-information och albumomslag från kompatibla BluOS- och Cyrus-nätverksspelare. Spelarens nätverksadress krävs.",
  releaseLmsTitle: "Nytt: Innuos / LMS-integration (experimentell)",
  releaseLmsText: "Anslut till en kompatibel Lyrion Music Server (LMS), inklusive system från Innuos som stöds, och välj vilken spelare vars låt- och uppspelningsinformation ska visas.",
  releaseMoonTitle: "Nytt: MOON MiND-integration (experimentell)",
  releaseMoonText: "Visa Nu spelas-information och albumomslag från kompatibla MOON-nätverksspelare via den stödda MiND-/UPnP-anslutningen.",
  releaseQobuzTitle: "Nytt: Qobuz Connect-integration (experimentell)",
  releaseQobuzText: "Visa metadata och omslag från en Qobuz Connect-session. Media Frame observerar sessionen men strömmar eller spelar inte upp Qobuz-ljud. Inloggning och enhetstillgänglighet beror på appversionen.",
  releaseCambridgeTitle: "Nytt: Cambridge Audio StreamMagic (experimentell)",
  releaseCambridgeText: "Anslut en kompatibel Cambridge Audio-spelare på ditt lokala nätverk med IP-adress eller värdnamn. Media Frame kan visa låtinformation, omslag, uppspelningsposition och längd samt kontrollerna Play, Pause, Next och Previous. Setup, Web Control och uppstartsguiden använder samma anslutningsflöde.",
  releaseVideoTitle: "Mer relevanta musikvideoträffar",
  releaseVideoText: "Sökningen prioriterar ned intervjuer, lyric-videor och statiska Topic-uppladdningar samt undviker tysta alternativa strömmar när ett bättre alternativ finns.",
  releaseArtworkTitle: "Smartare sökning efter artistbilder",
  releaseArtworkText: "Artistnamn som innehåller ”&” får en extra reservsökning om hela artistnamnet inte ger någon bakgrundsbild.",
  releaseDisplayTitle: "Jämnare bildvisning mellan skärmar",
  releaseDisplayText: "Bakgrundsbilder använder en gemensam uppmätt visningsyta på surfplattor och stora 4K-skärmar. Egna vilobakgrunder uppdateras nu korrekt efter uppladdning eller byte och anpassas till vald visningsyta.",
  releaseSourcesTitle: "Tydligare hantering av musikkällor",
  releaseSourcesText: "Val av källa och uppspelningsprioritet är nu separata inställningar, vilket gör det enklare att välja vilken ansluten spelare Media Frame ska följa när flera är tillgängliga.",
  releaseQualityTitle: "Större kontroll över det visuella",
  releaseQualityText: "Bildkvalitetsprofiler, fler typsnitt, justerade proportioner för CD & Case och mjukare skärmsläckarövergångar hjälper Media Frame att anpassas till olika skärmar och enheter.",
  releaseAvailability: "Integrationerna ovan är experimentella. Tillgängligheten varierar mellan distributioner och installerade versioner; den senaste Fleet-APK:n ligger före den publika Play Store-versionen och Android TV-paketet.",
  cambridgeWordmark: "Cambridge Audio",
  sourceSummary: "Roon, Sonos, BluOS, Innuos/LMS, MOON MiND, Qobuz & more",
  sourceBluosTitle: "Cyrus / BluOS (experimentell)",
  sourceBluos: "Visa Nu spelas-information och albumomslag från kompatibla BluOS- och Cyrus-spelare via det lokala nätverket. Spelarens nätverksadress krävs.",
  sourceLmsTitle: "Innuos / LMS (experimentell)",
  sourceLms: "Anslut till en kompatibel Lyrion Music Server (LMS), inklusive system från Innuos som stöds. Välj spelare för att visa aktuell låt och uppspelningsinformation.",
  sourceMoonTitle: "MOON MiND (experimentell)",
  sourceMoon: "Visa Nu spelas-information och albumomslag från kompatibla MOON-nätverksspelare via den stödda MiND-/UPnP-anslutningen.",
  sourceQobuzTitle: "Qobuz Connect (experimentell)",
  sourceQobuz: "Visa metadata och omslag från en Qobuz Connect-session. Media Frame observerar uppspelningen men strömmar eller spelar inte upp Qobuz-ljud. Inloggning och enhetstillgänglighet beror på appversionen.",
  sourceCambridgeTitle: "Cambridge Audio (experimentell)",
  sourceCambridge: "Anslut en kompatibel StreamMagic-spelare på ditt lokala nätverk med IP-adress eller värdnamn. Visa Now Playing-information, omslag, uppspelningsposition och längd samt använd Play, Pause, Next och Previous. Tillgängligheten beror på appversionen.",
  googleDevices: "Google-enheter",
  musicVideoEyebrow: "Mer än en stillbild",
  musicVideoTitle: "Låt musikvideon bli bakgrunden.",
  musicVideoText: "När en matchande musikvideo går att hitta och spela upp kan Media Frame visa den i bakgrunden av dina teman och animationer för den aktuella låten. Musiken fortsätter att spelas genom din befintliga anläggning.",
  feature4Title: "Ställ in en gång. Synka flera skärmar.",
  feature4Text: "Samla flera Media Frame-enheter i en grupp på ditt nätverk. Gör inställningarna en gång och synka dem till flera skärmar.",
  sourceGoogleTitle: "Google-enheter (Nest, Hub, Streamer)",
  sourceGoogle: "Visa låtinformation och artwork från kompatibla Google-enheter på samma nätverk, bland annat Nest-högtalare, Hub-skärmar och streamers som stöds.",
  sourceEversolo: "Hämta Nu spelas-information och artwork direkt från kompatibla Eversolo-streamers på ditt hemnätverk.",
  videoSummary: "Apple TV · Google-enheter",
  faq7Q: "Finns appen för iPhone eller iPad?",
  faq7A: "Media Frame finns just nu endast för Android-mobiler, surfplattor och Android TV OS. En version för iOS/Apple-enheter är planerad.",
  skip: "Hoppa till innehållet",
  navigation: "Huvudnavigation",
  navStart: "Så fungerar det",
  navLooks: "Utseenden",
  navConnections: "Anslutningar",
  navSupport: "Support",
  supportEyebrow: "Frågor eller synpunkter?",
  supportTitle: "Behöver du hjälp med Media Frame?",
  supportIntro: "Kontakta oss direkt för support eller delta i communitydiskussionen för att ställa frågor, lämna synpunkter och följa utvecklingen.",
  supportDirectLabel: "Direktkontakt",
  supportEmailTitle: "Support via e-post",
  supportEmailText: "Har du frågor, problem eller behöver hjälp med installationen? Skicka ett mejl.",
  supportEmailCta: "Kontakta support",
  supportCommunityLabel: "Community & diskussion",
  supportForumTitle: "Diskussion på Roon Community",
  supportForumText: "Diskutera Media Frame, ställ frågor, rapportera problem och dela idéer med andra användare i forumtråden.",
  supportForumCta: "Delta i diskussionen",
  supportForumNote: "Öppnar Media Frame-tråden på Roon Community-forumet.",

  try: "Prova gratis",
  heroEyebrow: "Android-surfplattor · mobiler · TV",
  heroLine1: "Din musik.",
  heroLine2: "I blickfånget.",
  heroDescription: "Ge musiken du älskar en egen skärm. Vackra omslag, artistbilder, animationer och matchande musikvideor gör lyssningshörnan till något alldeles extra.",
  getPlay: "Hämta på Google Play",
  watch: "Se appen i användning",
  trialNote: "Gratis i 7 dagar. Därefter ett engångsköp. Ingen prenumeration.",
  heroAlt: "Media Frame visar samma musik på en Android-mobil och en inramad surfplatta vid en stereo",
  realSetup: "En riktig anläggning. Ett nytt sätt att se musiken.",
  strip1: "Ge din Android-skärm ett nytt liv.",
  strip2: "Musik", strip3: "Film & TV", strip4: "Gaming",
  startEyebrow: "Välj ditt sätt att börja",
  startTitle: "Två vägar in. En snyggare musikupplevelse.",
  startIntro: "Börja enkelt. Anslut fler källor när du vill.",
  simplePill: "Enklaste starten",
  simpleTitle: "Låt appen lyssna själv.",
  simpleDescription: "Spelar du vinyl, CD eller radio? Med ”Lyssna själv!” använder appen mobilens eller surfplattans mikrofon för att känna igen låten och visa dess artwork. Ingen anslutning till en streamer behövs.",
  step1: "Välj ”Lyssna själv!” i uppstartsguiden.",
  step2: "Tillåt mikrofonen och följ den korta kalibreringen.",
  step3: "Spela din musik. Njut av utsikten.",
  recognitionNote: "Kräver internet och musik som mikrofonen kan höra. Igenkänningen påverkas av inspelning och ljudmiljö. Finns inte i Android TV-versionen.",
  connectedPill: "För din uppkopplade anläggning",
  connectedTitle: "Anslut det du redan har.",
  connectedDescription: "Har du en streamer, musiktjänst eller Apple TV? Låt Media Frame följa kompatibla spelare direkt, med artwork, uppspelningsinformation och kontroller där det stöds.",
  allConnections: "Se alla anslutningar",
  connectionNote: "För Android-surfplattor, mobiler och TV. Funktionerna varierar mellan källor och enheter.",
  looksEyebrow: "Musik att titta på",
  looksTitle: "Lite nostalgi. Mycket personlighet.",
  looksIntro: "Från ett avskalat skivomslag till en snurrande vinyl eller rullbandspelare. Välj det uttryck som passar dig.",
  appScreenshot: "Direkt från appen",
  galleryCdDescription: "Ett skivfodral och en CD ger albumen nytt liv. Matchande bilder av CD-skivan används när de finns.",
  galleryLabel: "Välj ett utseende",
  reel: "Rullbandspelare", vinyl: "Vinyl", cassette: "Retro-kassett", minimal: "Skivomslag", cdPlayer: "CD-spelare",
  eqBars: "EQ-staplar", oscilloscope: "Oscilloskop", vinylCover: "Vinyl & omslag",
  galleryNote: "Riktiga skärmbilder från appen. Upptäck även VU-mätare och spektrum-vattenfall. Bilderna visar animationsstilarna; tryck på en stil för att se dess utseende.",
  homeEyebrow: "En del av ditt hem",
  homeTitle: "Mer än en skärm. En del av rummet.",
  homeIntro: "På ett stativ, i en tavelram eller bredvid din favoritanläggning. Låt skärmen ta plats eller smälta in.",
  feature1Title: "Din layout, på ditt sätt",
  feature1Text: "Nästan allt går att anpassa: bilder, text, färger, bakgrunder, animationer och placering. Använd ett färdigt tema, utgå från ett befintligt eller bygg ett helt eget tema och en egen layout, med separata inställningar för musik och video.",
  feature2Title: "Snygg även mellan låtarna",
  feature2Text: "Visa egna foton, dekorativ konst, klocka, datum och väder när ingenting spelas.",
  feature3Title: "En skärm som hittar hem",
  feature3Text: "På mobiler och surfplattor som stöds: adaptiv ljusstyrka, kioskläge och justerbar visningsyta för att passa in bilden i fysiska ramar och installationer. Nattläget minskar oönskat ljus.",
  homeAlt: "Tre Media Frame-skärmar på en möbel: en i träram, en på stativ och en i en vit ram",
  homeCaption: "Olika skärmar. Olika uttryck. Samma musik.",
  connectionsEyebrow: "För dig som vill ansluta mer",
  connectionsTitle: "Passar in i anläggningen du redan har.",
  connectionsIntro: "Använd en eller flera källor. Välj vilken som prioriteras när flera spelar samtidigt.",
  connectionAsideTitle: "Musik. Film. Ett smartare hem.",
  connectionAsideText: "Öppna en kategori för att läsa mer. Direktanslutningar använder normalt hemnätverket; artwork och onlinetjänster kan även behöva internet.",
  youtubeGuides: "Demos & guider på YouTube",
  sourceCategory: "Spelare & musiktjänster",
  sourceSummary: "Roon, Sonos, Google-enheter med flera",
  sourceRoon: "Titel, artist, omslag och zoninformation från din Roon Server. Godkänn Media Frame under Settings → Extensions i Roon.",
  sourceSonos: "Hitta rum i hemnätverket. Följ ett valt rum eller den aktiva gruppen, med uppspelningsinformation och kontroller.",
  sourceWiim: "Nu spelas-information från kompatibla streamers via enhetens lokala gränssnitt.",
  sourceSpotify: "Följ Spotify-lyssning genom Last.fm-skrobbling. Använd den anslutningsmetod för Spotify som finns i din appversion.",
  sourceNaim: "Hämta Nu spelas-information och artwork direkt från kompatibla Naim-spelare på ditt hemnätverk.",
  videoCategory: "Film & TV",
  sourceVideo: "Parkoppla en Apple TV för att visa information, posters och bakgrunder för filmer och serier som stöds. Musikappar på kompatibla källor kan använda musiklayouten. Kompatibla Google-enheter kan ge uppspelningsinformation för både musik och video, beroende på app och enhet.",
  videoNote: "Vilken information som visas beror på appen och enheten som spelar. Android TV är också en plattform där Media Frame kan installeras; uppspelningsinformation och kontroller varierar mellan anslutna enheter.",
  smartCategory: "Smarta hem & fjärrinställningar",
  sourceHome: "Använd Home Assistants media_player-enheter som källa, eller styr Media Frame genom dess Home Assistant-integration. Aktivera webbstyrning i appen för att ändra inställningar i en webbläsare på samma nätverk. Med Media Frames inbyggda gruppsynk gör du inställningarna en gång och applicerar dem på flera enheter.",
  gamingCategory: "En infoskärm för din PC i realtid",
  sourceGaming: "Följ datorns prestanda på en separat informationsskärm: FPS, CPU- och GPU-belastning, temperaturer och andra tillgängliga mätvärden i realtid. Kräver en Windows-dator med MSI Afterburner / RTSS och Media Frame PC Bridge.",
  faqEyebrow: "Innan du trycker på play",
  faqTitle: "Bra att veta.",
  faq1Q: "Vad behöver jag?",
  faq1A: "En Android-surfplatta, Android-mobil eller enhet med Android TV OS. Installera Media Frame från Google Play. För ”Lyssna själv!” behöver du en mobil eller surfplatta med mikrofon och internet. För anslutna källor ska skärmen och spelaren finnas på samma hemnätverk.",
  faq2Q: "Behöver jag en speciell musikanläggning?",
  faq2A: "Nej. ”Lyssna själv!” kan lyssna på vinyl, CD, radio eller musik från en högtalare. Funktionen känner igen inspelad musik som mikrofonen hör, så resultatet beror på inspelning, volym och bakgrundsljud. Du kan lägga till direktanslutningar senare.",
  faq3Q: "Fungerar ”Lyssna själv!” på Android TV?",
  faq3A: "”Lyssna själv!” finns för Android-mobiler och surfplattor, men inte i Android TV-versionen. På Android TV använder du i stället kompatibla spelare och tjänster. Även vissa skärmfunktioner för surfplattor skiljer sig på TV.",
  faq4Q: "Är Media Frame en musikspelare?",
  faq4A: "Media Frame är en skärm för det du lyssnar eller tittar på. Din befintliga anläggning spelar musiken. Media Frame tillför bilder, information och visualiseringar, med uppspelningskontroller för integrationer som stöds. Matchande musikvideobakgrunder är valfria och beror på tillgänglighet.",
  faq5Q: "Hur fungerar provperioden?",
  faq5A: "Ladda ned appen och prova gratis i 7 dagar. Därefter låser ett engångsköp upp fortsatt användning. Ingen prenumeration eller automatisk debitering. Aktuellt pris visas i appen / Google Play.",
  faq6Q: "Kan jag ändra utseendet från min mobil?",
  faq6A: "Ja. Aktivera webbstyrning i Media Frame och öppna adressen som visas i appen med en webbläsare på ditt lokala nätverk. Ändra layout och inställningar från mobil, surfplatta eller dator.",
  downloadEyebrow: "Inför nästa lyssningsstund",
  downloadTitle: "Ge musiken en plats på skärmen.",
  downloadText: "Upptäck Media Frame i din egen anläggning. Prova gratis i 7 dagar.",
  platforms: "Android-surfplattor, mobiler & Android TV OS · Engångsköp efter provperioden",
  footerNav: "Mer information",
  support: "Support", privacy: "Integritet", madeIn: "Utvecklad i Sverige",
  trademarks: "Media Frame är en oberoende app. Produktnamn, artwork och varumärken tillhör respektive ägare. Skärmbilderna visar appens funktioner och innebär inget godkännande från artister eller tjänster."
};

const looks = {
  reel: {src: "assets/reel-to-reel.webp", title: ["Reel-to-Reel", "Rullbandspelare"], description: ["A classic tape deck, reimagined around your music. Album artwork becomes part of the player.", "En klassisk rullbandspelare med din musik i centrum. Skivomslaget blir en del av spelaren."]},
  vinyl: {src: "assets/vinyl.webp", title: ["Vinyl", "Vinyl"], description: ["The record-store feeling, on your screen. A full-screen vinyl style with the current album at its centre.", "Skivbutikskänslan, på din skärm. En vinylstil i helskärm med det aktuella skivomslaget i centrum."]},
  cd: {src: "assets/cd-case.webp", title: ["CD & Case", "CD & Case"], description: ["A jewel case and disc bring your albums to life. Matching disc artwork is used when available.", "Ett skivfodral och en CD ger albumen nytt liv. Matchande bilder av CD-skivan används när de finns."]},
  cassette: {src: "assets/cassette.webp", title: ["Retro-Cassette", "Retro-kassett"], description: ["All the charm of a mixtape. A retro cassette with your music’s artwork and track information.", "Mixtapens charm i ny tappning. En retrokassett med musikens omslag och låtinformation."]},
  minimal: {src: "assets/album-art.webp", title: ["Album-focused", "Skivomslag"], description: ["Keep it simple. Artwork, artist and track information, with room for the music to breathe.", "Avskalat och tydligt. Omslag, artist och låtinformation som låter musiken ta plats."]},
  player: {src: "assets/cd-player.webp", title: ["CD Player", "CD-spelare"], description: ["A full-screen CD player inspired by classic hi-fi. The disc takes centre stage.", "En CD-spelare i helskärm med inspiration från klassisk hi-fi. Här får skivan huvudrollen."]},
  eq: {src: "assets/eq-bars.webp", title: ["EQ Bars", "EQ-staplar"], description: ["A splash of colour for your listening corner. Bright EQ bars share the screen with album artwork and track information.", "Färg som lyfter lyssningshörnan. Färgstarka EQ-staplar delar skärmen med skivomslag och låtinformation."]},
  oscilloscope: {src: "assets/oscilloscope.webp", title: ["Oscilloscope", "Oscilloskop"], description: ["Glowing blue waveforms frame your album artwork. A striking look with the artist and track clearly in focus.", "Lysande blå vågformer ramar in skivomslaget. Ett uttrycksfullt utseende med artist och låt tydligt i fokus."]},
  vinylCover: {src: "assets/vinyl-cover.webp", title: ["Vinyl & Cover", "Vinyl & omslag"], description: ["The feeling of a record pulled from its sleeve. A vinyl record peeks out behind a large album cover, with artist and track information in view.", "Känslan av en skiva som dras ur sitt fodral. En vinylskiva sticker fram bakom ett stort skivomslag, med artist och låtinformation väl synliga."]}
};

// Thumbnail order is also the slideshow order and determines its first image.
const lookOrder = Array.from(document.querySelectorAll("[data-look]"), (el) => el.dataset.look);
let selectedLook = lookOrder[0];
let language = "en";
const slideshowDelay = 5000;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let galleryVisible = false;
let slideshowTimer;

function scheduleSlideshow() {
  window.clearTimeout(slideshowTimer);
  if (reducedMotion.matches || document.hidden || !galleryVisible) return;
  slideshowTimer = window.setTimeout(() => {
    selectedLook = lookOrder[(lookOrder.indexOf(selectedLook) + 1) % lookOrder.length];
    renderGallery(true);
    scheduleSlideshow();
  }, slideshowDelay);
}

function renderGallery(automatic = false) {
  const look = looks[selectedLook];
  const index = language === "sv" ? 1 : 0;
  const image = document.getElementById("gallery-image");
  // Announce manual selections, without announcing every automatic change.
  document.querySelector(".showcase-caption").setAttribute("aria-live", automatic ? "off" : "polite");
  image.src = look.src;
  image.alt = "Media Frame — " + look.title[index];
  document.getElementById("gallery-title").textContent = look.title[index];
  document.getElementById("gallery-description").textContent = look.description[index];
  document.querySelectorAll("[data-look]").forEach((el) => el.setAttribute("aria-pressed", String(el.dataset.look === selectedLook)));
  // Warm the next image's cache before its turn without loading the whole gallery.
  const nextImage = new Image();
  nextImage.src = looks[lookOrder[(lookOrder.indexOf(selectedLook) + 1) % lookOrder.length]].src;
}

function setLanguage(next, persist = false) {
  if (next !== "sv" && next !== "en") return;
  language = next;
  const messages = next === "sv" ? swedish : english;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (messages[el.dataset.i18n] !== undefined) el.textContent = messages[el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => { el.alt = messages[el.dataset.i18nAlt]; });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", messages[el.dataset.i18nAria]); });
  document.querySelectorAll("[data-language]").forEach((el) => el.setAttribute("aria-pressed", String(el.dataset.language === next)));
  document.title = next === "sv" ? "Media Frame — Din musik. I blickfånget." : "Media Frame — Your music. On display.";
  document.querySelector('meta[name="description"]').content = next === "sv"
    ? "Gör din Android-surfplatta, mobil eller TV till en snygg Nu spelas-skärm. Låt appen känna igen musik eller anslut dina spelare. Prova gratis i 7 dagar."
    : "Turn your Android tablet, phone or TV into a beautiful Now Playing display. Recognize music with your microphone or connect your players. Try free for 7 days.";
  renderGallery();
  if (persist) {
    try { localStorage.setItem("media-frame-language", next); } catch { /* Optional preference only. */ }
    const url = new URL(location.href);
    url.searchParams.set("lang", next);
    history.replaceState(null, "", url);
  }
}

document.querySelectorAll("[data-language]").forEach((el) => el.addEventListener("click", () => setLanguage(el.dataset.language, true)));
document.querySelectorAll("[data-look]").forEach((el) => el.addEventListener("click", () => {
  selectedLook = el.dataset.look;
  renderGallery();
  scheduleSlideshow();
}));
document.addEventListener("visibilitychange", scheduleSlideshow);
reducedMotion.addEventListener("change", scheduleSlideshow);
document.getElementById("year").textContent = new Date().getFullYear();

let savedLanguage;
try { savedLanguage = localStorage.getItem("media-frame-language"); } catch { /* Page works without storage. */ }
const requestedLanguage = new URLSearchParams(location.search).get("lang");
const validLanguage = (value) => value === "sv" || value === "en";
setLanguage(validLanguage(requestedLanguage) ? requestedLanguage : validLanguage(savedLanguage) ? savedLanguage : navigator.language.toLowerCase().startsWith("sv") ? "sv" : "en");

if ("IntersectionObserver" in window) {
  const galleryObserver = new IntersectionObserver(([entry]) => {
    galleryVisible = entry.isIntersecting;
    scheduleSlideshow();
  });
  galleryObserver.observe(document.querySelector(".showcase"));
} else {
  galleryVisible = true;
  scheduleSlideshow();
}
