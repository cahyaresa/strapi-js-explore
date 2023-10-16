module.exports = ({ env }) => ({
    connection: {
        client: env('DATABASE_CLIENT_TEST', 'sqlite'),
        connection: {
            filename: env('DATABASE_FILENAME_TEST', '.tmp/test.db'),
        },
        useNullAsDefault: true,
        debug: false
    },
});