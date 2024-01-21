function LittleGuy({ position }) {
    const style = {
      width: '50px',
      height: '50px',
      backgroundColor: 'red',
      position: 'absolute',
      left: position.x,
      top: position.y,
      zIndex: 1000
    };
  
    return <div style={style}></div>;
  }

  export default LittleGuy;