import Loader from "react-loader-spinner";
import styled from 'styled-components'

const StyledLoader = styled(Loader)`
  margin: auto;
  width: 100px; /* Need a specific value to work */
`

export const LoadingSpinner = () => {


    return (
      <StyledLoader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000} //10 secs
      />
    );
}