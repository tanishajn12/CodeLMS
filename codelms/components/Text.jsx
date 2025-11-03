'use client'
import React from 'react'
import { Button } from './ui/button';
import { toast } from 'sonner';

const Text=() => {
  const handleClick = (mode) => {
    mode? toast.success('Test success') : toast.error("test error");
  }
  return (
    <div>
       <Button className="bg-red-400" variant="default" onClick={() => handleClick(false)}> hello</Button>
    </div>
  );
}

export default Text