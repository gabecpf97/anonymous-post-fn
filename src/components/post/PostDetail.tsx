import React, { useEffect, useState } from 'react'
import { FetchedData, PostType } from '../../interfaces/myInterfaces'
import { CommentList } from '../comment/CommentList';
import { RelationButt } from '../general/RelationButt';

interface props {
    id: string
}

// kind of same as post ????
export const PostDetail: React.FC<props> = ({ id }) => {
    const [detail, setDetail] = useState<PostType>();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const resposne: Response = await fetch(`http://localhost:5000/post/${id}`);
                const data: FetchedData = await resposne.json();
                if (data.err) {
                    // error control
                } else {
                    setDetail(data.thePost);
                }
            } catch (err: any) {
                // error control
            }
        }
        fetchPost();
    }, [id]);

    return (
        <div>
            {detail &&
                <div>
                    <p>{detail.op_name}</p>
                    <p>{detail.date}</p>
                    <p>{detail.message}</p>
                    <p>{detail.likes}</p>
                    <RelationButt id={id} />
                    <CommentList list={detail.comments} />
                </div>
            }
        </div>
    )
}