# Podcast Menager

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episódios de podcasts separados por categorias

### Domínio
Podcasts feitos em vídeo

### Features
- listar os episódios dos podcasts em sessões de categorias
 - [saúde, fitness, mentalidade, humor]
- filtrar os episódios por nome do podcast

## Como
#### Feature:
Listar os episódios dos podcasts em sessões de categorias

### Como vou implementar:
Vou retornar em uma API rest o nome do podcast, o nome do episódio, a imagem da capa e o link

GET: retorna a lista de episódios
response:

    '''
        js
    {
        [
        podcastName: "Venus Podcast",
        episode: "sou EMOCIONADO, E AGORA? Amores de Venus #04",
        videoId: "E3qaqHkKgVQ",
        cover: "https://i.ytimg.com/vi/E3qaqHkKgVQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAD9ATsokUu-UtXjYSX8aWL7xP7GA",
        link: "https://www.youtube.com/watch?v=E3qaqHkKgVQ",
        category: [humor, mentalidade]
        ],
                [
        podcastName: "TURMA DO YUR",
        episode: "IAN NEVES - BEN-YUR Podcast #277",
        videoId: "_cS6PQVxUzk",
        cover: "https://i.ytimg.com/vi/_cS6PQVxUzk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDC8tTBJ2fayJ4gMHTKjTF6XbZkBg",
        link: "https://www.youtube.com/watch?v=_cS6PQVxUzk&pp=ygURcG9kY2FzdCBpYW4gbmV2ZXM%3D",
        category: [humor, saúde]
        ],
    }
    '''

GET: retorna a lista de episódios baseado em um parametro enviado pelo cliente do nome do podcast