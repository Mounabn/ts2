import React from 'react';

type GreetingProps = {
  name: string;
};

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Bonjour, {name} !</div>;
};

export default Greeting;
