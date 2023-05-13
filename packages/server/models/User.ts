import {
  Model,
  Table,
  PrimaryKey,
  Column,
  DataType,
  AllowNull,
  BelongsTo,
  Index,
} from 'sequelize-typescript';
import { Ranks } from './Ranks';

@Table({
  tableName: 'users',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class User extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  ya_id!: number;

  @Column(DataType.INTEGER)
  @Index
  rank_id!: number;

  @AllowNull(false)
  @Column
  login!: string;

  @Column
  display_name!: string;

  @Column
  avatar!: string;

  @BelongsTo(() => Ranks, 'rank_id')
  rank?: Ranks;
}
