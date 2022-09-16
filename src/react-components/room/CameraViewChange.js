import React, { useState } from "react";
import styles from "./CameraViewChange.scss";

export function CameraViewChange() {
  const [cameraCheck, setCameraCheck] = useState(false);
  const [cameraText, setCameraText] = useState("3인칭");

  const checkHandler = () => {
    setCameraCheck(!cameraCheck);
    if (cameraCheck) {
      window.APP.store.state.preferences.isThirdPerson = true;
      setCameraText("3인칭");
    } else {
      window.APP.store.state.preferences.isThirdPerson = true;
      setCameraText("1인칭");
    }
  };

  return (
    <div className={styles.camera_change_button} onClick={checkHandler}>
      <input type="checkbox" id="cameraSwitch" />
      <label>
        <span className={cameraCheck ? styles.text_right : styles.text_left}>{cameraText}</span>
      </label>
      <div className={`${styles.circle} ${cameraCheck ? null : styles.active}`}>
        <svg
          data-name="User"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          color="#000"
        />
      </div>
    </div>
  );
}
