import React from 'react';
import Obfuscate from 'react-obfuscate';
import styled from 'styled-components';

import waveEmoji from '../assets/1f44b.svg';
import { Layout } from '../components/layout';
import { baseLinkStyles, baseParagraphStyles, baseTitleStyles } from '../styles/mixins';

const Title = styled.h1`
    ${baseTitleStyles};
    align-items: center;
    display: flex;
`;

const Image = styled.img`
    height: 34px;
    margin-left: 10px;
    width: 34px;
`;

const Paragraph = styled.p`
    ${baseParagraphStyles};
`;

const Email = styled(Obfuscate)`
    ${baseLinkStyles};
`;

const Link = styled.a`
    ${baseLinkStyles};
`;

const AboutPage: React.FC = () => (
    <Layout>
        <Title>
            Hi! <Image src={waveEmoji} alt="" />
        </Title>
        <Paragraph>
            I&apos;m a software engineer with a keen interest in web development, and I help teams
            ship clean and maintainable code. I enjoy working on large scale web applications, and
            am particularly interested in accessibility, automated testing and functional reactive
            programming.
        </Paragraph>
        <Paragraph>
            I currently work as a Front End Developer at{' '}
            <Link href="https://atlassian.com" target="_blank" rel="noopener noreferrer">
                Atlassian
            </Link>
            .
        </Paragraph>
        <Paragraph>
            Feel free to reach out on{' '}
            <Link href="https://twitter.com/fknussel" target="_blank" rel="noopener noreferrer">
                Twitter
            </Link>{' '}
            or flick me an email at <Email email="fknussel@gmail.com" />.
        </Paragraph>
    </Layout>
);

export default AboutPage;
