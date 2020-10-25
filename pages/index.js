import Layout from 'components/layout'
import { useEffect } from 'react';
import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())


const Index = () => {
    const { data, error } = useSwr('/api/user/list', fetcher);

    return <Layout>

    </Layout>
};

export default Index;