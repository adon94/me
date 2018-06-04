import React from 'react';
import Typography from '@material-ui/core/Typography';

const Titles = () => {
  const whiteText = {
    color: 'white',
  }
  return (
    <div className="wide-center with-margin">
      <Typography variant="headline" gutterBottom style={whiteText} className="titles">
        Adam O'Neill
      </Typography>
      <Typography variant="subheading" gutterBottom style={whiteText} className="titles">
        Frontend Developer
      </Typography>
    </div>
  )
}

export default Titles;