import React, { useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamComponent = () => {

  const webcamRef = React.useRef(null);
  const [image, setImage] = useState(null);
  
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImage(imageSrc)
  }, [webcamRef, setImage])

  const postImage = async () => {
    const formData = new FormData();
    formData.append('image', image);
    const response = await fetch('http://localhost:8080/image/predict', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    console.log(data);
  }


  if (image) {
    return (
      <>
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
          />
    
        <button onClick={capture}>Capture Photo</button>
      </>
    )
  } else {
    return (
      <>
        <img src={image} alt="Captured webcam input." />
        <button onClick={setImage(null)}>Retake</button>
        <button onClick={postImage}>Post Image</button>
      </>
    )
  }





};

export default WebcamComponent;