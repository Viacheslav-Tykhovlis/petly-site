import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <TailSpin
        height="150"
        width="150"
        color="#ff751d"
        ariaLabel="loading-indicator"
      />
    </div>
  );
};
export default Loader;
