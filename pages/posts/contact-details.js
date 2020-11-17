import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { information } from '../../components/shared/data'
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import PhoneIcon from '@material-ui/icons/Phone';



export default function FirstPost() {
    return (
        <div>
            <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                <img src={information[0].image} />
                <Grid container direction="row" alignItems="center">
                    <EmailIcon /> {information[0].email}
                </Grid>
                <Grid container direction="row" alignItems="center">
                    <PhoneIcon /> {information[0].phone}
                </Grid>
            </Layout>
        </div>
    )
}