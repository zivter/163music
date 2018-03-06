const state = {
    tittle: "zivter"
}

const mutations = {
    changeTittle(tittle, e) {
        state.tittle = e;
    }
}

export default {
    state,
    mutations
};