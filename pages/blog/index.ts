import { GetServerSideProps } from "next";

export default function Index({data: any}) {
    return data.map((v) => (
        {v.name, v.title, v.content}
    ));
}

export const getServerSideProps: GetServerSideProps = async () => {
    const data: Response = await fetch('http://localhost:3000/api/blog');
    return {
        props:{
            data,
        }
    }
};