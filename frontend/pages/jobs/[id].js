
import Layout from '../../components/layout/Layout';
import JobDetails  from '../../components/Job/JobDetails';


import axios from 'axios'

export default function JobDetailPage({ job, condidates,error }) {
    console.log(error)

    if(error === 'NotFound') return <NotFound/>

    return (
        <Layout>
            <JobDetails job={job} condidates={condidates}/>
        </Layout>
    );
}

export async function getServerSiderProps({ prams }) {
    try {
        const res = await axios.get(`${process.env.API_URL}/api/jobs/${prams.id}/`);
        console.log(res.data)
        const job = res.data.job;
        const condidates = res.data.condidates

        return {
            props: {
                job,

                condidates
            },
        };

    } catch (error) {
        return {
            props: {
                error: error.response.data.detail
            }
        }

    }

}