
const initialState = {
    counterValue: 0
}

export default function counterReducer(state = initialState, action: { type: string; }){

    switch (action.type)
    {
        case 'INCREMENT':
            console.log('M I here');
            return {counterValue: state.counterValue + 1};

        case 'DECREMENT':
            return {counterValue: state.counterValue - 1};

        default:
            return state;
    }
}