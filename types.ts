
import React from 'react';

export interface Service {
  id: number;
  title: string;
  urduTitle: string;
  description: string;
  icon: React.ReactNode;
}

export interface FormData {
  name: string;
  mothersName: string;
  problem: string;
  phone: string;
}
