import { React } from 'react';
import { useQuery,gql } from '@apollo/client';
import client from './libs/apollo_config'
import styles from '../styles/Home.module.css'
import Link from 'next/link';



const get_bed_file_datas = gql`
query all_data {
  dataFiles{
    type
    id
    name
    content{
      filename
      filesize
      url
    }
  }
}
`

export default function Browser({dataFiles}) {
    // if(loading) return <p>loading...</p>
    // if(error) return <p>Error:{error.message}</p>
    return ( 
    <div >
           {dataFiles?.map(data_file=>
           (
                <div className={styles.fileListStyle}>
                  <Link href={data_file.content.url} key={data_file.id}>
                    {data_file.name}
                  </Link>
                  
                  <p>data_file_id:{data_file.id}</p>
                  <p>dataSize:{Math.floor(data_file.content.filesize/1024)}kb</p>                  
                  <a  className={styles.DownloadButton} href={data_file.content.url} >Download Data</a>
                  <></>
                  </div>
            ))}
      </div>
    )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: get_bed_file_datas,
  });

  return {
    props: {
      dataFiles: data?.dataFiles,
    },
  };
}
