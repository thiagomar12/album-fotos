import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../api";
import { Container } from "./styles";


type Album = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

type AllAlbums = {
    id:number;
    userId: number;
    title: string;
}

export const Album = () => {
    const [albumPhotos, setAlbumPhotos] = useState<Album[]>([]);
    const [album, setAlbum] = useState<AllAlbums>();
    const [loading, setLoading] = useState(false);
    const params: any = useParams();
    const navigate = useNavigate();
    
    

    const loadAlbum = async () => {
        setLoading(true);
        let json = await api.getAlbum(params.slug);
        setLoading(false);
        setAlbum(json);
    }

    const loadAlbumPhotos = async () => {
        setLoading(true);
        let json = await api.getAlbumPhotos(params.slug);
        setLoading(false);
        setAlbumPhotos(json);
    }

    useEffect(() => {
        loadAlbum();
        loadAlbumPhotos();
    }, []);

    const handleBack = () => {
        navigate(-1);
    }

    console.log(album)


    return(
        <Container className="py-5">
            <>
                {loading && 
                    <div>Carregando...</div>
                }  

                <button onClick={handleBack} className="mb-4">Voltar</button>
                <h2>{album?.title}</h2>
                
                <div className="grid grid-cols-5">
                    {albumPhotos.map((item) => (
                        <Link to={`/foto/${item.id}`}>
                            <img src={item.thumbnailUrl} alt="" className="p-4 border-2 my-4 border-neutral-700 hover:bg-gray-200" />
                        </Link>
                    ))}
                </div>
            </>
        </Container>
    );
}