// import { useState, useEffect } from 'react';
import { getAllComments } from '../utilits/fetch';

export const App = () => {
  getAllComments().then(response => console.log(response.data.comments));
  return <div>My new Template</div>;
};