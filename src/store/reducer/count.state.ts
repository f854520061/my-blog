let initData = {
    count: 1
}

export interface CountTypes {
    count: number 
}

export default function counts (state = initData, action: any) {
    switch (action.type) {
        case 'ADD':
            return { ...state, count: action.count }
        default:
            return state
    }
}