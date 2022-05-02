import React from 'react';
import styles from './Home.module.css';
import { Link, useHistory } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
    const signInLinkStyle = {
      color: "#5c50fc",
      fontWeight: "bold",
      textDecoration: "none",
      marginLeft: "10px",
    };
    const history = useHistory();
    function startRegister() {
        history.push('/authenticate');
    }
    return (
      <div className={styles.cardWrapper}>
        <Card title="Welcome to our VoiceChatRoom!" icon="logo">
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim
            officiis esse voluptatum maxime eos, nobis asperiores, porro placeat
            odio optio vel, omnis natus praesentium dolor laborum explicabo
            autem!
          </p>
          <div>
            <Button onClick={startRegister} text="Let's Go" />
          </div>
          <div className={styles.signinWrapper}>
            <span className={styles.hasInvite}>Have an invite text?</span>
          </div>
        </Card>
      </div>
    );
};

export default Home;
