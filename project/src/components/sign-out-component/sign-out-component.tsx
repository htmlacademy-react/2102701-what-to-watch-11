import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';

function SignOutComponent(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <div className="user-block">
        <Link
          to='/'
          onClick={
            () => {
              dispatch(logoutAction());
            }
          }
          className="user-block__link"
        >
          Sign out
        </Link>
      </div>
    </ul>
  );
}

export default SignOutComponent;
