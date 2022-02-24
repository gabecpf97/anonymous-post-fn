import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { ErrorDetail, FetchedData } from '../../interfaces/myInterfaces';
import { Error } from '../general/Errors';
import { FormField } from '../general/FormField';
import { SubmitField } from '../general/SubmitField';
import { PostList } from './PostList';

export const SearchPost: React.FC = () => {
    const [text, setText] = useState<string>();
    const [posts, setPosts] = useState<string[]>();
    const [errors, setErrors] = useState<ErrorDetail[] | string>();

    const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault(); 
        // need to figure out how search should work (genre or text base)
        const response: Response = await fetch(`http://localhost:5000/post`);
        const data: FetchedData = await response.json();
        if (data.err) {
            setErrors(data.err);
        } else {
            setPosts(data.thePosts);
        }
    }

    return (
        <div>
            <form onSubmit={(e:SyntheticEvent) => handleSubmit(e)}>
                <FormField name='search' type='text' isRequired={true}
                    onChnageFn={onTextChange} />
                <SubmitField display='search' />
            </form>
            {posts && <PostList list={posts} />}
            {errors && <Error errors={errors} />}
        </div>
    )
}