import {
  SpinnerContainer, Spinner, Skeleton, LoadingText,
} from './SpinnerFullscreen.style';

const SpinnerFullscreen = () => {
  return (
    <SpinnerContainer>
      <Spinner>
        <Skeleton />
      </Spinner>
      <LoadingText>Loading...</LoadingText>
    </SpinnerContainer>
  );
};

export default SpinnerFullscreen;
