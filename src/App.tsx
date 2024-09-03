import FormTw from './components/FormTw'
import TweetDetail from './components/TweetDetail'

function App() {
  return (
    <main className=" mx-auto text-white flex flex-col items-center h-screen  space-y-4 bg-gray-900">
    <FormTw/>
    <section>
    <TweetDetail/>
    </section>
    </main>
  );
}

export default App;
