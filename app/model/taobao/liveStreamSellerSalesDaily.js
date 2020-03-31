'use strict';

module.exports = app => {
    const DataTypes = app.Sequelize;
    const LiveStreamSellerSalesDaily = app.taobaoModel.define('liveStreamSellerSalesDaily', {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncreament: true,
        },
        time: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
        },
        anchorId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
            field: 'anchor_id'
        },
        liveCount: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
            field: 'live_count'
        },
        goodsNum: {
            type:DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
            field: 'goods_num'
        },
        sales: {
            type: DataTypes.DECIMAL(12, 2),
            allowNull: false,
            defaultValue: 0.00
        },
        soldNum: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'soldnum'
        },
        duration: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        createdAt: {
            type: DataTypes.DATE,
            field: "created_at"
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: "updated_at"
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: "deleted_at"
        }                                                                                                                                 
    }, {
        tableName: 'live_stream_seller_sales_daily',
        timestamps: true,
        paranoid: true,
        freezeTableName: true,
        indexes: [
            {
                name: 'time_anchor_id_index',
                type: 'UNIQUE',
                fields: ['time', 'anchor_id']
            }
        ]
    });
    LiveStreamSellerSalesDaily.associate = () => {
        app.taobaoModel.LiveStreamSellerSalesDaily.belongsTo(app.taobaoModel.Anchor, {as: 'anchor', foreignKey: 'anchorId', targetKey: 'id'});
    }
    return LiveStreamSellerSalesDaily;
}
