
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

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  content: string;
  date: string;
  tags?: string[];
  isDraft?: boolean;
  imageUrl?: string;
}
