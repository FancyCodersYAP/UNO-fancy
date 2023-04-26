import { StAvatar } from './style';
import styled from 'styled-components';
import { fetchAvatarChange } from 'store/User/profile/actions';
import { useAppDispatch } from 'hooks/redux';
import { StFlex } from '../../styles/global';
import { REDIRECT_URL } from 'store/constants';

interface IAvatar {
  image: string | undefined;
}

const API_RESOURCES = `${REDIRECT_URL}/api/v2/resources`;

const StImageInput = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
`;
const ProfileAvatar = ({ image }: IAvatar) => {
  const dispatch = useAppDispatch();

  const onAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('avatar', file);
      dispatch(fetchAvatarChange(formData));
    }
  };
  const avatar = image && API_RESOURCES + image;

  return (
    <StFlex flexDirection="column" alignItems="center">
      <label>
        <StImageInput type="file" onChange={onAvatarChange} />
        <StAvatar image={avatar} />
      </label>
    </StFlex>
  );
};
export default ProfileAvatar;
