import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        colorCount: 6,
        isHard: true,
        colors: [],
        pickedColor: 0,
        colorDisplayText: '',
        headerBackgroundColor: '',
        restartButtonText: '',
        messageDisplayText: '',
    },

    actions: {
        getIsHard({ commit }) {
            commit('getIsHard')
        },
        difChanged({ commit }, isHard) {
            commit('difChanged', isHard)
        },
        pickColor({ commit }) {
            commit('pickColor')
        },
        restart({ commit }) {
            commit('restart')
        },
        setAllColorsTo({ commit }, color) {
            commit('setAllColorsTo', color)
        },
        checkSelection({ commit }, clickedSquare) {
            commit('checkSelection', clickedSquare)
        },
    },

    mutations: {
        getIsHard(state) {
            return state.isHard;
        },
        difChanged(state, isHard) {
            state.isHard = isHard;
            state.colorCount = isHard ? 6 : 3;
            this.restart();
        },
        pickColorstate(state) {
            let quantity;
            if (state.isHard) {
                quantity = 6;
            } else {
                quantity = 3;
            }
            return Math.floor(Math.random() * quantity);
        },
        createNewColors(numbers) {
            let arr = [];
            for (let i = 0; i < numbers; i++) {
                arr.push(this.createRandomStringColor());
            }
            return arr;
        },
        createRandomStringColor() {
            let newColor =
                "rgb(" +
                this.randomInt() +
                ", " +
                this.randomInt() +
                ", " +
                this.randomInt() +
                ")";
            return newColor;
        },
        randomInt() {
            return Math.floor(Math.random() * 256);
        },
        restart(state) {
            state.colors = this.createNewColors(state.colorCount);
            state.pickedColor = state.colors[this.pickColor()];
            state.colorDisplayText = state.pickedColor;
            state.textContent = "Pick New Colors!";
            state.headerBackgroundColor = "steelblue";
            state.messageDisplayText = "";
            state.restartButtonText = "New Colors!";
        },
        setAllColorsTo(state, color) {
            let newColors = [];
            for (let i = 0; i < state.colorCount; i++) {
                newColors.push(color);
            }
            state.colors = newColors;
        },
        checkSelection(state, clickedSquare) {
            let clickedColor = state.colors[clickedSquare];
            if (clickedColor === state.pickedColor) {
                state.messageDisplayText = "You Picked Right!";
                this.setAllColorsTo(state.pickedColor);
                state.restartButtonText = "Play Again!";
                state.headerBackgroundColor = state.pickedColor;
            } else {
                state.colors.splice(clickedSquare, 1, "#232323");
                state.messageDisplayText = "Try Again!";
            }
        },
    }
})