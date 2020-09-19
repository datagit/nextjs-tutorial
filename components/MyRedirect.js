import React, {useEffect} from 'react';
import Router, {useRouter} from 'next/router';

const MyRedirect = () => {
    const router = useRouter();
    return (
        <>
            <button type="button" onClick={() => router.push('/about')} >go to about</button>
        </>
    );
}
export default MyRedirect;