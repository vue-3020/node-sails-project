module.exports = {
    tableName: 'user',
    adapter: 'mysql',
    autoCreatedAt: false,
    autoUpdatedAt: false,
    attributes: {
        id: { columnName: 'uid' },
        username: {},
        password: {},
        code: {},
    }
}