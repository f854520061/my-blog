let initData = {
    todo: 'xzw'
}

export interface TodosTypes {
    count: string 
}

export default function todos (state = initData, action: any) {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todo: action.todo }
        default:
            return state
    }
}