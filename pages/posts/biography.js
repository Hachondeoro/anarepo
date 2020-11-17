import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { information } from '../../components/shared/data'


export default function FirstPost() {
    return (
        <div>
            <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                <h1>{information[0].name}</h1>
                <img src={information[0].image} />
                <p>{information[0].description}</p>
            </Layout>
        </div>
    )
}
// { require(`../assets/images/${logo}`) }

