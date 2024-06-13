export default function (state = null, action: any) {
    switch (action.type) {
        case "CONTACT_SELECTED":
            return action.payload;
    }
    return state;
}
