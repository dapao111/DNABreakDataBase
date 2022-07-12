import styled from 'styled-components';

const NavStyle = styled.ul `
margin:0;
padding:0;
display:flex;
justify-self:end;
font-size:1rem;
align-self: center;
a,
button{
    padding:1rem 3rem;
    display:flex;
    align-items:center;
    position:relative;
    text-transform:uppercase;
    font-weight:500;
    font-size:1em;
    background:grey;
    border:0;
    cursor:pointer;
    align-items: center;
    @media(max-width:700px){
        font-size:5px;
        padding:0 5px;
    }
    &:before{
        content:'';
        width:1px;
            height:100%;
        left:2;
        position:absolute;
        transform:skew(-10deg);
        top:0;
        bottom:0;
        align-items: center;
    }
    &:after{
        height:1px;
        background :red;
        content:'';
        width:0;
        position:relative;
        transform:translatex(-50%);
        transition:width 0.4s;
        transition-timing-function:cubic-bezier(1,-0.65,0,2.31);
        left:50%;
        margin-top:2rem;
        align-items: center;
    }
    &:hover{
        background-color: blueviolet;
    },

}
@media(max-width:1300px){
    border-top: 1px solid;
    width:100%;
    justify-content:center;
    font-size:1rem;   
} `;
    
export default NavStyle