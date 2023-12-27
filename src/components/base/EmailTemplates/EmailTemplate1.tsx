import * as React from 'react';

interface EmailTemplate1Props {
  customerName: string;
}

export const EmailTemplate1: React.FC<Readonly<EmailTemplate1Props>> = ({
  customerName,
}) => (
  <div>
    <h1>Welcome, {customerName}!</h1>
  </div>
);