import Layout from 'components/layout'
import { useEffect } from 'react';
import useSwr from 'swr';
import { signIn, signOut, useSession } from 'next-auth/client'

const fetcher = (url) => fetch(url).then((res) => res.json())


const Index = () => {
    const [session, loading] = useSession();

    const { data, error } = useSwr('/api/user/list', fetcher);

    return <Layout>
        {!session && <>
            Not signed in <br />
            <button onClick={signIn}>Sign in</button>
        </>}
        {session && <>
            Signed in as {session.user.email} <br />
            <button onClick={signOut}>Sign out</button>
        </>}
    </Layout>
};

export default Index;