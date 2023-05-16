import { useParams } from 'react-router';

import Profile from './Profile';
import Password from './Password';
import EditProfile from './EditProfile';

const ProfilePage = () => {
  const { id } = useParams();

  if (id === 'password') {
    return <Password />;
  }

  if (id === 'edit') {
    return <EditProfile />;
  }

  return <Profile />;
};

export default ProfilePage;
