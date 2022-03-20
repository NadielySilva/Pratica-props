import styled from "styled-components";

const List = styled.ul`
    width: 50vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-position: inside;
    list-style-type: none;
    border-radius: 0 0 30px 30px;
    background-color: pink;
`;

const ListItem = styled.li`
    font-family: 'Lato', sans-serif;
    font-size: 1.25em;
`;

const About = ({children, name, age, subject}) => {

    return(
        <List>
            <ListItem>Meu nome é {name}</ListItem>
            <ListItem>tenho {age} anos</ListItem>
            <ListItem>e estou estudando {subject}.</ListItem>
            {children}
        </List>
    )
};

export default About;
