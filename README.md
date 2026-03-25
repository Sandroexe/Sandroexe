# 🌐 sandro.exemail.at | Sandro Exenberger Portfolio

![Status](https://img.shields.io/website?url=https%3A%2F%2Fexemail.at&label=Status&style=flat-square&color=success)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

> **"All Systems Operational."** 🟢

Willkommen im Quellcode-Repository meiner persönlichen Webseite. Diese Seite dient als digitales Portfolio, Visitenkarte und Showcase meiner Projekte aus den Bereichen **Netzwerktechnik (CCNA)**, **Linux**, **Elektronik** und **3D-Druck**.

## 🚀 Features

Dieses Projekt setzt auf **High Performance** durch einen No-Framework-Ansatz (Vanilla JS), verwaltet durch Jekyll.

* **💻 Cyber-Terminal UI:** Ein verstecktes, voll funktionsfähiges Web-Terminal (CachyOS Style) mit Befehlen wie `fetch`, `whoami` oder `skills`.
* **🕸️ Neural Network Background:** Ein responsives HTML5 Canvas Partikel-System, das auf Mausbewegungen reagiert.
* **⚡ Glitch & Neon UI:** Modernes Dark-Mode Design mit Blur-Effekten und Neon-Akzenten (`#007aff`).
* **🏗️ Jekyll Architektur:** Modulare Struktur mit `_includes` für Footer und Header, nativ unterstützt durch GitHub Pages.
* **🥚 Easter Eggs:** Tippe `sandro` auf der Tastatur, um den "Hacker Mode" zu aktivieren.

## 🛠️ Tech Stack

| Technologie | Beschreibung |
| :--- | :--- |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Semantische Struktur & SEO |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Flexbox, Grid, Animationen, Variablen |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Terminal Logik, Canvas, DOM (Keine Frameworks) |
| ![Jekyll](https://img.shields.io/badge/Jekyll-CC0000?style=flat-square&logo=jekyll&logoColor=white) | Static Site Generator (SSG) |

## 📂 Repository Struktur

Das Projekt nutzt Jekyll-Includes, um Code-Duplikate zu vermeiden und Komponenten zentral zu verwalten:

```text
├── _includes/
│   └── footer.html       # Zentraler Footer-Baustein
├── _layouts/
│   └── default.html      # Haupt-Layout
├── assets/               # Bilder, Lebenslauf, CSS, JS
├── index.html            # Haupt-Dashboard
├── datenschutz.html      # Datenschutzerklärung
├── impressum.html        # Impressum
├── lab.html              # Hardware & Home-Lab Setup
├── links.html            # Linktree-Alternative
└── projects.html         # Projekt-Showcase
