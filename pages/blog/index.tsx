import { GetServerSideProps } from 'next';
import axios from 'axios';
import Link from 'next/link';

const fetchData = async () => await axios.get('http://localhost:3000/api/blog')
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
  console.log(data);
  return (
    <>
      <header>
        <h1>List of users</h1>
      </header>
      {error && <div>There was an error.</div>}
      {!error && data && (
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
            {data.map((blog: any, key: any) => (
              <tr key={key}>
                <td>
                  <Link href={`http://localhost:3000/blog/${blog.id}`} >
                    {blog.name}
                  </Link>
                </td>
                <td>{blog.title}</td>
                <td>{blog.content}</td>
                <td>{blog.create_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </>

  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {

  const data = await fetchData();
  return { props: data, };
};
