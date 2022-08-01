import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap'); 
@import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&family=Playball&display=swap');

/* 	
	font-family: 'Lexend Deca', sans-serif;
	font-family: 'Playball', cursive;
    font-family: 'Righteous', cursive;
	font-family: 'Roboto', sans-serif; 
    font-family: 'Recursive', sans-serif;
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
*/

ion-icon[name="add-outline"]{
	color: #ffffff;
	width: 40px;
	height: 30px;
}
ion-icon[name="checkmark-outline"]{
	color: #ffffff;
	width: 60px;
	height: 48px;
}
ion-icon[name="trash-outline"]{
	width: 20px;
	height: 28px;
}
ion-icon[name="checkmark-outline"]:hover{
	cursor: pointer;
    filter: brightness(1.5);
}
ion-icon[name="add-outline"]:hover{
	cursor: pointer;
    filter: brightness(1.5);
}
ion-icon[name="trash-outline"]:hover{
	cursor: pointer;
    filter: brightness(1.5);
}
*, *:before, *::after{
    box-sizing: border-box;
	scroll-behavior: smooth;
	word-wrap: break-word;
	word-break: break-all;
}
a{
    text-decoration: none;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
#root{
    overflow-x: hidden;
}
button div{
	display:flex;
	align-items: center;
	align-content: center;
	justify-content: center;
}
body{
    height: 100vh;
	width: 100vw;
	background-color: #E5E5E5;
}
button:hover{
	cursor: pointer;
    filter: brightness(1.1);
    box-shadow: 1px 1px 2px 1px #126BA5;
}
.react-calendar{
    font-family: 'Righteous', cursive;
	width: 1400px;
	border: #126BA5;
	-webkit-border-radius: 53px;
	-moz-border-radius: 53px;
	border-radius: 12px;
	margin-top: 20px;
}
.react-calendar button{
	height: 60px;
    font-family: 'Righteous', cursive;
	width: 1400px;
	border: #126BA5;
	-webkit-border-radius: 53px;
	-moz-border-radius: 53px;
	border-radius: 12px;
}
`