import React from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';
import links from '../../data/social';

// Wanted to give the container a 30px padding all around.
// Since the buttons have a vertical drop shadow of 6px, this means the bottom padding is 36px.
// But all buttons have a bottom margin of 18px in case they get stacked,
// meaning the container's bottom padding is: 30px + 6px - 18px = 18px

const Container = styled.nav`
    background-color: #f5f5f5;
    margin: 48px 0;
    padding: 30px 30px 18px;
    text-align: center;
    @media (min-width: 1024px) {
        background-color: transparent;
        padding: 0;
    }
`;

const Link = styled(Button)`
    margin-bottom: 18px;
    text-align: center;
    :not(:last-child) {
        margin-right: 10px;
    }
`;

export default function Social() {
    return (
        <Container aria-label="Social media links">
            {links.map(item => (
                <Link key={item.id} type={item.id} url={item.url}>
                    {item.name}
                </Link>
            ))}
        </Container>
    );
}