import { useAxios } from "./useAxios";
import {useState} from 'react';

const appAxios = () => {
    const { response, loading, error } = useAxios({
        method: 'GET',
        url: '/users',
        headers: { // no need to stringify
          accept: '*/*'
        },
        /* data: {  // no need to stringify
            userId: 15,
            id: 19392,
            title: 'titeele',
            body: 'Sampeele text'
        }, */
    });
    const [users, setUsers] = useState([]);
    return (
        <div className='appAxios' style={{paddingTop:'75px'}}>
            <h1>Posts</h1>

            {loading ? (
                <div>loading...</div>
            ) : (
                <div>
                    {error || (
                        <div>
                            <div>{(error as any).message}</div>
                        </div>
                    )}
                    <div> {
                      // no need to use another state to store data, response is sufficient
                      response && <p>{(response as any).id } ㅇㅇ</p>
                    }
                    </div>
                </div>
            )}
        </div>
    );
};

export default appAxios;