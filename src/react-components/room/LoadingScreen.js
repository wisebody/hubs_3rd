import React from "react";
import PropTypes from "prop-types";
import { LoadingScreenLayout } from "../layout/LoadingScreenLayout";
import { Spinner } from "../misc/Spinner";
//import { useRandomMessageTransition } from "./useRandomMessageTransition";
//LoadingScreen({logoSrc, message, infoMessages})
export function LoadingScreen({ logoSrc, message }) {
  //const infoMessage = useRandomMessageTransition(infoMessages);
  return (
    <LoadingScreenLayout
      logoSrc={logoSrc}
      center={
        <>
          <Spinner />
          <p>{message}</p>
        </>
      }
      bottom={<></>}
    />
  );
}

LoadingScreen.propTypes = {
  logoSrc: PropTypes.string,
  message: PropTypes.node,
  infoMessages: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.node.isRequired,
      message: PropTypes.node.isRequired
    })
  )
};

LoadingScreen.defaultProps = {
  infoMessages: []
};
