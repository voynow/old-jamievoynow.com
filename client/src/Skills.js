import React from 'react';

import PythonLogo from './assets/python.png';
import AWSLogo from './assets/aws.png';
import PysparkLogo from './assets/spark.png';
import OpenAILogo from './assets/openai.png';
import PandasLogo from './assets/pandas.png';
import AWSS3Logo from './assets/s3.png';
import AWSStepFunctionsLogo from './assets/stepfunctions.svg';
import AWSGlueLogo from './assets/glue.png';
import AWSLambdaLogo from './assets/lambda.png';

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
          <p>{skill.name}</p>
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
  fontSize: '1em',
};

const logoStyle = {
    width: '80px', 
    height: '80px',
    marginBottom: '10px',
    borderRadius: '15%',
  };
  

export default Skills;
