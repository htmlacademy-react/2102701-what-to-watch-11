import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';

type AppScreenProps = {
  title: string;
  genre: string;
  date: number;
}

function App({title, genre, date}: AppScreenProps): JSX.Element {
  return (
    <WelcomeScreen title={title} genre={genre} date={date}/>
  );
}

export default App;
