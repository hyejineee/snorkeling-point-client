import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import RoundGradientButton from '@components/commons/button/roundGradientButton/roundGradientButton';
import NormalInput from '@components/commons/inputs/normalInput/normalInput';
import {
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
} from '@constants/placeholder';
import { ErrorText } from '@styles/common.styles';
import Link from 'next/link';
import * as S from './login.styles';
import { LoginUIPropsType } from './login.types';

export default function LoginUI({
  control,
  errors,
  onClickLogin,
}: LoginUIPropsType) {
  return (
    <S.PageWrapper>
      <S.Wrapper>
        <S.Title>Login</S.Title>

        <S.InputWrapper>
          <NormalInput
            control={control}
            name="email"
            type="email"
            placeholder={EMAIL_PLACEHOLDER}
            prefix={<UserOutlined />}
          />
          <ErrorText>{errors.email?.message || ''}</ErrorText>
        </S.InputWrapper>

        <S.InputWrapper>
          <NormalInput
            control={control}
            name="password"
            type="password"
            placeholder={PASSWORD_PLACEHOLDER}
            prefix={<KeyOutlined />}
          />
          <ErrorText>{errors.password?.message || ''}</ErrorText>
        </S.InputWrapper>

        <S.LoginButtonWrapper>
          <RoundGradientButton value="로그인" onClick={onClickLogin} />
        </S.LoginButtonWrapper>

        <p>
          아직 계정이 없으신가요?
          <Link href="/auth/join">
            <u>회원가입</u>
          </Link>
        </p>

        <p>
          비밀번호를 잊어버리셨나요?
          <Link href="/auth/reset-password">
            <u>비밀번호 재설정</u>
          </Link>
        </p>
      </S.Wrapper>
    </S.PageWrapper>
  );
}
