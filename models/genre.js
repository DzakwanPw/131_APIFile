module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genre', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        deskripsi: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'genres',
        timestamps: false
    });

    Genre.associate = (models) => {

        Genre.belongsToMany(models.Komik, {
            through: 'Komik_Genre',
            foreignKey: 'genre_Id',
            otherKey: 'komik_Id',
            as: 'komik'
        });
        
    };

    return Genre;
};