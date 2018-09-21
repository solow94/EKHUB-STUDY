import React from 'react';
import queryString from 'query-string'

const About = ({ location, match }) => {

    const query = queryString.parse(location.search);

    const detail = query.detail === 'true';

    console.log(query);
    //?detail=true가 주소뒤에 붙어야만 detail: blahblah나옴
    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: blahblah'}
        </div>
    );
};

export default About;