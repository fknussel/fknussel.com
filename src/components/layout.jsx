import { Link as UnstyledGatsbyLink } from 'gatsby';
import React, { Fragment } from 'react';
import styled from 'styled-components';

import { avatarUrl, socialLinks } from '../data';
import { baseSansSerifStyles, baseFocusStateStyles } from '../styles/mixins';
import { Footer } from './footer';

const Header = styled.header`
    background-color: #fafafac9;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const HeaderContent = styled.div`
    padding: 18px 25px;
    @media (min-width: 768px) {
        margin: 0 auto;
        max-width: 832px;
    }
`;

const Link = styled(UnstyledGatsbyLink)`
    ${baseSansSerifStyles};
    ${baseFocusStateStyles};
    align-items: center;
    color: #333;
    display: flex;
    font-size: 22px;
    font-weight: 700;
    text-decoration: none;
    width: max-content;
`;

const Avatar = styled.img`
    border-radius: 50%;
    height: 35px;
    margin-right: 15px;
    width: 35px;
`;

const Content = styled.main`
    margin: 50px auto 75px;
    max-width: 832px;
    padding: 0 25px;
`;

export function Layout(props) {
    return (
        <Fragment>
            <Header>
                <HeaderContent>
                    <Link to="/">
                        <Avatar src={avatarUrl} alt="" />
                        F. Knüssel
                    </Link>
                </HeaderContent>
            </Header>
            <Content>{props.children}</Content>
            <Footer links={socialLinks} />
        </Fragment>
    );
}
