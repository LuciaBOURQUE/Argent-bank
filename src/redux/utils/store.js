// 1- Création des STATES dans un objet (objet)

// 2- Une fois les states fait, on va définir des ACTIONS (Actions Creators - objet)
// que l'on exportera par la suite dans les composants que l'on souhaite à l'aide de useDispatch
// Pour les actions fonctionner par des constantes pour éviter les erreurs de code

// 3- Création de REDUCER (fonction) avec en paramètres le state et l'action
// On utilisera combineReducer pour récupérer tous les reducers et ainsi minimiser notre state initial
// On va également utiliser immer pour pouvoir changer les states initiales

// 4- Création du STORE (objet) avec en paramètres le reducer et le state (à exporter à la fin)

import { configureStore, combineReducers } from "@reduxjs/toolkit"
import userSlice from "../features/userSlice"

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
  user: userSlice,
})

const store = configureStore({
  reducer: reducers,
  reduxDevtools,
})

export default store
