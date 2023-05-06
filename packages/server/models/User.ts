import {
  Model,
  Table,
  PrimaryKey,
  Column,
  DataType,
  AllowNull,
  BelongsTo,
  HasOne,
  Unique,
  Index,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { UserRanks } from './UserRanks';
import { Ranks } from './Ranks';
import { UserThemes } from './UserThemes';

@Table({
  tableName: 'users',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class User extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  ya_id!: number;

  // @Column(DataType.INTEGER)
  // rank_id!: number;

  @AllowNull(false)
  @Column
  login!: string;

  @Column
  display_name!: string;

  @Column
  avatar!: string;
}
