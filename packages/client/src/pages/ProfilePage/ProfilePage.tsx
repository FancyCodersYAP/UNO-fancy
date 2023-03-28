import { useParams } from 'react-router';

import Profile from './Profile';
import Password from './Password';

const ProfilePage = () => {
  const { id } = useParams();

  if (id === 'password') {
    return <Password />;
  }

  return <Profile />;
};

export default ProfilePage;
