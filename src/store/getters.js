const getters = {
    token: state => state.user.token,
    userId: state => state.user.userId,
    avatar: state => state.user.avatar,
    nickName: state => state.user.nickName
}

export default getters