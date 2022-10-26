import {Link} from 'react-router-dom';

function Error404Screen(): JSX.Element {
  return (
    <section className="game__screen">
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}

export default Error404Screen;
