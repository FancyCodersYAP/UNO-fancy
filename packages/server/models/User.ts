import {
  Model,
  Table,
  PrimaryKey,
  Column,
  DataType,
  AllowNull,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class User extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  ya_id!: number;

  @AllowNull(false)
  @Column
  login!: string;

  @Column
  display_name!: string;

  @Column
  avatar!: string;
}

export const addUserData = async (user: User) => {
  await User.upsert({
    ya_id: user.id,
    login: user.login,
    display_name: user.display_name,
    avatar: user.avatar,
  });
};