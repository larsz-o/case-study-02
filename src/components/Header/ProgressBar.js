import React from 'react';

const ProgressBar = (props) => {
    const { completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      marginRight: '2vw',
      marginTop: '2vh'
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: '#cb007d',
      borderRadius: 'inherit',
      textAlign: 'right'
    }
    const labelStyles = {
        color: 'white',
        fontSize: '.8rem'
      }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
        </div>
        <span style={labelStyles}>progress</span>
      </div>
    );
  };
  
  export default ProgressBar;