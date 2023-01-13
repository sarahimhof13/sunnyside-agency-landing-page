import styled from "styled-components";

export const TestimonialsContainer = styled.section`
    text-align: center;
`

export const TestimonialsHeading = styled.h4`
    margin-bottom: 64px;
    color: var(--grey);
    letter-spacing: 0.25rem;
`

export const TestimonialsCardContainer = styled.div`
    margin: 0 24px 64px 24px;

    :last-child {
        margin-bottom: 86px;
    }
`

export const AvatarImg = styled.img`
    width: 72px;
    height: 72px;
    border-radius: 100%;
    margin-bottom: 32px;
`

export const TestimonialBody = styled.p`
    margin-bottom: 32px;
    color: var(--medium-grey);
    line-height: 2rem;
`

export const PersonName = styled.p`
    font-family: 'Fraunces', serif;
    color: var(--dark-grey);
    margin-bottom: 9px;
`

export const PersonTitle = styled.p`
    font-size: 0.875rem;
    color: var(--grey);
`