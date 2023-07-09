import React from 'react';
import { colors } from './Theme';

import PythonLogo from './images/python.png';
import AWSLogo from './images/aws.png';
import PysparkLogo from './images/spark.png';
import OpenAILogo from './images/openai.png';
import PandasLogo from './images/pandas.png';
import AWSS3Logo from './images/s3.png';
import AWSStepFunctionsLogo from './images/stepfunctions.svg';
import AWSGlueLogo from './images/glue.png';
import AWSLambdaLogo from './images/lambda.png';

const skills = [
  { name: 'Python', logo: PythonLogo },
  { name: 'Pandas', logo: PandasLogo },
  { name: 'Pyspark', logo: PysparkLogo },
  { name: 'OpenAI', logo: OpenAILogo },
  { name: 'AWS', logo: AWSLogo },
  { name: 'AWS S3', logo: AWSS3Logo },
  { name: 'AWS Step Functions', logo: AWSStepFunctionsLogo },
  { name: 'AWS Glue', logo: AWSGlueLogo },
  { name: 'AWS Lambda', logo: AWSLambdaLogo },
];

const Skills = () => {
  return (
    <div style={skillsStyle}>
      {skills.map((skill, index) => (
        <div key={index} style={skillContainerStyle}>
          <img src={skill.logo} alt={skill.name} style={logoStyle} />
          <h3 style={skillTextStyle}>{skill.name}</h3>
        </div>
      ))}
    </div>
  );
};

const skillsStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '20px'
  };  

const skillContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '25px',
  fontSize: '.75em',
};

const logoStyle = {
    width: '80px', 
    height: '80px',
    marginBottom: '10px',
    borderRadius: '20%',
  };

const skillTextStyle = {
  fontFamily: 'system-ui',
  color: colors.text,
};
  

export default Skills;
