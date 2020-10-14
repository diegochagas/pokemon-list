import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    .list-group {
        width: 300px;
    }
    
    .list-group-item {
        display: flex; 
        align-items: center;
        justify-content: space-between;
    }
`;
