import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api";
import { Container } from "./styles";

type AllAlbums = {
    id:number;
    userId: number;
    title: string;
}



export const AllAlbums = () => {
    const [allAlbums, setAllAlbums] = useState<AllAlbums[]>([]);
    
    const [loading, setLoading] = useState(false);

    const loadAllAlbums = async () => {
        setLoading(true);
        let json = await api.getAllAlbums();
        setLoading(false);
        setAllAlbums(json);
    }

   

    useEffect(() => {
        loadAllAlbums(); 
    }, []);

    return(
        <Container className="py-5">
            <>
                {loading && 
                    <div>Carregando...</div>
                }

                {allAlbums.map((item) =>(
                    <div>
                        <Link to={`/album/${item.id}`}  className="p-4 block border-2 my-1.5 border-neutral-700 hover:bg-gray-200">{item.title}</Link>
                    </div>
                ))}
                
            </>
        </Container>
    );
}