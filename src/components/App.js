import React from 'react';
import Search from './Search';
import Task from './Task';
import CreateTask from './CreateTask';

import ApolloClient from 'apollo-client';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';

const createApolloClient = (authToken) => {
  return new ApolloClient({
    link: new WebSocketLink({
      uri: 'wss://test-323.herokuapp.com/v1/graphql',
      options: {
        reconnect: true,
        connectionParams: {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      },
    }),
    cache: new InMemoryCache(),
  });
};

const App = () => {
  // // const { loading, logout } = useAuth0();
  // if (loading || !idToken) {
  //   return <div>Loading...</div>;
  // }

  const bearerToken =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im1xTFFXMDlNTUxRMUNNZGJpV3cwSyJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImdpdGh1YnwyNjE3NDczOCJ9LCJuaWNrbmFtZSI6Ik1LUy0wMSIsIm5hbWUiOiJNS1MiLCJwaWN0dXJlIjoiaHR0cHM6Ly9hdmF0YXJzMC5naXRodWJ1c2VyY29udGVudC5jb20vdS8yNjE3NDczOD92PTQiLCJ1cGRhdGVkX2F0IjoiMjAyMC0wNy0wNFQwODozMTo1My44OTlaIiwiaXNzIjoiaHR0cHM6Ly90ZXN0LTMyMy51cy5hdXRoMC5jb20vIiwic3ViIjoiZ2l0aHVifDI2MTc0NzM4IiwiYXVkIjoiTXJVUzNzWUxKVFNaWjMyaVIzeDlIcEFidzM5VlVSVWgiLCJpYXQiOjE1OTM4NTE1MTQsImV4cCI6MTU5Mzg4NzUxNCwiYXRfaGFzaCI6IjV0T1lraVJpdVVFUTA2UGRnbFR3RnciLCJub25jZSI6InRQTHhBS3dGeXQ0QnJQVWNIOUFaMkQ4bW1kTkNUdjJlIn0.w1j4pq7zrWPQ93qnHeUb24zkVsZY2iZm3rM_oraMNerXJtO44NSfCs_FIPx37oQatSSGC6qcoVlOyP3yytGU-bae9hmblEnIozmByIZt_Ke02gmiu-VtbsYpvUukgJNRqY1tlCWqxSEDfq0ceaZIpXtzO_5AkrS8k6SjMfkh3fMP6_U8X0qH7jVC2CT70CqleDzALMa-P_RQcFouJWQ2hGod_I1graI_WOQBma9E8AFGYAgTw7u5qyl-bJxPe7cfjYQq38LoXYIP_wm65GmXkwfjWXEzfZ5K5k4w_rWiWfuZs29lRoSs8tO-FjEahcBJ-w1kqslrBTMV_mGLqeie3A';
  const client = createApolloClient(bearerToken);
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <header className='App-header'></header>
        <div className='wrapper'>
          <header className='header'>
            <Search />
          </header>
          <div className='main'>
            <Task />
            <CreateTask />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
