import styled from 'styled-components';
import style from '../../styles/Home.module.css'

const Title = styled.h1`
color: #01355F;
font-family: Georgia;

`
const TitleCont = styled.div`
padding-top: 3rem;
padding-left: 3rem;
padding-right: 3rem;
display: flex;
align-items: center;
`

export default function LargeTitle() {
    return (
        <TitleCont>
            <Title>Travel with Expo Line</Title>
        </TitleCont>

    )

}