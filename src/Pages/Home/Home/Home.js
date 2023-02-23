import React from 'react';
import AllCategory1 from '../AllCategory1/AllCategory1';
import Banner from '../Banner/Banner';
import HighLifeExtraSection from '../HighLifeExtraSection/HighLifeExtraSection';
import HighlifeExtrasImageSection from '../HighlifeExtrasImageSection/HighlifeExtrasImageSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllCategory1></AllCategory1>
            <HighlifeExtrasImageSection></HighlifeExtrasImageSection>
            <HighLifeExtraSection></HighLifeExtraSection>
        </div>
    );
};

export default Home;