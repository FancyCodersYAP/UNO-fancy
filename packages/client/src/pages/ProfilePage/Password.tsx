import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from 'utils/constants';
import { DataType } from 'components/Form/Form';

import { passwordConfig } from '../configs';

import { USER } from './Profile';
import {
  StSaveButton,
  StAvatar,
  StUserName,
  StyledForm,
  inputCss,
} from './style';
import { useAppDispatch } from '../../hooks/redux';
import { fetchPassChange } from '../../store/user/actions';

const Password: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const changePassword = async (data: DataType) => {
    console.log(data);
    dispatch(fetchPassChange(data))
    navigate(AppRoute.PROFILE);
  };

  const avatar = <StAvatar image={USER?.avatar} />;
  const title = <StUserName>{USER?.first_name}</StUserName>;
  const footer = <StSaveButton text="Сохранить" type="submit" />;

  return (
    <StyledForm
      title={title}
      avatar={avatar}
      fields={passwordConfig}
      handleFormSubmit={changePassword}
      footer={footer}
      inputCss={inputCss}
    />
  );
};

export default Password;
