import { useEffect, useState } from "react";

import { api } from "../../api";
import { Container } from "./styles";
import { useParams, useNavigate } from 'react-router-dom';

type Album = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export const Photo = () => {
    
    const [photo, setPhoto] = useState<Album>();
    const [loading, setLoading] = useState(false);
    const params: any = useParams();
    const navigate = useNavigate();
    

    const loadPhoto = async () => {
        setLoading(true);
        let json = await api.getPhoto(params.slug);
        setLoading(false);
        setPhoto(json);
    }

    const handleBack = () => {
        navigate(-1);
    }

   
    useEffect(() => {
        loadPhoto();
    }, []);

    console.log(photo);


    return(
        <Container className="py-5">
            <>
                {loading && 
                    <div>Carregando...</div>
                }
                <button onClick={handleBack} className="mb-4">Voltar</button> 
                <h2>{photo?.title}</h2>
                <div className="">
                    
                        <div>
                            <img src={photo?.url} alt="" className="p-4 my-4" />
                        </div>
                    
                </div>
            </>
        </Container>
    );
}