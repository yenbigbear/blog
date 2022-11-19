import { GetServerSideProps } from 'next';
import axios from 'axios';
import Link from 'next/link';

const fetchData = async (id: string='') => await axios.get('http://localhost:3000/api/blog' + id)
  .then(res => ({
    error: false,
    data: res.data,
  }))
  .catch(() => ({
    error: true,
    data: null,
  }),
  );

const Index = ({ data, error }: any) => {
  return (
    <>
      <header>
        <h1>List of users</h1>
      </header>
      {error && <div>There was an error.</div>}
      {!error && data && (
        <>
          <table className="mytable">
            <thead>
              <tr>
                <th>Name</th>
                <th>標題</th>
                <th>內容</th>
                <th>時間</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data: any, key: any) => (
                <tr key={key}>
                  <td>
                    {data.name}
                  </td>
                  <td>{data.title}</td>
                  <td>{data.content}</td>
                  <td>{data.create_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link href="http://localhost:3000/blog">回主頁面</Link>
        </>
      )}

    </>

  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const valueid: string = '?id='+context.query.id || '';
  const data = await fetchData(valueid);
  return { props: data, };
};
