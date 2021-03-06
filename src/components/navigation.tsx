import { Link as UnstyledGatsbyLink } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';

import avatarSrc from '../assets/1f468-200d-1f4bb.svg';
import { baseFocusStateStyles, fontFamilySansSerif, sizeContainerSmall } from '../styles/mixins';

const Container = styled.header`
    background-color: #fafafac9;
    position: relative;

    &::after {
        background: linear-gradient(
            180deg,
            rgba(9, 30, 66, 0.13) 0,
            rgba(9, 30, 66, 0.13) 1px,
            rgba(9, 30, 66, 0.08) 1px,
            rgba(9, 30, 66, 0) 4px
        );
        content: '';
        height: 4px;
        left: 0;
        position: absolute;
        right: 0;
        top: 100%;
    }
`;

const Content = styled.div`
    align-items: center;
    display: flex;
    overflow-y: scroll;
    padding: 14px 0 14px 25px;

    @media (min-width: ${sizeContainerSmall}) {
        margin: 0 auto;
        max-width: 832px;
    }
`;

const LogoLink = styled(UnstyledGatsbyLink)`
    ${baseFocusStateStyles};
    align-items: center;
    display: flex;
    margin-right: 20px;
    text-decoration: none;
    width: max-content;
`;

const Avatar = styled.img`
    height: 24px;
    margin-right: 10px;
    width: 24px;
`;

const SiteName = styled.span`
    align-items: center;
    color: #344563;
    font-family: ${fontFamilySansSerif};
    font-size: 17px;
    font-weight: 550;
    white-space: nowrap;
`;

const List = styled.ul`
    display: flex;
    margin: 0;
    padding-left: 0;
`;

const ListItem = styled.li`
    color: #344563;
    display: inline-block;
    font-size: 14px;
    font-weight: 450;
    list-style: none;

    &:not(:last-child) {
        margin-right: 4px;
    }

    // Can't rely on the padding in Content as it's not working in iOS
    &:last-child {
        margin-right: 25px;
    }
`;

const baseNavigationLinkStyles = css`
    ${baseFocusStateStyles};
    border-radius: 3px;
    color: #344563;
    display: inline-block;
    font-family: ${fontFamilySansSerif};
    padding: 4px 6px;
    text-decoration: none;
    transition: background-color 0.1s ease-out,
        box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38);

    &:hover {
        background-color: rgba(222, 235, 255, 0.9);
        color: #0052cc;
        text-decoration: none;
    }
`;

const ListItemExternalLink = styled.a`
    ${baseNavigationLinkStyles};
`;

const ListItemInternalLink = styled(UnstyledGatsbyLink)`
    ${baseNavigationLinkStyles};
`;

export const Navigation: React.FC = () => (
    <Container>
        <Content>
            <LogoLink to="/">
                <Avatar src={avatarSrc} alt="" />
                <SiteName>Federico Knüssel</SiteName>
            </LogoLink>
            <List>
                <ListItem>
                    <ListItemInternalLink to="/">Archive</ListItemInternalLink>
                </ListItem>
                <ListItem>
                    <ListItemInternalLink to="/about">About</ListItemInternalLink>
                </ListItem>
                <ListItem>
                    <ListItemExternalLink
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/fed"
                    >
                        GitHub
                    </ListItemExternalLink>
                </ListItem>
                <ListItem>
                    <ListItemExternalLink
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/fknussel"
                    >
                        Twitter
                    </ListItemExternalLink>
                </ListItem>
            </List>
        </Content>
    </Container>
);
