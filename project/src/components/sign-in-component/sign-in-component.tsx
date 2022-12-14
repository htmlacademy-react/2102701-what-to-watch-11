import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { AppRoute } from '../../const';

function SignInComponent(): JSX.Element {
  const navigate = useNavigate();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div onClick={() => navigate(AppRoute.SignIn)} className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <div className="user-block">
        <Link to='/login' className="user-block__link">Sign in</Link>
      </div>
    </ul>
  );
}

export default SignInComponent;
