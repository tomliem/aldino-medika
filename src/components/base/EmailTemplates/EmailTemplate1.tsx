import * as React from 'react';

interface EmailTemplate1Props {
  firstName: string;
}

export const EmailTemplate1: React.FC<Readonly<EmailTemplate1Props>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);