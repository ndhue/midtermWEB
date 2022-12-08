import React from 'react';
import { Route } from 'react-router-dom';

export default function HomeTemplate(props) {
  const { exact, path, element } = props;
  return (
    <>
      <Route exact={exact} path={path} element={element} />
    </>
  )
}
