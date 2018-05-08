import React from 'react';
import * as style from './style.scss';

import { Button, Flexbox } from '../../components';


const Login = () => (
  <Flexbox justifyContent='center' flexDirection='column' clazz={style.flexbox}>
    <p className={style.title}>A better way</p>
    <p className={style.title}>to enjoy every day.</p>
    <p className={style.subTitle}>Be the first to know when we launch.</p>
    <div className={style.btn}>
      <Button text='Request an invite' className={style.button} />
    </div>
  </Flexbox>
);

export default Login;