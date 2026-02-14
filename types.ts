
import React from 'react';

export interface Service {
  id: number;
  title: string;
  urduTitle: string;
  description: string;
  // Fix: Added React import to define React.ReactNode
  icon: React.ReactNode;
}

export interface FormData {
  name: string;
  mothersName: string;
  problem: string;
  phone: string;
}
