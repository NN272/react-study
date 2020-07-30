import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hello, this is post 1'}, 
                {id: 2, message: 'Hello, this is post 2'}],
            newTextData: 'example'
        },
        dialogsPage: {
            contactData: [
                {id: 1, name: 'Andrii'},
                {id: 2, name: 'Kolia'},
                {id: 3, name: 'Petya'},
                {id: 4, name: 'Dima'},
                {id: 5, name: 'Max'},
                {id: 6, name: 'Eugene'},
                {id: 7, name: 'Daniil'},
                {id: 8, name: 'Vania'},
                {id: 9, name: 'Max'},
                {id: 10, name: 'Eugene'},
                {id: 11, name: 'Daniil'},
                {id: 12, name: 'Vania'},
                {id: 13, name: 'Max'},
            ],
            messagesData: [
                {id: 1, text: 'Hi'},
                {id: 2, text: 'How it\'s going'},
                {id: 3, text: 'Hello'},
                {id: 4, text: 'Privet'}
            ],
            newMessageData: 'example'
        },
        sidebar: {}
    },
    subscribe(observer) {
        store._callSubscriber = observer; // pattern observer
    },
    
    getState() {
        return store._state;
    },
    _callSubscriber() {
        console.log("State changed!");
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        store._callSubscriber(store._state);
    }
}

window.store = store;
export default store;