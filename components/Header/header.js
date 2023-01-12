import styled from 'styled-components';
import style from '../../styles/Home.module.css'

const HeaderCont = styled.div`
width: 100vw;
background-color: white;
height: 6rem;
display: flex;
align-items: center;
`
const Logo = styled.div`
padding-left: 2rem;
`


export default function Header() {
    return (
        <HeaderCont>
            <Logo>
                <img src="./logo.png" style={{ width: "40%" }} />
            </Logo>
        </HeaderCont>
    )

}