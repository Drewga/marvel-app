export interface Comic {
    title: string,
    description: string,
    thumbnail: Thumbnail
}

export interface Character {
    name: string,
    description: string,
    thumbnail: Thumbnail
}

interface Thumbnail {
    path: string,
    extension: string
}