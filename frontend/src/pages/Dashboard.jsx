import React from 'react';

import {List} from '../constants/list';
import Card from '../components/Card';

import '../styles/dashboard.scss'

const Dashboard = () => {
    const cards = List.map((current , indx) => <Card key={indx} item={current} setFunction={()=>console.log('hola')}/>)
    return (
        <>
            <h1>Lista de grupos</h1>
            <section className='cards'>
            {cards}
            </section>
        </>
    )
};

export default Dashboard;
