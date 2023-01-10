import styled from 'styled-components';
import style from '../../styles/Home.module.css'

const HeaderCont = styled.div`
width: 100%;
background-color: pink;
`


export default function Header() {
    return (
        <HeaderCont>
            <img src="./favicon.jpeg" style={{ width: "10%" }} />

        </HeaderCont>
    )

}