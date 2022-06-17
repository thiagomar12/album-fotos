import axios from "axios";

const BASE = 'https://jsonplaceholder.typicode.com';

export const api = {

    getAllAlbums: async () => {
        let response = await axios.get(`${BASE}/albums`);
        return response.data  
    },
    getAlbum: async (slug: string) => {
        let response = await axios.get(`${BASE}/albums/${slug}`);
        return response.data
    },
    getAlbumPhotos: async (slug: string) => {
        let response = await axios.get(`${BASE}/albums/${slug}/photos`);
        return response.data
    },
    getPhoto: async (slug: string) => {
        let response = await axios.get(`${BASE}/photos/${slug}`);
        return response.data
    }
}