# 🎧 Podcast Menager

Um app no estilo **Netflix**, criado para centralizar episódios de podcasts em vídeo, organizados por categorias.

---

## 📖 Descrição
O **Podcast Menager** é uma aplicação que lista episódios de diferentes podcasts em sessões categorizadas, permitindo ao usuário explorar facilmente conteúdos variados e filtrar episódios por nome do podcast.

---

## 🌐 Domínio
- **Podcasts em vídeo** (ex.: YouTube, Spotify vídeo, etc.)

---

## 🚀 Features
- 📌 Listar episódios de podcasts em sessões de categorias:
  - saúde
  - fitness
  - mentalidade
  - humor
- 🔎 Filtrar episódios pelo nome do podcast.

---

## 🛠️ Como funciona

### Feature: Listar os episódios em sessões de categorias
Será implementada através de uma **API REST**, que retorna informações básicas de cada episódio.

### Estrutura da resposta (GET /episodes):
```json
[
  {
    "podcastName": "Venus Podcast",
    "episode": "sou EMOCIONADO, E AGORA? Amores de Venus #04",
    "videoId": "E3qaqHkKgVQ",
    "cover": "https://i.ytimg.com/vi/E3qaqHkKgVQ/hqdefault.jpg",
    "link": "https://www.youtube.com/watch?v=E3qaqHkKgVQ",
    "category": ["humor", "mentalidade"]
  },
  {
    "podcastName": "TURMA DO YUR",
    "episode": "IAN NEVES - BEN-YUR Podcast #277",
    "videoId": "_cS6PQVxUzk",
    "cover": "https://i.ytimg.com/vi/_cS6PQVxUzk/hq720.jpg",
    "link": "https://www.youtube.com/watch?v=_cS6PQVxUzk",
    "category": ["humor", "saúde"]
  }
]
