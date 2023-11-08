import {useRouter} from 'next/router'



export default function Posts() {

    const router = useRouter();
    const { postId } = router.query

    return(
        <div>
            <h1>Página Posts</h1>
        </div>
    )
};