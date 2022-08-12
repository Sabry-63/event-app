import React from 'react';

import CopyRight from '../components/Copy';

import FormApp from '../components/Form';
import Header from '../components/Header';
import Speakers from '../components/Speakers';
export default function FormPage() {
    return (
        <>
            {' '}
            <Header title={'Event'} />
            <FormApp />
            <Speakers />
            <CopyRight />
        </>
    );
}
