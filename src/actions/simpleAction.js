import { client } from '../connectDirectus';

export const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: fetchAllItems()
    })
}

async function fetchAllItems() {
    const data = await client.getItems("posts");
    return data;
}